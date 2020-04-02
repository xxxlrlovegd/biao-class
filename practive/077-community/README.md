# 077-community

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 设计分为6模块 
### 1.注册 rigister 设计的是数据存储，其中密钥处理要简单粗暴，密码要混淆且不能明文；表单数据验证要合理；注册成功后跳转问题；
### 2.登录 login 最重要的是将登录的数据本地化存储 localStorage/cookies
### session 是登录后其他页的数据桥梁其作用是用于数据渲染；检测是否登录；登入登出对令牌数据的处理
### auth  不同的权限对于的数据及功能也是要进行处理
### 3.首页 home 导航栏 卡片等组成 仿照v2ex.com或者知乎进行设计；
### 4.帖子 thread
### 5.设置 setting
### 6.管理 admin
### nativeJS是此项目初期全都用原生进行设计的；src下是将用vue.js、vue-router及iview进行设计及完成的

### 知识点
### 1.在某个vue文件下导入 css样式会作用到整个项目上<style scoped></style>可单独作用；<style scoped>@import '.css'</style>在里面引用样式文件依然会作用全局
### 2.表单禁止默认事件 .prevent
### 3.跨域发送请求会发送两遍
### 4.异步请求开销较大
### 5.表单下防止重复发送请求 可以用fieldset标签加disabled来进行控制<form><fieldset :disabled='false'>...</fieldset></form>