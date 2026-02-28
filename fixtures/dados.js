// fixtures/dados.js
// Centraliza os dados usados nos testes da Iterasys
// ⚠️  Substitua pelos dados reais da sua conta de teste
//     Dica: crie uma conta só para testes, nunca use a pessoal!

const usuarios = {

  // ✅ Usuário com credenciais válidas
  valido: {
    identificacao: '',
    senha:         '',
    urlPosLogin:   'https://iterasys.com/my/',
    tituloSecao:   '',
  },

  // ❌ Mesmo usuário, senha errada — testa mensagem de erro
  senhaErrada: {
    identificacao: 'teste01@gmail.com',
    senha:         'senhaErrada999',
  },

  // ❌ Campos em branco — testa validação de campos obrigatórios
  semDados: {
    identificacao: '',
    senha:         '',
  },

};

module.exports = { usuarios };