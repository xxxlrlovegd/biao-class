const path = require('path')
module.exports = {
    mode: 'development',
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        alias: { 'vue': './node_modules/vue/dist/vue.js' }
    }
}