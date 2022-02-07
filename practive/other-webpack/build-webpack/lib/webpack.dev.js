const { merge } = require('webpack-merge');
const webpack = require('webpack');
const baseConfig = require('./webpack.base');

const devConfig = {
  mode: 'development',
  // 热更新
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: './dist',
    hot: true,
    stats: 'errors-only',
  },

  // sourceMap
  devtool: 'cheap-source-map',
};

module.exports = merge(baseConfig, devConfig);
