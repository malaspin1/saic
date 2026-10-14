import connect from "../db/connect.js";

export default class pacienteController {

    static createPaciente(req, res) {
        const { nome, cpf, email, dataNascimento, telefone, senha } = req.body;

        if (!nome || !cpf || !email || !dataNascimento || !telefone || !senha) {
            return res.status(400).json({ error: "Todos os dados devem ser preenchidos." });
        } else if (nome.length > 100) {
            return res.status(400).json({ error: "O nome deve ter no máximo 100 caracteres." });
        } else if (cpf.length != 11 || isNaN(cpf)) {
            return res.status(400).json({ error: "O CPF deve ter exatamente 11 números." });
        } else if (email.length > 100) {
            return res.status(400).json({ error: "O e-mail deve ter no máximo 100 caracteres." });
        } else if (telefone.length != 11 || isNaN(telefone)) {
            return res.status(400).json({ error: "O telefone deve ter exatamente 11 números." });
        } else if (senha.length < 8 || senha.length > 100) {
            return res.status(400).json({ error: "A senha deve ter entre 8 e 100 caracteres." });
        }

        const partesData = dataNascimento.split("-");

        if (partesData.length != 3 || partesData[0].length != 2 || partesData[1].length != 2 || partesData[2].length != 4) {
            return res.status(400).json({ error: "A data deve estar no formato DD-MM-AAAA." });
        }

        const dia = Number(partesData[0]);
        const mes = Number(partesData[1]);
        const ano = Number(partesData[2]);
        const nascimento = new Date(ano, mes - 1, dia);
        const hoje = new Date();

        if (nascimento.getDate() != dia || nascimento.getMonth() != mes - 1 || nascimento.getFullYear() != ano) {
            return res.status(400).json({ error: "Data de nascimento inválida." });
        } else if (nascimento > hoje) {
            return res.status(400).json({ error: "A data de nascimento não pode ser futura." });
        } else if (nascimento < new Date(hoje.getFullYear() - 100, hoje.getMonth(), hoje.getDate())) {
            return res.status(400).json({ error: "O paciente não pode ter mais de 100 anos." });
        }

        const dataSQL = ano + "-" + partesData[1] + "-" + partesData[0];
        const queryVerificar = "SELECT id_paciente FROM paciente WHERE cpf = ? OR email = ? OR telefone = ?";

        connect.query(queryVerificar, [cpf, email, telefone], (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ error: "Erro interno do servidor." });
            }
            if (results.length > 0) {
                return res.status(409).json({ error: "CPF, e-mail ou telefone já cadastrado." });
            }

            const query = "INSERT INTO paciente (nome, cpf, email, data_nascimento, telefone, data_cadastro, senha) VALUES (?, ?, ?, ?, ?, CURDATE(), ?)";

