import connect from "../db/connect.js";

export default class unidadesController {
  static async createUnidades(req, res) {
    const {
      nome_unidade,
      descricao_unidade,
      cep,
      estado,
      cidade,
      bairro,
      complemento,
      logradouro,
      numero,
    } = req.body;
    if (
      !nome_unidade ||
      !descricao_unidade ||
      !cep ||
      !estado ||
      !cidade ||
      !bairro ||
      !logradouro ||
      !numero
    ) {
      return res
        .status(400)
        .json({ error: "Todos os dados devem ser preenchidos" });
    }
    let complemento_final = null;
    if (complemento) {
      complemento_final = complemento || null;
    }
    const values = [];
    try {
      // Query
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Erro interno do servidor." });
    }
  }

  static async getAllUnidades(req, res) {}

  static async updateUnidades(req, res) {
    const {
      id_unidade,
      nome_unidade,
      descricao_unidade,
      cep,
      estado,
      cidade,
      bairro,
      complemento,
      logradouro,
      numero,
    } = req.body;
    if (
      !id_unidade ||
      !nome_unidade ||
      !descricao_unidade ||
      !cep ||
      !estado ||
      !cidade ||
      !bairro ||
      !logradouro ||
      !numero
    ) {
      return res
        .status(400)
        .json({ error: "Todos os dados devem ser preenchidos" });
    }
    const complementoFinal = complemento || null;
    const values = [];
    try {
      // Query
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Erro interno do servidor." });
    }
  }

  static async deleteUnidade(req, res) {
    const id_unidade = req.params.id;
  }
}
