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
    console.log("Especialidade criada!")
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
}
