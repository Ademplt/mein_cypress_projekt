const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'jgdfs9',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'results/my-test-output.xml',
    toConsole: true
  }
 
});
// false olan testleri tekrar calistirmak icin kod
// "video":false,
 // "retries": {
  //  "runMode": 2,
    //"openMode": 0
  //}
  
 


 



