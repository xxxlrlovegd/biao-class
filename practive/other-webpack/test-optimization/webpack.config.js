//优化有哪些————splitchunk开启代码分割；runtimechunk只重新编译变化的部分；terser-webpack-plugin代码压缩 优化压缩速度
//理解不太全，此处配置为照葫芦画瓢
const { resolve } = require("path/posix");
const TerserWebpackPlugin = require("terser-webpack-plugin");
module.exports = {
  entry: "./src/js/index.js",
  output: {
    filename: "js/[name].[contenthash:10].js",
    path: resolve(__dirname, "build"),
    chunkFilename: "js/[name].[contenthash:10]_chunk.js",
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    alias: {
      $css: resolve(__dirname, "src/css"),
    },
    extensions: [".js", ".json", ".jsx", ".css"],
    modules: [resolve(__dirname, "../../node_modules"), "node_modules"],
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      minSize: 30 * 1024,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      name: true,
    },
    runtimeChunk: {
      name: (entrypoint) => `runtime-${entrypoint.name}`,
    },
    minimizer: [
      new TerserWebpackPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
    ],
  },
};
