const pacientes = [];

let proximoId = 1;

export default class pacienteController {
  static async createPaciente(req, res) {
    const { nome, cpf, email, dataNascimento, telefone, senha } = req.body;

    if (!nome || !cpf || !email || !dataNascimento || !telefone || !senha) {
      return res.status(400).json({
        error: "Todos os dados devem ser preenchidos.",
      });
    } else if (nome.length > 100) {
      return res.status(400).json({
        error: "O nome deve ter no máximo 100 caracteres.",
      });
    } else if (cpf.length !== 11 || isNaN(cpf)) {
      return res.status(400).json({
        error: "O CPF deve ter exatamente 11 números.",
      });
    } else if (email.length > 100) {
      return res.status(400).json({
        error: "O e-mail deve ter no máximo 100 caracteres.",
      });
    } else if (telefone.length !== 11 || isNaN(telefone)) {
      return res.status(400).json({
        error: "O telefone deve ter exatamente 11 números.",
      });
    } else if (senha.length < 8 || senha.length > 100) {
      return res.status(400).json({
        error: "A senha deve ter entre 8 e 100 caracteres.",
      });
    }

    const partesData = dataNascimento.split("-");

    if (partesData.length !== 3) {
      return res.status(400).json({
        error: "A data deve estar no formato DD-MM-AAAA.",
      });
    }

    const [dia, mes, ano] = partesData;

    const nascimento = new Date(ano, mes - 1, dia);
    const hoje = new Date();

    if (
      nascimento.getDate() !== Number(dia) ||
      nascimento.getMonth() !== Number(mes) - 1 ||
      nascimento.getFullYear() !== Number(ano)
    ) {
      return res.status(400).json({
        error: "Data de nascimento inválida.",
      });
    } else if (nascimento > hoje) {
      return res.status(400).json({
        error: "A data de nascimento não pode ser futura.",
      });
    } else {
      const dataLimite = new Date(
        hoje.getFullYear() - 100,
        hoje.getMonth(),
        hoje.getDate(),
      );

      if (nascimento < dataLimite) {
        return res.status(400).json({
          error: "O paciente não pode ter mais de 100 anos.",
        });
      }
    }

    const pacienteExistente = pacientes.find(
      (paciente) =>
        paciente.cpf === cpf ||
        paciente.email === email ||
        paciente.telefone === telefone,
    );

    if (pacienteExistente) {
      if (pacienteExistente.cpf === cpf) {
        return res.status(400).json({
          error: "Este CPF já está cadastrado.",
        });
      } else if (pacienteExistente.email === email) {
        return res.status(400).json({
          error: "Este e-mail já está cadastrado.",
        });
      } else if (pacienteExistente.telefone === telefone) {
        return res.status(400).json({
          error: "Este telefone já está cadastrado.",
        });
      }
    }

    const novoPaciente = {
      id_paciente: proximoId,
      nome,
      cpf,
      email,
      data_nascimento: dataNascimento,
      telefone,
      senha,
    };

    pacientes.push(novoPaciente);

    proximoId++;

    return res.status(201).json({
      message: "Paciente cadastrado com sucesso.",
      paciente: novoPaciente,
    });
  }

  static async getAllPacientes(req, res) {
    if (pacientes.length === 0) {
      return res.status(200).json({
        message: "Nenhum paciente cadastrado.",
        pacientes: [],
      });
    }

    return res.status(200).json({
      message: "Lista de pacientes",
      pacientes: pacientes,
    });
  }

  static async getPacienteById(req, res) {
    const { id } = req.params;

    if (!id || isNaN(id)) {
      return res.status(400).json({
        error: "O ID do paciente deve ser informado.",
      });
    }

    const paciente = pacientes.find(
      (paciente) => paciente.id_paciente === Number(id),
    );

    if (!paciente) {
      return res.status(404).json({
        error: "Paciente não encontrado.",
      });
    }

    return res.status(200).json({
      paciente: paciente,
    });
  }

