import axios from 'axios';

let appKey = '8603b7f299b4a5ea56b74e74b17c95c009cd5ab137add9f8d9086c9d524fbfc1';


export default function api(url, data) {
    let timestamp = Date.now();

    return axios.post(`https://mock.biaoyansu.com/api/1/${url}`, data, {
        headers: {
            'BIAO-MOCK-APP-KEY': appKey,
            'BIAO-MOCK-TIMESTAMP': timestamp,
            'BIAO-MOCK-SIGNATURE': sign(appKey, timestamp),
        },
    }).then(r => {
        return r.data;
    });
}


/**
 * 签名
 * @param appKey 应用的键，可在应用管理中拿到：http://mock.biaoyansu.com/app
 * @param timestamp 时间戳
 * @return {string}
 */
function sign(appKey, timestamp) {
    return btoa(appKey + timestamp);
}