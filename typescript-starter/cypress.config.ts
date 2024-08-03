import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl:"https://cenidea-git-develop-cenidea.vercel.app/" ,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
