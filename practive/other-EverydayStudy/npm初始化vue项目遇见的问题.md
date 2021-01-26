### npm初始化vue项目遇到的问题 2021-01-21
## 1.文件名称要是英文的要不npm install的时候会找不到packag.json文件
## 2.npm install 时关于-4048错误的解决办法
#  把node_modules文件夹删除，package-lock.json文件也删除
#  执行npm清除缓存命令 npm cache clean --force
#  在执行npm install

### npm遇到的问题更新！！2021-01-25
### Vue报错：Uncaught TypeError: Cannot assign to read only property 'exports' of object 的解决方法
##  解决办法1.降低webpack版本 安装指定版本：npm install webpack@ -g 例如：npm install webpack@3.6.0 -g
##  2.（好用未知有什么骚操作！！！）  更改.babelrc中"plugins"中去掉"transform-runtime"配置之后再重启项目