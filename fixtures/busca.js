// fixtures/busca.js
// Massa de dados para os testes DDT da funcionalidade Buscar Cursos

const cenariosBusca = [
  {
    id: 'CT002',
    titulo: 'deve encontrar resultados ao buscar por termo parcial válido',
    termoBusca: 'Sele',
    tipoVerificacao: 'minimoUm', // espera ao menos 1 resultado
  },
  {
    id: 'CT003',
    titulo: 'deve encontrar resultado ao buscar por nome completo único',
    termoBusca: 'Python',
    tipoVerificacao: 'minimoUm', // espera ao menos 1 resultado
  },
  {
    id: 'CT004',
    titulo: 'não deve exibir cursos duplicados ao buscar por "Introdução ao Java"',
    termoBusca: 'Introdução ao Java',
    tipoVerificacao: 'semDuplicado', // regra de negócio: deve retornar exatamente 1 resultado
  },
  {
    id: 'CT005',
    titulo: 'deve exibir mensagem de aviso ao buscar por termo inexistente',
    termoBusca: 'CursoQueNaoExisteXYZ123',
    tipoVerificacao: 'semResultado', // espera mensagem de "nenhum curso encontrado"
  },
  {
    id: 'CT006',
    titulo: 'deve exibir todos os cursos quando o campo de busca está vazio',
    termoBusca: '',
    tipoVerificacao: 'minimoUm', // sem filtro = todos os cursos aparecem
  },
];

module.exports = { cenariosBusca };
