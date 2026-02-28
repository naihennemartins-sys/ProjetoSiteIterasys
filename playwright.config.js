// playwright.config.js
// Configuração principal do Playwright

const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({

  // Pasta onde ficam os arquivos de teste
  testDir: './tests',

  // Tempo máximo que um teste pode demorar (30 segundos)
  timeout: 30000,

  // Configurações gerais de todos os testes
  use: {
    // URL base do site Iterasys
    baseURL: 'https://iterasys.com',

    // Abre o navegador visível (false = modo invisível/headless)
    headless: true,

    // Tira print automático quando um teste falha
    screenshot: 'only-on-failure',

    // Grava vídeo quando um teste falha
    video: 'retain-on-failure',
  },

  // Qual navegador usar
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
  ],

  // Gera um relatório HTML com os resultados
  reporter: 'html',

});
