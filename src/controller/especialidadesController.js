import connect from "../db/connect.js";

export default class especialidadesController {
  static async createEspecialidade(req, res) {
    const { nome, descricao } = req.body;

    if (!nome || !descricao) {
      return res.status(400).json({ error: "Todos os dados devem ser preenchidos" });
    }

    const queryVerificar = "SELECT id_especialidade FROM especialidade WHERE nome = ?";

    connect.query(queryVerificar, [nome], (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ error: "Erro interno do servidor." });
      }

      if (results.length > 0) {
        return res.status(409).json({ error: "Essa especialidade já está cadastrada." });
      }

      const query = "INSERT INTO especialidade (nome, descricao) VALUES (?, ?)";
      const values = [nome, descricao];

      connect.query(query, values, (err) => {
        if (err) {
          console.log(err);
          return res.status(500).json({ error: "Erro interno do servidor." });
        }

        return res.status(201).json({ message: "Especialidade cadastrada com sucesso." });
      });
    });
  }

  static async getAllEspecialidades(req, res) {
    const query = "SELECT * FROM especialidade";

    connect.query(query, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ error: "Erro interno do servidor." });
      }

      return res.status(200).json({ message: "Lista de especialidades", especialidades: results });
    });
  }

  static async getEspecialidadeById(req, res) {
    const id = req.params.id;
    const query = "SELECT * FROM especialidade WHERE id_especialidade = ?";

    connect.query(query, [id], (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ error: "Erro interno do servidor." });
      }

      if (results.length === 0) {
        return res.status(404).json({ error: "Especialidade não encontrada." });
      }

      return res.status(200).json({ especialidade: results[0] });
    });
  }

  static async updateEspecialidade(req, res) {
    const id = req.params.id;
    const { nome, descricao } = req.body;

    if (!nome || !descricao) {
      return res.status(400).json({ error: "Todos os dados devem ser preenchidos." });
    }

    const queryVerificar = "SELECT id_especialidade FROM especialidade WHERE nome = ? AND id_especialidade != ?";

    connect.query(queryVerificar, [nome, id], (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ error: "Erro interno do servidor." });
      }

      if (results.length > 0) {
        return res.status(409).json({ error: "Já existe outra especialidade com esse nome." });
      }

      const query = "UPDATE especialidade SET nome = ?, descricao = ? WHERE id_especialidade = ?";
      const values = [nome, descricao, id];

      connect.query(query, values, (err, result) => {
        if (err) {
          console.log(err);
          return res.status(500).json({ error: "Erro interno do servidor." });
        }

        if (result.affectedRows === 0) {
          return res.status(404).json({ error: "Especialidade não encontrada." });
        }

        return res.status(200).json({ message: "Especialidade atualizada com sucesso." });
      });
    });
  }

  static async deleteEspecialidade(req, res) {
    const id = req.params.id;
    const query = "DELETE FROM especialidade WHERE id_especialidade = ?";

    connect.query(query, [id], (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ error: "Erro interno do servidor." });
      }

      if (result.affectedRows === 0) {
        return res.status(404).json({ error: "Especialidade não encontrada." });
      }

      return res.status(200).json({ message: "Especialidade excluída com sucesso." });
    });
  }
}