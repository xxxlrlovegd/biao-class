const path = require('path')
module.exports = {
    entry: {
        home: './js/home.js',
        signup: './js/signup.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development'
}