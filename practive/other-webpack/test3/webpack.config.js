const path = require('path');
module.exports = {
    entry: './js/index',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dirst')
    },
    mode: 'development',
    module: {
        rules: [{
            test: /\.css$/, //loader下载css,style
            use: ['style-loader', 'css-loader'],
        }],
    }
}