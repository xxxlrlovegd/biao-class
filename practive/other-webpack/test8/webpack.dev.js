const Html = require('html-webpack-plugin')
const merge = require('webpack-merge')

module.exports = merge(require('./webpack.common'), {
    mode: 'development',
    devtool: 'inline-source-map',
    plugins: [
        new Html({
            template: './tpl.html',
        })
    ]
})