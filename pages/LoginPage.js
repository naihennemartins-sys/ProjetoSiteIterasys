const { expect } = require('@playwright/test');

class LoginPage {

  constructor(page) {
    // Guarda a referência da página do navegador
    this.page = page;

    // Elementos do formulário de login ---
    this.campoIdentificacao = page.getByRole('textbox', { name: 'Identificação de usuário' });
    this.campoSenha         = page.getByRole('textbox', { name: 'Senha' });
    this.botaoAcessar       = page.getByRole('button',  { name: 'Acessar', exact: true });

    // Mensagem de erro — O site tem dois elementos com o mesmo texto, mas só o alert é visível
    this.mensagemErro       = page.getByRole('alert');

    // Título da seção exibido após o login bem-sucedido
    this.tituloSecao        = page.getByRole('heading', { name: /Olá,/ });
  }

  // Abre a página de login
  async abrirPagina() {
    await this.page.goto('/login/');
  }

  // Preenche o campo de identificação (usuário ou e-mail)
  async preencherIdentificacao(identificacao) {
    await this.campoIdentificacao.fill(identificacao);
  }

  // Preenche o campo de senha
  async preencherSenha(senha) {
    await this.campoSenha.fill(senha);
  }

  // Clica no botão Acessar
  async clicarAcessar() {
    await this.botaoAcessar.click();
  }

  // Retorna o texto da mensagem de erro
  async obterMensagemErro() {
    return await this.mensagemErro.textContent();
  }

  // Retorna o texto do título da seção (após login)
  async obterTituloSecao() {
    return (await this.tituloSecao.textContent()).trim();
  }

  // Ação composta: faz o login completo
  async fazerLogin(identificacao, senha) {
    await this.abrirPagina();
    await this.preencherIdentificacao(identificacao);
    await this.preencherSenha(senha);
    await this.clicarAcessar();
  }

}

module.exports = { LoginPage };