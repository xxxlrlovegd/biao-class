(function () {
  function Axios(config) {
    this.config = config;
  }
  Axios.prototype.request = function (config) {
    return dispatchRequest(config);
  };
  function dispatchRequest(config) {
    return xhrAdapter(config);
  }
  function xhrAdapter(config) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(config.method, config.url);
      xhr.send();
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status >= 200 && xhr.status < 300) {
            resolve({
              status: xhr.status,
              statusText: xhr.statusText,
            });
          } else {
            reject(new Error("请求失败"));
          }
        }
      };
      if (config.cancelToken) {
        config.cancelToken.promise.then((value) => {
          xhr.abort();
          reject(new Error("请求已经被取消"));
        });
      }
    });
  }
  //创建 axios 函数
  const context = new Axios({});
  const axios = Axios.prototype.request.bind(context);

  //CancelToken 构造函数
  function CancelToken(executor) {
    var resolvePromise;
    this.promise = new Promise((resolve) => {
      resolvePromise = resolve;
    });
    executor(function () {
      resolvePromise();
    });
  }
})();
