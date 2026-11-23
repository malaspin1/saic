
import connect from "../db/connect.js";

export default class agendamentoController {

    // CADASTRAR AGENDAMENTO
    static createAgendamento(req, res) {

        try {

            const { status, data, id_horario, id_paciente } = req.body;

            if (!status || !data || !id_horario || !id_paciente) {
                return res.status(400).json({ error: "Todos os dados devem ser preenchidos." });
            } else if (status.length > 30) {
                return res.status(400).json({ error: "O status deve ter no máximo 30 caracteres." });
            } else if (isNaN(Date.parse(data))) {
                return res.status(400).json({ error: "Data inválida." });
            } else if (isNaN(id_horario) || id_horario <= 0) {
                return res.status(400).json({ error: "ID do horário inválido." });
            } else if (isNaN(id_paciente) || id_paciente <= 0) {
                return res.status(400).json({ error: "ID do paciente inválido." });
            }

            const query = "INSERT INTO agendamento (status, data_criacao, data, fk_id_horario, fk_id_paciente) VALUES (?, CURDATE(), ?, ?, ?)";

            connect.query(query, [status, data, id_horario, id_paciente], (err, results) => {

                if (err) {
                    console.log(err);
                    return res.status(500).json({ error: "Erro interno do servidor." });
                }

                return res.status(201).json({
                    message: "Agendamento cadastrado com sucesso.",
                    id_agendamento: results.insertId
                });

            });

        } catch (err) {
            console.log(err);
            return res.status(500).json({ error: "Erro interno do servidor." });
        }

    }


    // LISTAR TODOS OS AGENDAMENTOS
    static getAllAgendamentos(req, res) {

        try {

            const query = "SELECT * FROM agendamento";

            connect.query(query, (err, results) => {

                if (err) {
                    console.log(err);
                    return res.status(500).json({ error: "Erro interno do servidor." });
                }

                return res.status(200).json(results);

            });

        } catch (err) {
            console.log(err);
            return res.status(500).json({ error: "Erro interno do servidor." });
        }

    }


    // BUSCAR AGENDAMENTO PELO ID
    static getAgendamentoById(req, res) {

        try {

            const { id } = req.params;

            if (!id || isNaN(id)) {
                return res.status(400).json({ error: "O ID do agendamento deve ser informado." });
            }

            const query = "SELECT * FROM agendamento WHERE id_agendamento = ?";

            connect.query(query, [id], (err, results) => {

                if (err) {
                    console.log(err);
                    return res.status(500).json({ error: "Erro interno do servidor." });
                }

                if (results.length == 0) {
                    return res.status(404).json({ error: "Agendamento não encontrado." });
                }

                return res.status(200).json(results[0]);

            });

        } catch (err) {
            console.log(err);
            return res.status(500).json({ error: "Erro interno do servidor." });
        }

    }


    // ATUALIZAR AGENDAMENTO
    static updateAgendamento(req, res) {

        try {

            const { id } = req.params;
            const { status, data, id_horario, id_paciente } = req.body;

            if (!id || isNaN(id)) {
                return res.status(400).json({ error: "ID inválido." });
            }

            if (!status && !data && !id_horario && !id_paciente) {
                return res.status(400).json({ error: "Informe pelo menos um dado para atualizar." });
            }

            if (data && isNaN(Date.parse(data))) {
                return res.status(400).json({ error: "Data inválida." });
            }

            if (id_horario && (isNaN(id_horario) || id_horario <= 0)) {
                return res.status(400).json({ error: "ID do horário inválido." });
            }

            if (id_paciente && (isNaN(id_paciente) || id_paciente <= 0)) {
                return res.status(400).json({ error: "ID do paciente inválido." });
            }

            const queryVerificar = "SELECT id_agendamento FROM agendamento WHERE id_agendamento = ?";

            connect.query(queryVerificar, [id], (err, results) => {

                if (err) {
                    console.log(err);
                    return res.status(500).json({ error: "Erro interno do servidor." });
                }

                if (results.length === 0) {
                    return res.status(404).json({ error: "Agendamento não encontrado." });
                }

                const campos = [];
                const valores = [];

                if (status) {
                    campos.push("status = ?");
                    valores.push(status);
                }

                if (data) {
                    campos.push("data = ?");
                    valores.push(data);
                }

                if (id_horario) {
                    campos.push("fk_id_horario = ?");
                    valores.push(id_horario);
                }

                if (id_paciente) {
                    campos.push("fk_id_paciente = ?");
                    valores.push(id_paciente);
                }

                valores.push(id);

                const query = "UPDATE agendamento SET " + campos.join(", ") + " WHERE id_agendamento = ?";

                connect.query(query, valores, (err) => {

                    if (err) {
                        console.log(err);
                        return res.status(500).json({ error: "Erro interno do servidor." });
                    }

                    return res.status(200).json({ message: "Agendamento atualizado com sucesso." });

                });

            });

        } catch (err) {
            console.log(err);
            return res.status(500).json({ error: "Erro interno do servidor." });
        }

    }


    // EXCLUIR AGENDAMENTO
    static deleteAgendamento(req, res) {

        try {

            const { id } = req.params;

            if (!id || isNaN(id)) {
                return res.status(400).json({ error: "O ID do agendamento deve ser informado." });
            }

            const query = "DELETE FROM agendamento WHERE id_agendamento = ?";

            connect.query(query, [id], (err, results) => {

                if (err) {
                    console.log(err);
                    return res.status(500).json({ error: "Erro interno do servidor." });
                }

                if (results.affectedRows == 0) {
                    return res.status(404).json({ error: "Agendamento não encontrado." });
                }

                return res.status(200).json({ message: "Agendamento excluído com sucesso." });

            });

        } catch (err) {
            console.log(err);
            return res.status(500).json({ error: "Erro interno do servidor." });
        }

    }

}
