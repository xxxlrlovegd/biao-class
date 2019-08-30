const path = require('path')
const uglify = require('uglifyjs-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        alias: { 'vue': './node_modules/vue/dist/vue.js' }
    },
    plugins: [
        new uglify()
    ]
}