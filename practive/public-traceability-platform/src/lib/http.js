import axios from 'axios'
import qs from 'qs'

class Http {
    constructor() {
        this.axiosInstance = axios.create({
            timeout: 30000
        })
        this.axiosInstance.interceptors.request.use((config) => {
            if (sessionStorage.getItem('Authorization')) {
                config.headers.common.Authorization = `Bearer ${sessionStorage.getItem('Authorization')}`
            }
            // config.headers.common['Content-Type'] = 'application/json';
            return config
        }, error => Promise.reject(error))
        this.axiosInstance.interceptors.response.use((config) => {
            if (config.headers.loginstatus === '0' || config.status == '500') {
                sessionStorage.removeItem('Authorization')
                sessionStorage.removeItem('UserInfo')
                window.location.href = '/'
            }
            return config
        }, (error) => {
            console.log('error', error)
            return Promise.reject(error)
        })
    }

    /**
     * axios get请求
     * @param url=服务器地址
     * @param params=请求参数
     */
    async get(url, params) {
        const res = await this.axiosInstance.get(url, {
            params
        })
        return res.data
    }

    /**
     * axios post请求
     * @param url=服务器地址
     * @param params=请求参数
     * @param encode = (如需要传送application/x-www-form-urlencoded格式参数,使用qs.stringify转换)
     * @returns {Promise<*>}
     */
    async post(url, params) {
        params = qs ? qs.stringify(params) : params
        const res = await this.axiosInstance.post(url, params)
        return res.data
    }

    async put(url, params) {
        const res = await this.axiosInstance.put(url, params)
        return res.data
    }

    async delete(url, params) {
        const res = await this.axiosInstance.delete(url, params)
        return res.data
    }
}

export default new Http()