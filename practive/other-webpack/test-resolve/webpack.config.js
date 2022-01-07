const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/js/index.js",
  output: {},
  module: {
    rules: [
      {
        test: '/\.css$/',
        user:['style-loader','css-loader']
      }
    ],
  },
  plugins: [new HtmlWebpackPlugin()],
  mode: "development",
  //解析模块规则
  resolve: {
    //配置解析模块路径别名：优点简写路径缺点路径没有提示
    alias: {
      $css: resolve(__dirname, "src/css"),
      },
      //配置省略文件路径的后缀名
      extensions: ['.js', '.json', '.jsx', '.css'],
      modules:[resolve(__dirname,'../../node_modules'),'node_modules']
  },
};
