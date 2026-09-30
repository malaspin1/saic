let especialidades = [];

export default class especialidadesController {
  // Metodo de criação de usuario
  static async createEspecialidade(req, res) {
    let id = null;
    const { nome, descricao } = req.body;
    if (!nome || !descricao) {
      return res
        .status(400)
        .json({ error: "Todos os dados devem ser preenchidos" });
    }
    if (especialidades.length > 0) {
      id = especialidades[especialidades.length - 1].id + 1;
    } else {
      id = 1;
    }
    especialidades.push({ id, nome, descricao });
    console.log("Especialidade criada!");
    return res
      .status(201)
      .json({ message: "Especialidadce criada com sucesso" });
  }

  // Metodo de listagem de usuarios
  static async getAllEspecialidades(req, res) {
    return res
      .status(200)
      .json({ message: "Lista de especialidades", especialidades });
  }

  // Metodo de atualização de usuario
  static async updateEspecialidade(req, res) {
    const { id, nome, descricao } = req.body;
    if (!id || !nome || !descricao) {
      return res
        .status(400)
        .json({ error: "Todos os dados devem ser preenchidos" });
    }
    const especialidadeIndex = especialidades.findIndex(
      (especialidade) => especialidade.id == id,
    );
    if (especialidadeIndex === -1) {
      return res.status(404).json({
        error: "O Id informado não está cadastrado",
      });
    }
    especialidades[especialidadeIndex] = { id, nome, descricao };
    console.log("Especialidade atualizada!");
    return res
      .status(201)
      .json({ message: "Especialidadce atualizada com sucesso" });
  }

  // Metodo de exclusão de Especialidade
  static async deleteEspecialidade(req, res) {
    const { id } = req.params;

    const especialidadeIndex = especialidades.findIndex(
      (user) => user.id == id,
    );

    if (especialidadeIndex === -1) {
      return res.status(404).json({
        error: "O Id informado não está cadastrado e não pode ser apagado",
      });
    } else {
      especialidades.splice(especialidadeIndex, 1);

      console.log("Especialidade deletada!");
    }
  }
}
