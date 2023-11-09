const { defineConfig } = require("cypress");

module.exports = defineConfig({

  reporter:'cypress-mochawesome-reporter',

  e2e: {
    
      // implement node event listeners here
      reporter: 'cypress-mochawesome-reporter',
      setupNodeEvents(on, config){
        require('cypress-mochawesome-reporter/plugin')(on);   
      },
      testIsolation:false,
  },
});
