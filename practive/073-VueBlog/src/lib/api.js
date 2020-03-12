import axios from 'axios';

let appKey = '49e7490c01974348f4015fe8d0e638634e82bfcece02f13e5c30f2b1458bae26';


export default function api(url, data) {
    let timestamp = Date.now();

    return axios.post(`http://mock.biaoyansu.com/api/1/${url}`, data, {
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