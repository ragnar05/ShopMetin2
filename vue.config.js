const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === "production" ? "/ShopMetin2/" : "/",
  configureWebpack: {
    output: {
      libraryExport: "default",
    },
  },
  css: {
    extract: false, // Esto incrustará el CSS en los archivos JavaScript
  },
  outputDir: "dist", // El directorio que será servido por GitHub Pages
  assetsDir: "static", // Opcionalmente, para organizar los assets
  productionSourceMap: false, // Para evitar los source maps en producción
});
