const medicos = [];

let proximoId = 1;

export default class medicoController {

  static async createMedico(req, res) {

    const { nome, cpf, email, dataNascimento, telefone, senha, crm } = req.body;

    if (!nome || !cpf || !email || !dataNascimento || !telefone || !senha || !crm) {
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
    } else if (crm.length !== 6 || isNaN(crm)) {
      return res.status(400).json({
        error: "O CRM deve ter exatamente 6 números.",
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
    }

    const medicoExistente = medicos.find(
      (medico) =>
        medico.cpf === cpf ||
        medico.email === email ||
        medico.telefone === telefone ||
        medico.crm === crm,
    );

    if (medicoExistente) {
      if (medicoExistente.cpf === cpf) {
        return res.status(400).json({
          error: "Este CPF já está cadastrado.",
        });
      } else if (medicoExistente.email === email) {
        return res.status(400).json({
          error: "Este e-mail já está cadastrado.",
        });
      } else if (medicoExistente.telefone === telefone) {
        return res.status(400).json({
          error: "Este telefone já está cadastrado.",
        });
      } else if (medicoExistente.crm === crm) {
        return res.status(400).json({
          error: "Este CRM já está cadastrado.",
        });
      }
    }

    const dataCadastro = hoje.toISOString().split("T")[0];

    const novoMedico = {
      id_medico: proximoId,
      nome,
      cpf,
      email,
      data_nascimento: dataNascimento,
      telefone,
      data_cadastro: dataCadastro,
      senha,
      crm,
    };

    medicos.push(novoMedico);

    proximoId++;

    return res.status(201).json({
      message: "Médico cadastrado com sucesso.",
      medico: novoMedico,
    });
  }

  static async getAllMedicos(req, res) {

    if (medicos.length === 0) {
      return res.status(200).json({
        message: "Nenhum médico cadastrado.",
        medicos: [],
      });
    }

    return res.status(200).json({
      message: "Lista de médicos.",
      medicos: medicos,
    });
  }

  static async getMedicoById(req, res) {

    const { id } = req.params;

    if (!id || isNaN(id)) {
      return res.status(400).json({
        error: "O ID do médico deve ser informado.",
      });
    }

    const medico = medicos.find(
      (medico) => medico.id_medico === Number(id),
    );

    if (!medico) {
      return res.status(404).json({
        error: "Médico não encontrado.",
      });
    }

    return res.status(200).json({
      medico: medico,
    });
  }

  static async updateMedico(req, res) {

    const { id } = req.params;

    const { nome, cpf, email, dataNascimento, telefone, senha, crm } = req.body;

    if (!id || isNaN(id)) {
      return res.status(400).json({
        error: "O ID do médico deve ser informado.",
      });
    } else if (!nome || !cpf || !email || !dataNascimento || !telefone || !senha || !crm) {
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
    } else if (crm.length !== 6 || isNaN(crm)) {
      return res.status(400).json({
        error: "O CRM deve ter exatamente 6 números.",
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
    }

    const medico = medicos.find(
      (medico) => medico.id_medico === Number(id),
    );

    if (!medico) {
      return res.status(404).json({
        error: "Médico não encontrado.",
      });
    }

    const medicoExistente = medicos.find(
      (medico) =>
        medico.id_medico !== Number(id) &&
        (medico.cpf === cpf ||
          medico.email === email ||
          medico.telefone === telefone ||
          medico.crm === crm),
    );

    if (medicoExistente) {
      if (medicoExistente.cpf === cpf) {
        return res.status(400).json({
          error: "Este CPF já está cadastrado.",
        });
      } else if (medicoExistente.email === email) {
        return res.status(400).json({
          error: "Este e-mail já está cadastrado.",
        });
      } else if (medicoExistente.telefone === telefone) {
        return res.status(400).json({
          error: "Este telefone já está cadastrado.",
        });
      } else if (medicoExistente.crm === crm) {
        return res.status(400).json({
          error: "Este CRM já está cadastrado.",
        });
      }
    }

    medico.nome = nome;
    medico.cpf = cpf;
    medico.email = email;
    medico.data_nascimento = dataNascimento;
    medico.telefone = telefone;
    medico.senha = senha;
    medico.crm = crm;

    return res.status(200).json({
      message: "Médico atualizado com sucesso.",
      medico: medico,
    });
  }

  static async deleteMedico(req, res) {

    const { id } = req.params;

    if (!id || isNaN(id)) {
      return res.status(400).json({
        error: "O ID do médico deve ser informado.",
      });
    }

    const indice = medicos.findIndex(
      (medico) => medico.id_medico === Number(id),
    );

    if (indice === -1) {
      return res.status(404).json({
        error: "Médico não encontrado.",
      });
    }

    medicos.splice(indice, 1);

    return res.status(200).json({
      message: "Médico excluído com sucesso.",
    });
  }
}
