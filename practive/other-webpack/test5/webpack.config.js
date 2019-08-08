const path = require('path')
module.exports = {
    mode: 'development',
    entry: './index.js',
    output: {
        filename: './bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: './dist/'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.jpg|.gif|.jpeg|.png$/,
            use: [{
                loader: 'file-loader'
            }]
        }]
    }
}