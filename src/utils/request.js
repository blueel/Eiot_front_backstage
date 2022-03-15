/**
 * axios二次封装 
 * */
import axios from 'axios';
import config from '../config';
import { Message } from 'element-ui'
import router from './../router';

const TOKEN_INVALID = 'token验证失败'
const NETWORK_ERROR = '网络请求异常, 请稍后重试'
// 创建axios实例对象,添加全局配置
const service = axios.create({
  baseURL: config.baseApi,
  timeout: 8000
})

// 请求拦截
service.interceptors.request.use((req) => {
  // todo
  const headers = req.headers
  if(!headers.Authorization) headers.Authorization = 'lls'
  return req
})

// 响应拦截
service.interceptors.response.use((res) => {
  const { code, data, msg} = res.data
  if (code === 200 ) {
    return Promise.resolve(res.data)
  } else if(code ===  50001) {
    Message.error(TOKEN_INVALID)
    setTimeout(() => {
      router.push('/login')
    }, 15000)
    return Promise.reject(TOKEN_INVALID)
  } else {
    Message.error(msg || NETWORK_ERROR)
    return Promise.reject(msg || NETWORK_ERROR) 
  }
})

// 定义封装函数
// 定义请求参数options--{params}
function request(options) {
  options.method = options.method || 'get'
  if (options.method.toLowerCase() === 'get') {
    options.params = options.data
  }
  if (typeof options.mock != 'undefined') {
    config.mock = options.mock
  }
  if (config.env === 'prod') {
    service.defaults.baseURL = config.baseApi 
  } else {
    service.defaults.baseURL = config.mock ? config.mockApi : config.baseApi
  }
  return service(options)
}

['get', 'post', 'delete', 'put', 'patch'].forEach(item => {
  request[item] = (url, data, options) => {
    return request({
      url,
      data,
      method: item,
      ...options
    })
  }
  
})

export default request