const { defineConfig } = require('cypress');
const dotenvPlugin = require('cypress-dotenv')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      config = dotenvPlugin(config);
      return config;
      // implement node event listeners here
    },
   // appBaseUrl: process.env.appBaseUrl
  },

});
