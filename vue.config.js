const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    output: {
      libraryExport: "default",
    },
  },
  css: {
    extract: false, // Esto incrustará el CSS en los archivos JavaScript
  },
});
