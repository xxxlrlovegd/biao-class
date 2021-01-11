### iview更换主题颜色及遇到的问题 2021-01-11

## 1、在src下创建一个文件夹my-theme 并且创建文件 index.less ,然后可以定义主题颜色
## 代码内容如下：
@import '~view-design/src/styles/index.less';

// Here are the variables to cover, such as:
@primary-color: #19be6b;

## 2、在main.js中引用 import './my-theme/index.less';
## 引用之后会遇见这个错误  .bezierEasingMixin();
## 解决方案：node_modules在less-loader/dist/index.js文件中新增一行代码options.javascriptEnabled = true;

## 以下是index.js中代码展示：
function lessLoader(source) {
  const loaderContext = this;
  const options = (0, _getOptions.default)(loaderContext);
  
  options.javascriptEnabled = true;  //新增代码块
  
  const done = loaderContext.async();
  const isSync = typeof done !== 'function';

  if (isSync) {
    throw new Error('Synchronous compilation is not supported anymore. See https://github.com/webpack-contrib/less-loader/issues/84');
  }

  (0, _processResult.default)(loaderContext, render(source, options));
}
