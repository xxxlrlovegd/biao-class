//创建过程模拟实现及发送请求
//构造函数
function Axios(config) {
  //初始化
  this.defaults = config; //为了创建default默认属性
  this.intercepters = {
    request: {},
    response: {},
  };
}

Axios.prototype.request = function (config) {
  console.log("发送AJAX请求 请求类型为" + config.method);
  let promise = Promise.resolve(config);
  let chains = [dispatchRequest, undefined];
  let result = promise.then(chains[0], chains[1]);
  return result;
};
function dispatchRequest(config) {
  return xhrAdapter(config).then(
    (response) => {
      return response;
    },
    (error) => {
      throw error;
    }
  );
}
function xhrAdapter(config) {
    return new Promise((resolve, reject) => { 
        //发送AJAX请求
        let xhr = new XMLHttpRequest();
        //初始化
        xhr.open(config.method, config.url);
        //发送
        xhr.send();
        //绑定事件
        xhr.onreadystatechange = function () { 
            if (xhr.readyState === 4) {
                //判断成功的条件
                if (xhr.status >= 200 && xhr.status < 300) {
                    //成功的状态
                    resolve({
                        //配置对象
                        config: config,
                        data: xhr.response,
                        headers: xhr.getAllResponseHeaders(), //字符串
                        request: xhr,
                        status: xhr.status,
                        statusText: xhr.statusText
                    })
                } else { 
                    reject(new Error('请求失败 失败状态码为' + xhr.status));
                }
            }
        }
    })
    
}
Axios.prototype.get = function (config) {
  return this.request({
    method: "GET",
  });
};

Axios.prototype.post = function (config) {
  return this.request({
    method: "POST",
  });
};

function createInstance(config) {
  //实例化一个对象  可以使用context.get() context.post() 但是不能context()
  let context = new Axios(config);
  //创建请求函数    可以使用instance()但是不能instance.get()
  let instance = Axios.prototype.request.bind(context);
  //将Axios.prototype 对象中的方法添加到instance函数对象中，才能用instance.get
  Object.keys(Axios.prototype).forEach((key) => {
    instance[key] = Axios.prototype[key].bind(context);
  });
  Object.keys(context).forEach((key) => {
    instance[key] = context[key];
  });
  return instance;
}

let axios = createInstance();
