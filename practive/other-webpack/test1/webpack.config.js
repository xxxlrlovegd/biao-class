const path = require('path')
module.exports = {
    entry: './a.js',
    output: {
        filename: 'pack.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development'
}