  static async updatePaciente(req, res) {
    const { id } = req.params;

    const { nome, cpf, email, dataNascimento, telefone, senha } = req.body;

    if (!id || isNaN(id)) {
      return res.status(400).json({
        error: "O ID do paciente deve ser informado.",
      });
    } else if (
      !nome ||
      !cpf ||
      !email ||
      !dataNascimento ||
      !telefone ||
      !senha
    ) {
      return res.status(400).json({
        error: "Todos os dados devem ser preenchidos.",
      });
    } else if (nome.length > 100) {
      return res.status(400).json({
        error: "O nome deve ter no máximo 100 caracteres.",
      });
    } else if (cpf.length !== 11 || isNaN(cpf)) {
      return res.status(400).json({
        error: "O CPF deve ter exatamente 11 números.",
      });
    } else if (email.length > 100) {
      return res.status(400).json({
        error: "O e-mail deve ter no máximo 100 caracteres.",
      });
    } else if (telefone.length !== 11 || isNaN(telefone)) {
      return res.status(400).json({
        error: "O telefone deve ter exatamente 11 números.",
      });
    } else if (senha.length < 8 || senha.length > 100) {
      return res.status(400).json({
        error: "A senha deve ter entre 8 e 100 caracteres.",
      });
    }

    const partesData = dataNascimento.split("-");

    if (partesData.length !== 3) {
      return res.status(400).json({
        error: "A data deve estar no formato DD-MM-AAAA.",
      });
    }

    const [dia, mes, ano] = partesData;

    const nascimento = new Date(ano, mes - 1, dia);
    const hoje = new Date();

    if (
      nascimento.getDate() !== Number(dia) ||
      nascimento.getMonth() !== Number(mes) - 1 ||
      nascimento.getFullYear() !== Number(ano)
    ) {
      return res.status(400).json({
        error: "Data de nascimento inválida.",
      });
    } else if (nascimento > hoje) {
      return res.status(400).json({
        error: "A data de nascimento não pode ser futura.",
      });
    } else {
      const dataLimite = new Date(
        hoje.getFullYear() - 100,
        hoje.getMonth(),
        hoje.getDate(),
      );

      if (nascimento < dataLimite) {
        return res.status(400).json({
          error: "O paciente não pode ter mais de 100 anos.",
        });
      }
    }

    const paciente = pacientes.find(
      (paciente) => paciente.id_paciente === Number(id),
    );

    if (!paciente) {
      return res.status(404).json({
        error: "Paciente não encontrado.",
      });
    }

    const pacienteExistente = pacientes.find(
      (paciente) =>
        paciente.id_paciente !== Number(id) &&
        (paciente.cpf === cpf ||
          paciente.email === email ||
          paciente.telefone === telefone),
    );

    if (pacienteExistente) {
      if (pacienteExistente.cpf === cpf) {
        return res.status(400).json({
          error: "Este CPF já está cadastrado.",
        });
      } else if (pacienteExistente.email === email) {
        return res.status(400).json({
          error: "Este e-mail já está cadastrado.",
        });
      } else if (pacienteExistente.telefone === telefone) {
        return res.status(400).json({
          error: "Este telefone já está cadastrado.",
        });
      }
    }

    paciente.nome = nome;
    paciente.cpf = cpf;
    paciente.email = email;
    paciente.data_nascimento = dataNascimento;
    paciente.telefone = telefone;
    paciente.senha = senha;

    return res.status(200).json({
      message: "Paciente atualizado com sucesso.",
      paciente: paciente,
    });
  }

  static async deletePaciente(req, res) {
    const { id } = req.params;

    if (!id || isNaN(id)) {
      return res.status(400).json({
        error: "O ID do paciente deve ser informado.",
      });
    }

    const indice = pacientes.findIndex(
      (paciente) => paciente.id_paciente === Number(id),
    );

    if (indice === -1) {
      return res.status(404).json({
        error: "Paciente não encontrado.",
      });
    }

    pacientes.splice(indice, 1);

    return res.status(200).json({
      message: "Paciente excluído com sucesso.",
    });
  }
}
