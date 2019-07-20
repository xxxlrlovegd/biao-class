/***一个发请求的库***/ ;
(function() {
    'use strict';
    window.lrRq = {get, post };
    /**
     * 取数据
     * @param url 地址
     * @param onSuccess 成功回调
     * @param onError 失败回调
     */
    function get(url, onSuccess, onError) {
        baseRequest(url, 'get', null, onSuccess, onError)
    };

    /**
     * 存数据
     * @param url 地址
     * @param data 数据
     * @param onSuccess 成功回调
     * @param onError 失败回调
     */
    function post(url, data, onSuccess, onError) {
        baseRequest(url, 'post', data, onSuccess, onError)
    };

    /**
     * 基础请求
     * url,method,param,onSuccess,onError
     */
    function baseRequest(url, method, param, onSuccess, onError) {
        // console.log("param", param)param是post请求发送数据
        let http = new XMLHttpRequest();
        http.open(method, url);
        http.send();

        http.addEventListener('load', () => {
            let data = JSON.parse(http.responseText);
            // 有成功回调，则传数据
            onSuccess && onSuccess(data)
        })
    }
})();