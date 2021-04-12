### vue 里 this.$parent 作用 2021年2月18日16:47:58
### this.$parent 可以访问到父组件 上所有的 data(){ 里的数据信息和生命周期方法，methods里的方法 }！

### 2021年3月5日12:06:42
### Vue报错：Vue ERROR TypeError: Cannot read property “upgrade” of undefined
### 描述： 给vue项目增加了本地代理，也就是给vue.config.js增加了devServer之后，启动项目报错：Vue ERROR TypeError: Cannot read property ‘upgrade’ of undefined
### 解决： 这个错误实际上时因为代理地址为空导致的，检查后发现proxy属性中的target的值为空，没有填入，填入后解决错误！