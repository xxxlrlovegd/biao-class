let path = require('path')
module.exports = {
    mode: "development",
    entry: {
        set: './set.js',
        get: './get.js'
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'dist')
    }
};