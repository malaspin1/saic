import connect from "../db/connect.js";

export default class medicoController {

    static createMedico(req, res) {
        const { nome, cpf, email, dataNascimento, telefone, senha, crm } = req.body;

        if (!nome || !cpf || !email || !dataNascimento || !telefone || !senha || !crm) {
            return res.status(400).json({ error: "Todos os dados devem ser preenchidos." });
        }
        if (nome.length > 100 || email.length > 100) {
            return res.status(400).json({ error: "Nome e e-mail devem ter no máximo 100 caracteres." });
        }
        if (isNaN(cpf) || cpf.length != 11) {
            return res.status(400).json({ error: "O CPF deve ter 11 números." });
        }
        if (isNaN(telefone) || telefone.length != 11) {
            return res.status(400).json({ error: "O telefone deve ter 11 números." });
        }
        if (senha.length < 8 || senha.length > 100) {
            return res.status(400).json({ error: "A senha deve ter entre 8 e 100 caracteres." });
        }
        if (isNaN(crm) || crm.length != 6) {
            return res.status(400).json({ error: "O CRM deve ter 6 números." });
        }
        const partesData = dataNascimento.split("-");

        if (partesData.length != 3 || partesData[0].length != 2 || partesData[1].length != 2 || partesData[2].length != 4) {
            return res.status(400).json({ error: "A data deve estar no formato DD-MM-AAAA." });
        }

        const dia = Number(partesData[0]);
        const mes = Number(partesData[1]);
        const ano = Number(partesData[2]);
        const data = new Date(ano, mes - 1, dia);

        if (data.getDate() != dia || data.getMonth() != mes - 1 || data.getFullYear() != ano) {
            return res.status(400).json({ error: "Data de nascimento inválida." });
        }
        if (data > new Date()) {
            return res.status(400).json({ error: "A data de nascimento não pode ser futura." });
        }

        const dataSQL = ano + "-" + partesData[1] + "-" + partesData[0];

        const queryVerificar = "SELECT id_medico FROM medico WHERE cpf = ? OR email = ? OR telefone = ? OR crm = ?";

        connect.query(queryVerificar, [cpf, email, telefone, crm], (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ error: "Erro interno do servidor." });
            }
            if (results.length > 0) {
                return res.status(409).json({ error: "CPF, e-mail, telefone ou CRM já cadastrado." });
            }

            const query = "INSERT INTO medico (nome, cpf, email, data_nascimento, telefone, data_cadastro, senha, crm) VALUES (?, ?, ?, ?, ?, CURDATE(), ?, ?)";

