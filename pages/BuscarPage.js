// pages/BuscarPage.js
// Page Object da funcionalidade: Buscar Cursos
// Padrão: POM (Page Object Model)
//
// REGRA DO POM:
//   ✅ Aqui ficam: seletores, ações, getters de locator
//   ❌ Aqui NÃO fica: lógica de teste, expect(), dados de teste

class BuscarPage {
  constructor(page) {
    // Guarda a referência da página do navegador
    this.page = page;

    // ─── Elementos da Página Inicial ────────────────────────────────────────
    this.menuPaginaInicial       = page.getByRole('menuitem', { name: 'Página inicial' });
    this.linkVerTodosCursos      = page.getByRole('link', { name: 'Ver todos os cursos' });
    this.quantidadeCursos        = page.locator('.course-number.h-bold-5.m-0');

    // ─── Elementos da Busca ─────────────────────────────────────────────────
    this.campoBusca  = page.getByRole('textbox', { name: 'Buscar cursos' });
    this.botaoBuscar = page.getByRole('button', { name: '^ Buscar cursos' });

    // ─── Elementos de Resultado ─────────────────────────────────────────────
    this.cardsDeCurso         = page.locator('.card.dashboard-card');
    this.mensagemSemResultado = page.getByText(/nenhum curso encontrado/i);
  }

  // ════════════════════════════════════════════════════════════════════════════
  // AÇÕES DE NAVEGAÇÃO
  // ════════════════════════════════════════════════════════════════════════════

  // Clica no item "Página inicial" do menu
  async irParaPaginaInicial() {
    await this.menuPaginaInicial.click();
  }

  // Clica no link "Ver todos os cursos"
  async clicarVerTodosCursos() {
    await this.linkVerTodosCursos.click();
  }

  // Ação composta: vai para a página inicial e abre a lista de cursos
  async abrirListaDeCursos() {
    await this.irParaPaginaInicial();
    await this.clicarVerTodosCursos();
  }

  // ════════════════════════════════════════════════════════════════════════════
  // AÇÕES DE BUSCA
  // ════════════════════════════════════════════════════════════════════════════

  // Digita um termo no campo de busca
  async digitarTermoBusca(termo) {
    await this.campoBusca.click();
    await this.campoBusca.fill(termo);
  }

  // Clica no botão de buscar
  async clicarBotaoBuscar() {
    await this.botaoBuscar.click();
  }

  // Ação composta: preenche o campo e executa a busca
  async buscarCurso(termo) {
    await this.digitarTermoBusca(termo);
    await this.clicarBotaoBuscar();
  }

  // Retorna a quantidade de cards de curso exibidos na tela
  async obterQuantidadeDeResultados() {
    return await this.cardsDeCurso.count();
  }
}

module.exports = { BuscarPage };