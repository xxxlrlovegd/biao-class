const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const Html = require('html-webpack-plugin')
module.exports = {
    mode: "development",
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist',
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        }]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new Html({
            template: './index.html',
            filename: 'index.html',
            inject: true,
            minify: {
                collapseBooleanAttributes: true,
                collapseWhitespace: true,
                removeComments: true,
            }
        })
    ]
}