            connect.query(query, [nome, cpf, email, dataSQL, telefone, senha], (err, results) => {
                if (err) {
                    console.log(err);
                    return res.status(500).json({ error: "Erro interno do servidor." });
                }

                return res.status(201).json({ message: "Paciente cadastrado com sucesso.", id_paciente: results.insertId });
            });
        });
    }

    static getAllPacientes(req, res) {
        const query = "SELECT id_paciente, nome, cpf, email, data_nascimento, telefone, data_cadastro FROM paciente";

        connect.query(query, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ error: "Erro interno do servidor." });
            }

            return res.status(200).json(results);
        });
    }

    static getPacienteById(req, res) {
        const { id } = req.params;

        if (!id || isNaN(id)) {
            return res.status(400).json({ error: "O ID do paciente deve ser informado." });
        }

        const query = "SELECT id_paciente, nome, cpf, email, data_nascimento, telefone, data_cadastro FROM paciente WHERE id_paciente = ?";

        connect.query(query, [id], (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ error: "Erro interno do servidor." });
            }
            if (results.length == 0) {
                return res.status(404).json({ error: "Paciente não encontrado." });
            }

            return res.status(200).json(results[0]);
        });
    }

    static updatePaciente(req, res) {
        const { id } = req.params;
        const { nome, cpf, email, dataNascimento, telefone, senha } = req.body;

        if (!id || isNaN(id)) {
            return res.status(400).json({ error: "ID inválido." });
        }
        if (!nome && !cpf && !email && !dataNascimento && !telefone && !senha) {
            return res.status(400).json({ error: "Informe pelo menos um dado para atualizar." });
        }
        if (nome && nome.length > 100) {
            return res.status(400).json({ error: "O nome deve ter no máximo 100 caracteres." });
        }
        if (cpf && (cpf.length != 11 || isNaN(cpf))) {
            return res.status(400).json({ error: "O CPF deve ter exatamente 11 números." });
        }
        if (email && email.length > 100) {
            return res.status(400).json({ error: "O e-mail deve ter no máximo 100 caracteres." });
        }
        if (telefone && (telefone.length != 11 || isNaN(telefone))) {
            return res.status(400).json({ error: "O telefone deve ter exatamente 11 números." });
        }
        if (senha && (senha.length < 8 || senha.length > 100)) {
            return res.status(400).json({ error: "A senha deve ter entre 8 e 100 caracteres." });
        }

        let dataSQL = "";

        if (dataNascimento) {
            const partesData = dataNascimento.split("-");

            if (partesData.length != 3 || partesData[0].length != 2 || partesData[1].length != 2 || partesData[2].length != 4) {
                return res.status(400).json({ error: "A data deve estar no formato DD-MM-AAAA." });
            }

            const dia = Number(partesData[0]);
            const mes = Number(partesData[1]);
            const ano = Number(partesData[2]);
            const nascimento = new Date(ano, mes - 1, dia);
            const hoje = new Date();

            if (nascimento.getDate() != dia || nascimento.getMonth() != mes - 1 || nascimento.getFullYear() != ano) {
                return res.status(400).json({ error: "Data de nascimento inválida." });
            }
            if (nascimento > hoje) {
                return res.status(400).json({ error: "A data de nascimento não pode ser futura." });
            }
            if (nascimento < new Date(hoje.getFullYear() - 100, hoje.getMonth(), hoje.getDate())) {
                return res.status(400).json({ error: "O paciente não pode ter mais de 100 anos." });
            }

            dataSQL = ano + "-" + partesData[1] + "-" + partesData[0];
        }

        const queryVerificar = "SELECT id_paciente FROM paciente WHERE id_paciente = ?";

        connect.query(queryVerificar, [id], (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ error: "Erro interno do servidor." });
            }
            if (results.length == 0) {
                return res.status(404).json({ error: "Paciente não encontrado." });
            }

            const queryDuplicado = "SELECT id_paciente FROM paciente WHERE (cpf = ? OR email = ? OR telefone = ?) AND id_paciente != ?";

            connect.query(queryDuplicado, [cpf || "", email || "", telefone || "", id], (err, results) => {
                if (err) {
                    console.log(err);
                    return res.status(500).json({ error: "Erro interno do servidor." });
                }
                if (results.length > 0) {
                    return res.status(409).json({ error: "CPF, e-mail ou telefone já cadastrado." });
                }

                const campos = [];
                const valores = [];

                if (nome) {
                    campos.push("nome = ?");
                    valores.push(nome);
                }
                if (cpf) {
                    campos.push("cpf = ?");
                    valores.push(cpf);
                }
                if (email) {
                    campos.push("email = ?");
                    valores.push(email);
                }
                if (dataNascimento) {
                    campos.push("data_nascimento = ?");
                    valores.push(dataSQL);
                }
                if (telefone) {
                    campos.push("telefone = ?");
                    valores.push(telefone);
                }
                if (senha) {
                    campos.push("senha = ?");
                    valores.push(senha);
                }

                valores.push(id);

                const query = "UPDATE paciente SET " + campos.join(", ") + " WHERE id_paciente = ?";

                connect.query(query, valores, (err) => {
                    if (err) {
                        console.log(err);
                        return res.status(500).json({ error: "Erro interno do servidor." });
                    }

                    return res.status(200).json({ message: "Paciente atualizado com sucesso." });
                });
            });
        });
    }

    static deletePaciente(req, res) {
        const { id } = req.params;

        if (!id || isNaN(id)) {
            return res.status(400).json({ error: "O ID do paciente deve ser informado." });
        }

        const query = "DELETE FROM paciente WHERE id_paciente = ?";

        connect.query(query, [id], (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ error: "Erro interno do servidor." });
            }
            if (results.affectedRows == 0) {
                return res.status(404).json({ error: "Paciente não encontrado." });
            }

            return res.status(200).json({ message: "Paciente excluído com sucesso." });
        });
    }
}