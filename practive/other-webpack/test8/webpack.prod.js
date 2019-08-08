const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Html = require('html-webpack-plugin');
const merge = require('webpack-merge');

module.exports = merge(require('./webpack.common'), {
    mode: 'production',
    // devtool: 'source-map',
    plugins: [
        new CleanWebpackPlugin(),
        new Html({
            template: './tpl.html',
            minify: {
                collapseInlineTagWhitespace: true,
                removeComments: true,
            }
        })
    ]
})