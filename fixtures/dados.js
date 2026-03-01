const usuarios = {

  //Usuário com credenciais válidas
  valido: {
    identificacao: 'usuario@email.com',
    senha:         'SenhaValida123',
    urlPosLogin:   'https://iterasys.com/my/',
    tituloSecao:   'Olá, Usuário! 👋',
  },

  //Mesmo usuário, senha errada — testa mensagem de erro
  senhaErrada: {
    identificacao: 'usuario@email.com',
    senha:         'senhaErrada999',
  },

  //Campos em branco — testa validação de campos obrigatórios
  semDados: {
    identificacao: '',
    senha:         '',
  },

};

module.exports = { usuarios };