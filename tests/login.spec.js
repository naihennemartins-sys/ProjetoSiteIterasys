const { test, expect } = require('@playwright/test');
const { LoginPage }    = require('../pages/LoginPage');
const { usuarios }     = require('../fixtures/dados');

// Texto exato da mensagem de erro exibida pelo site
const MENSAGEM_ERRO_CREDENCIAIS = 'Nome de usuário ou senha errados. Por favor tente outra vez.';

test.describe('Login — Casos de Teste', () => {

  // CT001 — Login com sucesso
  test('CT001 — deve fazer login com credenciais válidas', async ({ page }) => {
    // DADO que o usuário está na página de login
    const loginPage = new LoginPage(page);
    await loginPage.abrirPagina();

    // QUANDO preenche identificação e senha corretos e clica em Acessar
    await loginPage.fazerLogin(
      usuarios.valido.identificacao,
      usuarios.valido.senha
    );

    // ENTÃO deve ser redirecionado para a URL correta
    await expect(page).toHaveURL(usuarios.valido.urlPosLogin);

    // E o título da seção deve ser exibido corretamente
    await expect(loginPage.tituloSecao).toBeVisible();
    const titulo = await loginPage.obterTituloSecao();
    expect(titulo).toBe(usuarios.valido.tituloSecao);
  });

  // CT002 — Senha incorreta
  test('CT002 — deve exibir erro com senha incorreta', async ({ page }) => {
    // DADO que o usuário está na página de login
    const loginPage = new LoginPage(page);
    await loginPage.abrirPagina();

    // QUANDO preenche uma senha errada e clica em Acessar
    await loginPage.fazerLogin(
      usuarios.senhaErrada.identificacao,
      usuarios.senhaErrada.senha
    );

    // ENTÃO deve exibir a mensagem de erro na tela
    await expect(loginPage.mensagemErro).toBeVisible();

    // E o texto da mensagem deve ser exatamente o esperado
    const textoErro = await loginPage.obterMensagemErro();
    expect(textoErro).toBe(MENSAGEM_ERRO_CREDENCIAIS);
  });

  // CT003 — Campos em branco
  test('CT003 — deve exibir erro com campos em branco', async ({ page }) => {
    // DADO que o usuário está na página de login
    const loginPage = new LoginPage(page);
    await loginPage.abrirPagina();

    // QUANDO clica em Acessar sem preencher nenhum campo
    await loginPage.fazerLogin(
      usuarios.semDados.identificacao,
      usuarios.semDados.senha
    );

    // ENTÃO deve exibir a mensagem de erro na tela
    await expect(loginPage.mensagemErro).toBeVisible();

    // E o texto da mensagem deve ser exatamente o esperado
    const textoErro = await loginPage.obterMensagemErro();
    expect(textoErro).toBe(MENSAGEM_ERRO_CREDENCIAIS);
  });

});