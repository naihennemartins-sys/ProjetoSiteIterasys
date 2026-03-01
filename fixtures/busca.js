const cenariosBusca = [
  {
    id: 'CT002',
    titulo: 'deve encontrar resultados ao buscar por termo parcial válido',
    termoBusca: 'Sele',
    tipoVerificacao: 'minimoUm',
  },
  {
    id: 'CT003',
    titulo: 'deve encontrar resultado ao buscar por nome completo único',
    termoBusca: 'Python',
    tipoVerificacao: 'minimoUm',
  },
  {
    id: 'CT004',
    titulo: 'não deve exibir cursos duplicados ao buscar por "Introdução ao Java"',
    termoBusca: 'Introdução ao Java',
    tipoVerificacao: 'semDuplicado',
  },
  {
    id: 'CT005',
    titulo: 'deve exibir mensagem de aviso ao buscar por termo inexistente',
    termoBusca: 'CursoQueNaoExisteXYZ123',
    tipoVerificacao: 'semResultado',
  },
  {
    id: 'CT006',
    titulo: 'deve exibir todos os cursos quando o campo de busca está vazio',
    termoBusca: '',
    tipoVerificacao: 'minimoUm',
  },
];

module.exports = { cenariosBusca };
