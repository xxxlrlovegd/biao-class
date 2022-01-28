const autoprefixer = require("autoprefixer");
const glob = require("glob");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
//多页面打包配置
const projectRoot = process.cwd(); //当前node命令执行时所在的文件夹目录；
const setMPA = () => {
  const entry = {};
  const htmlWebpackPlugins = [];
  const entryFiles = glob.sync(path.join(projectRoot, "./src/*/index.js"));
  Object.keys(entryFiles).map((index) => {
    const entryFile = entryFiles[index];
    const match = entryFile.match(/src\/(.*)\/index\.js/);
    const pageName = match && match[1];
    entry[pageName] = entryFile;
    return htmlWebpackPlugins.push(
      new HtmlWebpackPlugin({
        inlineSource: ".css$",
        template: path.join(projectRoot, `./src/${pageName}/index.html`),
        filename: `${pageName}.html`,
        chunks: ["vendors", pageName],
        inject: true,
        minify: {
          html5: true,
          collapseWhitespace: true,
          preserveLineBreaks: false,
          minifyCSS: true,
          minifyJS: true,
          removeComments: false,
        },
      })
    );
  });
  return {
    entry,
    htmlWebpackPlugins,
  };
};
const { entry, htmlWebpackPlugins } = setMPA();
module.exports = {
  entry,
  output: {
    path: path.join(projectRoot, "dist"),
    filename: "[name]_[chunkhash:8].js",
  },
  //资源解析
  module: {
    rules: [
      {
        test: /.js$/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "less-loader",
          //前缀补齐
          {
            loader: "postcss-loader",
            options: {
              plugins: () => [
                autoprefixer({
                  browsers: ["last 2 version", ">1%", "ios 7"],
                }),
              ],
            },
          },
          //px转换成rem
          {
            loader: "px2rem-loader",
            options: {
              remUnit: 75,
              remPrecision: 8,
            },
          },
        ],
      },
      {
        test: /.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name]_[hash:8].[ext]",
            },
          },
        ],
      },
      {
        test: /.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name]_[hash:8][ext]",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    //目录清理
    new CleanWebpackPlugin(),
  ].concat(htmlWebpackPlugins),
};
