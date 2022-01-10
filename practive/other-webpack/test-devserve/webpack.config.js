const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/js/index.js",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use:["style-loader","css-loader"]
      }
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
  devServer: {
    // contentBase: resolve(__dirname, "build"),
    // watchContentBase: true,
    // watchOptions: {
    //   ignored: /node_modules/,
    // },
    compress: true,
    port: 5000,
    host: "localhost",
    open: true,
    hot: true,
    //clientLogLevel:'none',
    // overlay: false,
    static: "./public",
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
};
