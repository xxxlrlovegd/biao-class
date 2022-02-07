// 执行的命令 node test/smoke/index.js
// node插件rimraf去找到webpack.prod.js文件去生成template的dist文件
// 根据webpack回调函数的两个参数去判断构建是否成功，第一个返回值是错误，第二个返回的是状态
// 再去检测构建成功生成的dist是否含有相应的js,html文件（应用mocha）；
const path = require('path');
const { webpack } = require('webpack');
const rimraf = require('rimraf');
const Mocha = require('mocha');

const mocha = new Mocha({
  timeout: '10000ms',
});
process.chdir(path.join(__dirname, 'template'));
rimraf('./dist', () => {
  const prodConfig = require('../../lib/webpack.prod');
  webpack(prodConfig, (err, stats) => {
    if (err) {
      console.error(err);
      process.exit(2);
    }
    console.log(
      stats.toString({
        colors: true,
        modules: false,
        children: false,
      }),
    );
    console.log('Webpack build success,begin run test!!');
    mocha.addFile(path.join(__dirname, 'html-test.js'));
    mocha.addFile(path.join(__dirname, 'css-js-test.js'));
    mocha.run();
  });
});
