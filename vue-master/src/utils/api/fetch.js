import axios from 'axios'
import * as error from '../config'
import Qs from 'qs'

// 创建axios实例
const service = axios.create({
    baseURL: 'https://ww.baidu.com', // api的base_url
    timeout: 5000                  // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
    if (config.method === 'post' && typeof config.data === 'string') {
        config.data = Qs.stringify(config.data)
    }
    return config
}, error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
    response => {
        return Promise.resolve(response)
    },
    error => {
        // console.log('err' + error)// for debug
        return Promise.reject(error)
    }
)

export default service