            connect.query(query, [nome, cpf, email, dataSQL, telefone, senha, crm], (err) => {
                if (err) {
                    console.log(err);
                    return res.status(500).json({ error: "Erro interno do servidor." });
                }
                return res.status(201).json({ message: "Médico cadastrado com sucesso." });
            });
        });
    }

    static getAllMedicos(req, res) {
        const query = "SELECT id_medico, nome, cpf, email, data_nascimento, telefone, data_cadastro, crm FROM medico";

        connect.query(query, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ error: "Erro interno do servidor." });
            }
            return res.status(200).json(results);
        });
    }

    static getMedicoById(req, res) {
        const { id } = req.params;
        const query = "SELECT id_medico, nome, cpf, email, data_nascimento, telefone, data_cadastro, crm FROM medico WHERE id_medico = ?";

        connect.query(query, [id], (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ error: "Erro interno do servidor." });
            }
            if (results.length == 0) {
                return res.status(404).json({ error: "Médico não encontrado." });
            }
            return res.status(200).json(results[0]);
        });
    }

    static updateMedico(req, res) {
        const { id } = req.params;
        const { nome, cpf, email, dataNascimento, telefone, senha, crm } = req.body;

        if (!nome && !cpf && !email && !dataNascimento && !telefone && !senha && !crm) {
            return res.status(400).json({ error: "Informe pelo menos um dado para atualizar." });
        }

        const queryVerificarId = "SELECT id_medico FROM medico WHERE id_medico = ?";

        connect.query(queryVerificarId, [id], (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ error: "Erro interno do servidor." });
            }
            if (results.length == 0) {
                return res.status(404).json({ error: "Médico não encontrado." });
            }
            if (nome) {
                if (nome.length > 100) {
                    return res.status(400).json({ error: "O nome deve ter no máximo 100 caracteres." });
                }

                const query = "UPDATE medico SET nome = ? WHERE id_medico = ?";

                connect.query(query, [nome, id], (err) => {
                    if (err) {
                        console.log(err);
                        return res.status(500).json({ error: "Erro interno do servidor." });
                    }
                });
            }

            if (cpf) {
                if (isNaN(cpf) || cpf.length != 11) {
                    return res.status(400).json({ error: "O CPF deve ter 11 números." });
                }

                const query = "SELECT id_medico FROM medico WHERE cpf = ? AND id_medico != ?";

                connect.query(query, [cpf, id], (err, results) => {
                    if (err) {
                        console.log(err);
                        return res.status(500).json({ error: "Erro interno do servidor." });
                    }
                    if (results.length > 0) {
                        return res.status(409).json({ error: "Esse CPF já está cadastrado." });
                    }

                    connect.query("UPDATE medico SET cpf = ? WHERE id_medico = ?", [cpf, id], (err) => {
                        if (err) {
                            console.log(err);
                            return res.status(500).json({ error: "Erro interno do servidor." });
                        }
                    });
                });
            }

            if (email) {
                if (email.length > 100) {
                    return res.status(400).json({ error: "O e-mail deve ter no máximo 100 caracteres." });
                }

                const query = "SELECT id_medico FROM medico WHERE email = ? AND id_medico != ?";

                connect.query(query, [email, id], (err, results) => {
                    if (err) {
                        console.log(err);
                        return res.status(500).json({ error: "Erro interno do servidor." });
                    }
                    if (results.length > 0) {
                        return res.status(409).json({ error: "Esse e-mail já está cadastrado." });
                    }

                    connect.query("UPDATE medico SET email = ? WHERE id_medico = ?", [email, id], (err) => {
                        if (err) {
                            console.log(err);
                            return res.status(500).json({ error: "Erro interno do servidor." });
                        }
                    });
                });
            }

            if (dataNascimento) {
                const partesData = dataNascimento.split("-");

                if (partesData.length != 3 || partesData[0].length != 2 || partesData[1].length != 2 || partesData[2].length != 4) {
                    return res.status(400).json({ error: "A data deve estar no formato DD-MM-AAAA." });
                }

                const dia = Number(partesData[0]);
                const mes = Number(partesData[1]);
                const ano = Number(partesData[2]);
                const data = new Date(ano, mes - 1, dia);

                if (data.getDate() != dia || data.getMonth() != mes - 1 || data.getFullYear() != ano || data > new Date()) {
                    return res.status(400).json({ error: "Data de nascimento inválida." });
                }

                const dataSQL = ano + "-" + partesData[1] + "-" + partesData[0];

                connect.query("UPDATE medico SET data_nascimento = ? WHERE id_medico = ?", [dataSQL, id], (err) => {
                    if (err) {
                        console.log(err);
                        return res.status(500).json({ error: "Erro interno do servidor." });
                    }
                });
            }

            if (telefone) {
                if (isNaN(telefone) || telefone.length != 11) {
                    return res.status(400).json({ error: "O telefone deve ter 11 números." });
                }

                const query = "SELECT id_medico FROM medico WHERE telefone = ? AND id_medico != ?";

                connect.query(query, [telefone, id], (err, results) => {
                    if (err) {
                        console.log(err);
                        return res.status(500).json({ error: "Erro interno do servidor." });
                    }
                    if (results.length > 0) {
                        return res.status(409).json({ error: "Esse telefone já está cadastrado." });
                    }

                    connect.query("UPDATE medico SET telefone = ? WHERE id_medico = ?", [telefone, id], (err) => {
                        if (err) {
                            console.log(err);
                            return res.status(500).json({ error: "Erro interno do servidor." });
                        }
                    });
                });
            }

            if (senha) {
                if (senha.length < 8 || senha.length > 100) {
                    return res.status(400).json({ error: "A senha deve ter entre 8 e 100 caracteres." });
                }

                connect.query("UPDATE medico SET senha = ? WHERE id_medico = ?", [senha, id], (err) => {
                    if (err) {
                        console.log(err);
                        return res.status(500).json({ error: "Erro interno do servidor." });
                    }
                });
            }

            if (crm) {
                if (isNaN(crm) || crm.length != 6) {
                    return res.status(400).json({ error: "O CRM deve ter 6 números." });
                }

                const query = "SELECT id_medico FROM medico WHERE crm = ? AND id_medico != ?";

                connect.query(query, [crm, id], (err, results) => {
                    if (err) {
                        console.log(err);
                        return res.status(500).json({ error: "Erro interno do servidor." });
                    }
                    if (results.length > 0) {
                        return res.status(409).json({ error: "Esse CRM já está cadastrado." });
                    }

                    connect.query("UPDATE medico SET crm = ? WHERE id_medico = ?", [crm, id], (err) => {
                        if (err) {
                            console.log(err);
                            return res.status(500).json({ error: "Erro interno do servidor." });
                        }
                    });
                });
            }
            return res.status(200).json({ message: "Dados do médico atualizados com sucesso." });
        });
    }

    static deleteMedico(req, res) {
        const { id } = req.params;

        const query = "DELETE FROM medico WHERE id_medico = ?";

        connect.query(query, [id], (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ error: "Erro interno do servidor." });
            }
            if (results.affectedRows == 0) {
                return res.status(404).json({ error: "Médico não encontrado." });
            }

            return res.status(200).json({ message: "Médico excluído com sucesso." });
        });
    }
}