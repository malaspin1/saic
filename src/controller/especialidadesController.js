import connect from "../db/connect.js";

export default class especialidadesController {
  static async createEspecialidade(req, res) {
    const { nome, descricao } = req.body;
    if (!nome || !descricao) {
      return res
        .status(400)
        .json({ error: "Todos os dados devem ser preenchidos" });
    }
    const query = `INSERT INTO especialidade (nome, descricao)
      VALUES
      (?, ?)`;
    const values = [nome, descricao];
    try {
      connect.query(query, values, (err) => {
        if (err) {
          console.log(err);
          return res.status(500).json({ error: "Erro interno do servidor." });
        }
        return res.status(201).json({ message: "Paciente cadastrado" });
      });
    } catch (error) {
      console.log(error);
      return res.status(500).jsonn({ error: "Erro interno do servidor." });
    }
  }

  static async getAllEspecialidades(req, res) {
    const query = `SELECT * from especialidade`;
    try {
      connect.query(query, function (err, results) {
        if (err) {
          return res.status(500).json({ error: "Erro interno do servidor" });
        }
        return res.status(200).json({
          message: "Lista de especialidades",
          especialidades: results,
        });
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Erro interno do servidor" });
    }
  }

  static async updateEspecialidade(req, res) {
    const { id, nome, descricao } = req.body;
    if (!id || !nome || !descricao) {
      return res
        .status(400)
        .json({ error: "Todos os dados devem ser preenchidos" });
    }
    const query = `UPDATE especialidade SET 
    nome=?,
    descricao=?
    WHERE id=?`;

    const values = [id, nome, descricao];

    try {
      connect.query(query, values, (err, results) => {
        if (err) {
          console.log(err);
          return res.status(500).json({ error: "Erro interno do servidor" });
        }
        if (results.affectedRows === 0) {
          return res.status(404).json({ error: "Especialidade não encotrada" });
        }
        return res
          .status(200)
          .json({ message: "Especialidade atualizada com sucesso" });
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Erro interno do servidor" });
    }
  }

  static async deleteEspecialidade(req, res) {
    const idEspecialidade = req.params.id;
    const query = `DELETE FROM especialidade WHERE id=?`;

    connect.query(query, [idEspecialidade], (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ error: "Erro interno do servidor" });
      }
      if (results.affectedRows === 0) {
        return res.status(404).json({ error: "Especialidade não encotrada" });
      }
      return res
        .status(200)
        .json({ message: "Especialidade excluída com sucesso" });
    });
  }
}
