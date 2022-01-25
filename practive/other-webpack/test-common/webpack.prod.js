//引入html打包插件
const HtmlWebpackPlugin = require("html-webpack-plugin");
//清理打包文件插件
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
//引入css提取打包插件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//引入css压缩插件
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
//引入路径插件
const { resolve } = require("path");
//复用loader配置 这里因为css与less配置大部分相同，所以抽出
const commonCssLoader = [
  //使用这个插件的loader取代style-loader 作用：提取css为单独文件
  MiniCssExtractPlugin.loader,
  "css-loader",
  {
    loader: "postcss-loader",
    options: {
      //使用postcss插件进行兼容性处理
      ident: "postcss",
      plugins: () => [require("postcss-preset-env")],
    },
  },
];
module.exports = {
  entry: {
    index: "./src/js/index.js",
    lib: "./src/js/lib.js",
  },
  output: {
    //[name]取入口文件的名字对代码进行分割
    //使用contenthash哈希值
    filename: "js/[name].[contenthash:10].js",
    path: resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      //js处理规则配置
      //正常来讲，一个文件只能被一个loader处理，但当一个文件要被多个loader处理，那么一定要指定loader的执行先后顺序；
      //先执行eslint 再执行babel
      {
        test: /\.js$/,
        //不检查依赖库里面的js
        exclude: /node_modules/,
        //设置优先执行当前loader
        enforce: "pre",
        loader: "eslint-loader",
        options: {
          //自动修复eslint的错误，比如补全分号
          fix: true,
        },
      },
      //oneOf中的loader规制就是只要有一个匹配上了，其他loader就不进行匹配了减少了轮询次数，提高构建速度
      {
        oneOf: [
          //css与less规则配置，提取单独文件与css兼容性处理
          {
            test: /\.css$/,
            use: [...commonCssLoader],
          },
          {
            test: /\.less$/,
            use: [...commonCssLoader, "less-loader"],
          },
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: [
              //开启多线程打包，进程启动大概600ms,进程通信需要开销；只有工作消耗时间比较长才需要进程打包
              {
                loader: "thread-loader",
                options: {
                  Workers: 2, //进程设置为2个
                },
              },
              {
                loader: "babel-loader",
                options: {
                  presets: [
                    [
                      //注意 这里两个【】
                      "@babel/preset-env",
                      {
                        //使用内置对象：按需加载
                        useBuiltIns: "usage",
                        corejs: {
                          //指定core-js版本
                          version: 3,
                        },
                        targets: {
                          //指定babel转换js兼容到哪个版本浏览器兼容
                          chrome: "60",
                          firefox: "60",
                          ie: "9",
                        },
                      },
                    ],
                  ],
                  //开启babel缓存
                  //第二次构建时，会读取之前的缓存
                  cacheDirectory: true,
                },
              },
            ],
          },
          //图片压缩
          {
            test: /\.(jpg|png|gif)$/,
            loader: "url-loader",
            options: {
              limit: 8 * 1024,
              //限制打包后的哈希文件名长度，保留后缀名
              name: "[hash:10].[ext]",
              //执行打包后放在哪个位置
              outputPath: "imgs",
              //url-loader默认使用的是es6的模块解析，而html-loader引入图片是commonjs
              //所以需要关闭‘url-loader’的es6模块化解析，使用commonjs模块化解析
              esModule: false,
            },
          },
          {
            test: /\.html$/,
            loader: "html-loader",
          },
          //其他资源打包
          {
            //排除掉自己配置过的文件
            exclude: /\.(js|css|less|scss|html|jpg|png|gif)$/,
            loader: "file-loader",
            options: {
              outputPath: "media",
              name: "[hash:10].[ext]",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      minify: {
        //指定minify属性后，将会根据里面的配置进行html文件压缩
        collapseWhitespace: true, //去除文件的空格
        removeComments: true, //去除文件的注释
      },
    }),
    //css提取打包插件
    new MiniCssExtractPlugin({
      filename: "css/built.[contenthash:10].css",
    }),
    //css压缩插件，默认配置即可达到正常打包要求
    new OptimizeCssAssetsWebpackPlugin(),
  ],
  //可以将node_modules中代码单独打包一个chunk最终输出
  //自动分析多入口chunk中，有没有公共的文件。如果有会打包成单独的一个chunk
  optimization: {
    //分离页面公共的部分
    splitChunks: {
      chunks: "all",
    },
    //将当前模块的记录其他模块的hash单独打包成一个文件 runtime
    //解决：修改a文件导致b文件的contenthash变化
    runtimeChunk: {
      name: (entrypoint) => `runtime-${entrypoint.name}`,
    },
  },
  mode: "production", //指定为生产模式后js将会默认压缩
};
