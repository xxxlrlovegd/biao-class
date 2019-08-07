 const path = require('path');

 module.exports = {
     mode: 'development',
     entry: './index.js',
     output: {
         filename: 'bundle.js',
         path: path.resolve(__dirname, 'dirst')
     },
     module: {
         // rules: [{
         //     test: /\.css$/,
         //     // use: ['style-loader', 'css-loader']
         //     use: [{
         //         loader: 'style-loader',
         //     }, {
         //         loader: 'css-loader',
         //         options: {
         //             sourceMap: true,
         //         }
         //     }]
         // }],
         rules: [{
             test: /\.css$/,
             use: [{
                     loader: 'style-loader/url', //崩溃中。。。
                 },
                 {
                     loader: 'file-loader',
                     options: {
                         publicPath: './dirst',
                         name: '[name].css',
                     }
                 },
             ]
         }],
     }
 }