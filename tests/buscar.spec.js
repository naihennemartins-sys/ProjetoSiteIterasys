const { test, expect } = require('@playwright/test');
const { BuscarPage } = require('../pages/BuscarPage');
const { LoginPage } = require('../pages/LoginPage');
const { usuarios } = require('../fixtures/dados');
const { cenariosBusca } = require('../fixtures/busca');


test.describe('Exibir Cursos — Navegação', () => {

  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.fazerLogin(
      usuarios.valido.identificacao,
      usuarios.valido.senha
    )

  });

  // CT001 — Ver todos os cursos (teste único, fora do DDT)
  test('CT001 — deve exibir a lista de todos os cursos ao clicar em "Ver todos os cursos"', async ({ page }) => {
    const buscarPage = new BuscarPage(page);

    // DADO que o usuário está na página inicial
    await buscarPage.irParaPaginaInicial();

    // QUANDO clica no link "Ver todos os cursos"
    await buscarPage.clicarVerTodosCursos();

    // ENTÃO o título deve ser visível e a URL deve conter o trecho esperado
    await expect(buscarPage.quantidadeCursos).toBeVisible();
    await expect(page).toHaveURL(/course\/index\.php/); 
  });

});

// CT002 a CT006 — DDT: mesmo teste, dados diferentes
test.describe('Buscar Cursos-DDT)', () => {

  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.fazerLogin(
      usuarios.valido.identificacao,
      usuarios.valido.senha
    );
  });

  for (const cenario of cenariosBusca) {

    test(`${cenario.id} — ${cenario.titulo}`, async ({ page }) => {
      const buscarPage = new BuscarPage(page);

      // DADO que o usuário está na lista de todos os cursos
      await buscarPage.abrirListaDeCursos();

      // QUANDO digita o termo de busca e clica em buscar
      await buscarPage.buscarCurso(cenario.termoBusca);

      // ENTÃO verifica o resultado conforme o tipo de verificação definido na tabela
      if (cenario.tipoVerificacao === 'semResultado') {
        await expect(buscarPage.mensagemSemResultado).toBeVisible();

      } else if (cenario.tipoVerificacao === 'semDuplicado') {
        // toHaveCount() tem retry automático — aguarda o AJAX terminar antes de contar
        await expect(buscarPage.cardsDeCurso).toHaveCount(1);

      } else {
        // tipoVerificacao === 'minimoUm'
        // not.toHaveCount(0) tem retry automático — aguarda a página carregar
        await expect(buscarPage.cardsDeCurso).not.toHaveCount(0);
      }
    });

  }

});