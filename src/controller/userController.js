let users = [];

export default class userController {
  // Método de criação de usuários
  static async createUser(req, res) {
    const { nomeCompleto, cpf, dataNascimento, email, telefone, senha } =
      req.body;

    // Verifica se todos os dados foram preenchidos
    if (
      !nomeCompleto ||
      !cpf ||
      !dataNascimento ||
      !email ||
      !telefone ||
      !senha
    ) {
      return res.status(400).json({
        error: "Todos os dados devem ser preenchidos.",
      });
    }

    // Verifica o nome
    if (nomeCompleto.length > 100) {
      return res.status(400).json({
        error: "O nome deve ter no máximo 100 caracteres.",
      });
    }

    // Verifica o CPF
    if (cpf.length !== 11 || isNaN(cpf)) {
      return res.status(400).json({
        error: "O CPF deve ter exatamente 11 números.",
      });
    }

    // Verifica se o CPF já está cadastrado
    const cpfExiste = users.some((user) => user.cpf === cpf);

    if (cpfExiste) {
      return res.status(400).json({
        error: "Este CPF já está cadastrado.",
      });
    }

    // Verifica o telefone
    if (telefone.length !== 11 || isNaN(telefone)) {
      return res.status(400).json({
        error: "Telefone deve ter exatamente 11 números.",
      });
    }

    // Verifica o e-mail
    if (email.length > 100) {
      return res.status(400).json({
        error: "O e-mail deve ter no máximo 100 caracteres.",
      });
    }

    // Verifica a senha
    if (senha.length < 8 || senha.length > 100) {
      return res.status(400).json({
        error: "A senha deve ter entre 8 e 100 caracteres.",
      });
    }

    // Verifica a data de nascimento
    const [dia, mes, ano] = dataNascimento.split("/");

    const nascimento = new Date(ano, mes - 1, dia);
    const hoje = new Date();

    const dataLimite = new Date(
      hoje.getFullYear() - 100,
      hoje.getMonth(),
      hoje.getDate(),
    );

    // Verifica se a data é futura
    if (nascimento > hoje) {
      return res.status(400).json({
        error: "A data de nascimento não pode ser futura.",
      });
    }

    // Verifica se a pessoa tem mais de 100 anos
    if (nascimento < dataLimite) {
      return res.status(400).json({
        error: "A pessoa não pode ter mais de 100 anos.",
      });
    }

    // Cria o usuário
    const novoUsuario = {
      nomeCompleto,
      cpf,
      dataNascimento,
      email,
      telefone,
      senha,
    };

    users.push(novoUsuario);

    return res.status(201).json({
      message: "Usuário cadastrado com sucesso.",
      user: novoUsuario,
    });
  }

  // Método de listagem de usuários
  static async getAllUser(req, res) {
    return res.status(200).json({
      message: "Lista de usuários:",
      users,
    });
  }

  // Método de atualização de usuários
  static async updateUser(req, res) {
    const { cpf, nomeCompleto, dataNascimento, email, telefone, senha } =
      req.body;

    // Verifica se o CPF foi informado
    if (!cpf) {
      return res.status(400).json({
        error: "O CPF deve ser informado.",
      });
    }

    // Verifica se existe algum dado para atualizar
    if (
      nomeCompleto === undefined &&
      dataNascimento === undefined &&
      email === undefined &&
      telefone === undefined &&
      senha === undefined
    ) {
      return res.status(400).json({
        error: "Informe pelo menos um dado para atualizar.",
      });
    }

    // Verifica o CPF
    if (cpf.length !== 11 || isNaN(cpf)) {
      return res.status(400).json({
        error: "O CPF deve ter exatamente 11 números.",
      });
    }

    // Procura o usuário pelo CPF
    const usuario = users.find((user) => user.cpf === cpf);

    // Verifica se o usuário existe
    if (!usuario) {
      return res.status(404).json({
        error: "Usuário não encontrado.",
      });
    }

    // Atualiza o nome
    if (nomeCompleto !== undefined) {
      if (nomeCompleto.length > 100) {
        return res.status(400).json({
          error: "O nome deve ter no máximo 100 caracteres.",
        });
      }

      if (nomeCompleto === usuario.nomeCompleto) {
        return res.status(400).json({
          error: "O nome informado é igual ao nome atual.",
        });
      }

      usuario.nomeCompleto = nomeCompleto;
    }

    // Atualiza o e-mail
    if (email !== undefined) {
      if (email.length > 100) {
        return res.status(400).json({
          error: "O e-mail deve ter no máximo 100 caracteres.",
        });
      }

      if (email === usuario.email) {
        return res.status(400).json({
          error: "O e-mail informado é igual ao e-mail atual.",
        });
      }

      usuario.email = email;
    }

    // Atualiza o telefone
    if (telefone !== undefined) {
      if (telefone.length !== 11 || isNaN(telefone)) {
        return res.status(400).json({
          error: "Telefone deve ter exatamente 11 números.",
        });
      }

      if (telefone === usuario.telefone) {
        return res.status(400).json({
          error: "O telefone informado é igual ao telefone atual.",
        });
      }

      usuario.telefone = telefone;
    }

    // Atualiza a senha
    if (senha !== undefined) {
      if (senha.length < 8 || senha.length > 100) {
        return res.status(400).json({
          error: "A senha deve ter entre 8 e 100 caracteres.",
        });
      }

      if (senha === usuario.senha) {
        return res.status(400).json({
          error: "A senha informada é igual à senha atual.",
        });
      }

      usuario.senha = senha;
    }

    // Atualiza a data de nascimento
    if (dataNascimento !== undefined) {
      if (dataNascimento === usuario.dataNascimento) {
        return res.status(400).json({
          error: "A data de nascimento informada é igual à atual.",
        });
      }

      const [dia, mes, ano] = dataNascimento.split("/");

      const nascimento = new Date(ano, mes - 1, dia);
      const hoje = new Date();

      const dataLimite = new Date(
        hoje.getFullYear() - 100,
        hoje.getMonth(),
        hoje.getDate(),
      );

      // Verifica se a data é futura
      if (nascimento > hoje) {
        return res.status(400).json({
          error: "A data de nascimento não pode ser futura.",
        });
      }

      // Verifica se a pessoa tem mais de 100 anos
      if (nascimento < dataLimite) {
        return res.status(400).json({
          error: "A pessoa não pode ter mais de 100 anos.",
        });
      }

      usuario.dataNascimento = dataNascimento;
    }

    return res.status(200).json({
      message: "Usuário atualizado com sucesso.",
      user: usuario,
    });
  }

  // Método de exclusão de usuários
  static async deleteUser(req, res) {
    const { cpf } = req.params;

    // Verifica se o CPF foi informado
    if (!cpf) {
      return res.status(400).json({
        error: "O CPF deve ser informado.",
      });
    }

    // Verifica se o CPF tem 11 números
    if (cpf.length !== 11 || isNaN(cpf)) {
      return res.status(400).json({
        error: "O CPF deve ter exatamente 11 números.",
      });
    }

    // Procura o usuário pelo CPF
    const usuario = users.find((user) => user.cpf === cpf);

    // Verifica se o usuário existe
    if (!usuario) {
      return res.status(404).json({
        error: "Usuário não encontrado.",
      });
    }

    // Procura a posição do usuário no array
    const indice = users.findIndex((user) => user.cpf === cpf);

    // Remove o usuário
    users.splice(indice, 1);

    return res.status(200).json({
      message: "Usuário excluído com sucesso.",
      user: usuario,
    });
  }
}