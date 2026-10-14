import connect from "../db/connect.js";

export default class unidadesController {

    // Cadastrar unidade
    static createUnidades(req, res) {
        const { nome_unidade, descricao_unidade, cep, estado, cidade, bairro, complemento, logradouro, numero } = req.body;

        if (!nome_unidade || !descricao_unidade || !cep || !estado || !cidade || !bairro || !logradouro || !numero) {
            return res.status(400).json({ message: "Preencha todos os campos obrigatórios." });
        }

        const queryVerificar = "SELECT id_unidade FROM unidade WHERE nome_unidade = ?";

        connect.query(queryVerificar, [nome_unidade], (error, results) => {
            if (error) {
                return res.status(500).json({ message: "Erro ao verificar unidade." });
            }

            if (results.length > 0) {
                return res.status(409).json({ message: "Já existe uma unidade com esse nome." });
            }

            const query = "INSERT INTO unidade (nome_unidade, descricao_unidade, cep, estado, cidade, bairro, complemento, logradouro, numero) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
            const values = [nome_unidade, descricao_unidade, cep, estado, cidade, bairro, complemento || null, logradouro, numero];

            connect.query(query, values, (error, result) => {
                if (error) {
                    return res.status(500).json({ message: "Erro ao cadastrar unidade." });
                }

                return res.status(201).json({
                    message: "Unidade cadastrada com sucesso.",
                    id_unidade: result.insertId
                });
            });
        });
    }

    // Listar todas as unidades
    static getAllUnidades(req, res) {
        const query = "SELECT * FROM unidade";

        connect.query(query, (error, results) => {
            if (error) {
                return res.status(500).json({ message: "Erro ao buscar unidades." });
            }

            return res.status(200).json({
                message: results.length === 0 ? "Nenhuma unidade cadastrada." : "Lista de unidades.",
                unidades: results
            });
        });
    }

    // Buscar unidade por ID
    static getUnidadesById(req, res) {
        const id = req.params.id;

        if (!id || isNaN(id)) {
            return res.status(400).json({ message: "ID inválido." });
        }

        const query = "SELECT * FROM unidade WHERE id_unidade = ?";

        connect.query(query, [id], (error, results) => {
            if (error) {
                return res.status(500).json({ message: "Erro ao buscar unidade." });
            }

            if (results.length === 0) {
                return res.status(404).json({ message: "Unidade não encontrada." });
            }

            return res.status(200).json({ unidade: results[0] });
        });
    }

    // Atualizar unidade
    static updateUnidades(req, res) {
        const id = req.params.id;
        const { nome_unidade, descricao_unidade, cep, estado, cidade, bairro, complemento, logradouro, numero } = req.body;

        if (!id || isNaN(id)) {
            return res.status(400).json({ message: "ID inválido." });
        }

        if (!nome_unidade || !descricao_unidade || !cep || !estado || !cidade || !bairro || !logradouro || !numero) {
            return res.status(400).json({ message: "Preencha todos os campos obrigatórios." });
        }

        const queryVerificar = "SELECT id_unidade FROM unidade WHERE nome_unidade = ? AND id_unidade != ?";

        connect.query(queryVerificar, [nome_unidade, id], (error, results) => {
            if (error) {
                return res.status(500).json({ message: "Erro ao verificar unidade." });
            }

            if (results.length > 0) {
                return res.status(409).json({ message: "Já existe outra unidade com esse nome." });
            }

            const query = "UPDATE unidade SET nome_unidade = ?, descricao_unidade = ?, cep = ?, estado = ?, cidade = ?, bairro = ?, complemento = ?, logradouro = ?, numero = ? WHERE id_unidade = ?";
            const values = [nome_unidade, descricao_unidade, cep, estado, cidade, bairro, complemento || null, logradouro, numero, id];

            connect.query(query, values, (error, result) => {
                if (error) {
                    return res.status(500).json({ message: "Erro ao atualizar unidade." });
                }

                if (result.affectedRows === 0) {
                    return res.status(404).json({ message: "Unidade não encontrada." });
                }

                return res.status(200).json({ message: "Unidade atualizada com sucesso." });
            });
        });
    }

    // Excluir unidade
    static deleteUnidade(req, res) {
        const id = req.params.id;

        if (!id || isNaN(id)) {
            return res.status(400).json({ message: "ID inválido." });
        }

        const query = "DELETE FROM unidade WHERE id_unidade = ?";

        connect.query(query, [id], (error, result) => {
            if (error) {
                return res.status(500).json({ message: "Erro ao excluir unidade." });
            }

            if (result.affectedRows === 0) {
                return res.status(404).json({ message: "Unidade não encontrada." });
            }

            return res.status(200).json({ message: "Unidade excluída com sucesso." });
        });
    }
}