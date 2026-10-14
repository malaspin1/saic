import connect from "../db/connect.js";

export default class especialidadesController {
  static async createEspecialidade(req, res) {
    const { nome, descricao } = req.body;
    if (!nome || !descricao) {
      return res
        .status(400)
        .json({ error: "Todos os dados devem ser preenchidos" });
    }

  }
  static async getAllEspecialidades(req, res) {
  }

  static async updateEspecialidade(req, res) {
    const { id, nome, descricao } = req.body;
    if (!id || !nome || !descricao) {
      return res
        .status(400)
        .json({ error: "Todos os dados devem ser preenchidos" });
    }
  }

  static async deleteEspecialidade(req, res) {
    const id_especialidade = req.params.id;
  }
}
