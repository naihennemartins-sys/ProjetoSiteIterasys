const usuarios = {

  //Usuário com credenciais válidas
  valido: {
    identificacao: 'naihenne45@gmail.com',
    senha:         'G@tolino25',
    urlPosLogin:   'https://iterasys.com/my/',
    tituloSecao:   'Olá, Naihenne! 👋',
  },

  //Mesmo usuário, senha errada — testa mensagem de erro
  senhaErrada: {
    identificacao: 'teste01@gmail.com',
    senha:         'senhaErrada999',
  },

  //Campos em branco — testa validação de campos obrigatórios
  semDados: {
    identificacao: '',
    senha:         '',
  },

};

module.exports = { usuarios };