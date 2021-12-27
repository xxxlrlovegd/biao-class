//拦截器模拟实现
(function () {
  function Axios(config) {
    this.config = config;
    this.interceptors = {
      request: new InterceptorManager(),
      response: new InterceptorManager(),
    };
  }
  //发送请求
  Axios.prototype.request = function (config) {
    //创建一个promise对象
    let promise = Promise.resolve(config);
    //创建一个数组
    const chains = [dispatchRequest, undefined];
    //处理拦截器
    //请求拦截器 将请求拦截器的回调 压入到chains的前面 request.handles=[]
    this.interceptors.request.handlers.forEach((element) => {
      chains.unshift(element.fulfilled, element.rejected);
    });
    //响应拦截器
    this.interceptors.response.handlers.forEach((element) => {
      chains.push(element.fulfilled, element.rejected);
    });
    while (chains.length > 0) {
      promise = promise.then(chains.shift(), chains.shift());
    }
    return promise;
  };

  //发送请求
  function dispatchRequest(config) {
    return new Promise((resolve, reject) => {
      resolve({
        status: 200,
        statusText: "OK",
      });
    });
  }

  let context = new Axios({});
  let axios = Axios.prototype.request.bind(context);
  Object.keys(context).forEach((key) => {
    axios[key] = context[key];
  });

  function InterceptorManager() {
    this.handlers = [];
  }

  InterceptorManager.prototype.use = function (fulfilled, rejected) {
    this.handlers.push({
      fulfilled,
      rejected,
    });
  };

  axios.interceptors.request.use(
    function one(config) {
      console.log("请求拦截器 成功-1号");
      return config;
    },
    function one(error) {
      console.log("请求拦截器 失败 -1号");
      return Promise.reject(error);
    }
  );

  axios({
    method: "GET",
    url: "http://localhost:3000/posts",
  }).then((response) => {
    console.log(response);
  });
})();
