const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.js", // Cambia esto a la ruta de tu archivo de entrada
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "shopmetin2.umd.js",
    library: "shopmetin2", // El nombre de tu módulo
    libraryTarget: "umd",
    globalObject: "this", // Asegura que funcione tanto en Node.js como en el navegador
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  externals: {
    vue: {
      root: "Vue",
      commonjs: "vue",
      commonjs2: "vue",
      amd: "vue",
    },
  },
};
