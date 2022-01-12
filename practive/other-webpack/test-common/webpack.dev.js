//采用的是commonjs，就是根据配置去构建
//resolve用来拼接绝对路径的方法
const { resolve } = require("path");
//引入plugin插件
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
//引入离线插件
// const WorkboxPlugin = require("workbox-webpack-plugin");
module.exports = {
  //入口
  entry: ["webpack/hot/dev-server", "./src/index.html"],
  //出口
  output: {
    //输出文件名
    filename: "bundle.js",
    //输出路径
    path: resolve(__dirname, "build"),
  },
  //loader配置，，样式配置
  module: {
    rules: [
      {
        //匹配哪些文件
        test: /\.css$/,
        //使用哪些loader进行处理
        use: [
          //需要下载style-loader与css-loader
          //use里面loader执行顺序：从右到左，从下到上 依次执行
          ///创建style标签，将js中的样式资源插入进行，添加到head中生效
          "style-loader",
          //将css文件变成commonjs模块加载js中，里面内容是样式字符串
          "csss-loader",
        ],
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          //将less文件编译成css
          //需要下载less-loader 和 less
          "less-loader",
        ],
      },
      {
        //问题：默认处理不了html中的img图片
        //所以需要处理图片资源
        test: /\.(jpg|png|gif)$/,
        loader: "url-loader",
        options: {
          //图片大小小于8kb,就会被base64处理
          //优点：减少请求数量
          //缺点：图片体积会更大（文件请求速度会更慢）
          limit: 8 * 1024,
          //问题：因为url-loader默认使用es6模块化解析，而html-loader引入图片是commonjs
          //解析会出现问题：【object Module】
          //解决：关闭url-loader的es6模块化，使用commonjs解析
          esModule: false,
          //给图片进行重命名
          //[hash:10]去图片的hash的前十位
          //[ext]取文件原来的拓展名
          name: "[hash:10].[ext]",
        },
      },
      {
        test: /\.html$/,
        use: "html-loader",
      },
      //打包其他资源（除了什么exclude）
      {
        exclude: /\.(css|js|html|less)$/,
        loader: "file-loader",
        options: {
          name: "[hash:10].[ext]",
        },
      },
    ],
  },
  //plugin配置
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new CleanWebpackPlugin(),
    // new WorkboxPlugin.GenerateSW({
    //   // 这些选项帮助快速启用 ServiceWorkers
    //   // 不允许遗留任何“旧的” ServiceWorkers
    //   clientsClaim: true,
    //   skipWaiting: true,
    // }),
  ],
  mode: "development", //开发模式
  //开发环境服务器 devServe:用来自动化（自动编译，自动打开浏览器，自动刷新浏览器）
  //特点：只会在内存中编译打包不会有任何输出
  //热更新
  devServer: {
    //项目构建后路径
    // contentBase: resolve(__dirname, "dist"),
    //启动gzip压缩
    compress: true,
    //端口号
    port: 8080,
    //自动打开浏览器
    open: true,
  },
  //设置内联还是外部 选择映射模式
  devtool: "source-map",
};
