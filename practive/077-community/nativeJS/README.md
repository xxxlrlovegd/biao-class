### 因为nav.html 中的代码其他页面会多次用到 所以单独提出来这就需要其他的HTML需要引用nav.html页面， 解决方案有2个但是不知道有什么隐藏bug，仅限于好使哈哈哈~引用时样式需要自行调整~
### 借鉴引用博客地址：https://blog.csdn.net/qq_29229567/article/details/83587604

### 1：<head><object style="border:0px" type="text/x-scriptlet" data="page/Page_1.html" width=100% height=150></object></head>

### 2： <iframe align="center" width="100%" height="170" src="page/Page_1.html"  frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>