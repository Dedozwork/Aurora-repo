import { defineConfig } from "cypress";

export default defineConfig({

  viewportWidth: 1920,
  viewportHeight: 1080,

  defaultCommandTimeout: 10000,
  pageLoadTimeout:5000,
  

  e2e: {
    baseUrl:"https://www.saucedemo.com/" ,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
