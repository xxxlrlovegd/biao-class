module.exports = {
    mode: 'development',
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist',
        publicPath: './dist/'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.(jpg|jpeg|img|png|gif)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 60 * 1024, //文件大小超出则使用file-loader
                }
            }
        }]
    }
}