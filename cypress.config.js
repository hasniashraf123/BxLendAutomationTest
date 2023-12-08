const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "mochawesome",
  e2e: {
    url: 'https://bxlend.com/',
    Admin: "hassaanashraf98@gmail.com",
    Password: "",
    Incorrectpassword: ""
  },

  pageLoadTimeout: 30000,
  responseTimeout: 30000,
  defaultCommandTimeout: 10000,
  chromeWebSecurity: false,

});