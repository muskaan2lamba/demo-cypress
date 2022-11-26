const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://soraia.herokuapp.com",
    specPattern: "**/*.spec.js"
  },
});
