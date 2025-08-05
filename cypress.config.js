const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const { createEsbuildPlugin } = require('@badeball/cypress-cucumber-preprocessor/esbuild');
const addCucumberPreprocessorPlugin = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;
const path = require("path");

module.exports = defineConfig({
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    reporterEnabled: "mochawesome",
    mochawesomeReporterOptions: {
      reportDir: "cypress/reports",
      overwrite: false,
      html: true,
      json: true
    }
  },
  e2e: {
    specPattern: "cypress/e2e/autenticacion/autenticacion.feature",
    supportFile: false,
    env: {
      stepDefinitions: "cypress/support/step_definitions/autenticacion.steps.js"
    },
    setupNodeEvents(on, config) {
      addCucumberPreprocessorPlugin(on, config);
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );
      return config;
    },
  },

defaultCommandTimeout: 1000 // aumenta el tiempo de espera por comando
});
