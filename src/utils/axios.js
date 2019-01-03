import http from 'http'
import https from 'https'
import axios from 'axios'
import qs from 'qs'
import Vue from 'vue'
import store from '@/store/store'

// import { Toast, Confirm, debounce } from 'vux'
//
// Vue.use('toast', Toast)
// Vue.use('confirm', Confirm)

let config = {
  headers: {},
  timeout: 30000,
  crossDomain: true,
  // 跨域是否带Token
  withCredentials: true,
  // 响应的数据格式 json / blob /document /arraybuffer / text / stream
  responseType: 'json',
  // 用于node.js
  httpAgent: new http.Agent({
    keepAlive: true
  }),
  httpsAgent: new https.Agent({
    keepAlive: true
  })
}

function handleResponse(response) {
  if(response.status >= 400) {
    if(response.status == 500) {
      console.log(`服务器错误`)
    }
  } else {
    let res = response.data
    if(res.result != '000000') {
      console.log(`报错了${res.message}`);
    }
  }
}

// 判断是路由跳转还是 axios 请求
// if (process.server) {
//   config.baseURL = `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 8888}`
// }
// config.baseURL = `http://localhost:8888`
config.baseURL = `http://www.facebook.com`
console.log(process, config)

const service = axios.create(config)

service.defaults.retry = 3 // 请求超时次数上限
service.defaults.retryDelay = 1000 // 重新请求延时

console.log(service.defaults)

service.interceptors.request.use(
  (config) => {
    let time = new Date().getTime()
    config.url = (config.url.indexOf('?')) == -1 ? (config.url + '?t=' + time) : (config.url + '&t=' + time)
    // config.headers['GL_CLIENT_ID'] = store.state.device.ClientId
    // config.headers['GL_DEVICE_ID'] = store.state.device.DeviceId
    // config.headers['GL_CLIENT_VER'] = store.state.device.deviceVersion
    // config.headers['GL_CLIENT_APP_VER'] = store.state.device.deviceAppVersion || '6.3.1'
    // config.headers['GL_TOKEN'] = getCookie('userinfo') ? getCookie('userinfo').token : ''
    return config
  },
  (err) => { // 请求失败
    let config = err.config
    // if config does not exist or the retry options is not set, reject
    if(!config || !config.retry) return Promise.reject(err)
    // Set the variable for keeping track of the retry count
    config.__retryCount = config.__retryCount || 0
    // Check if we've maxed out the total number of retries
    if(config.__retryCount >= config.retry) {
      return Promise.reject(err)
    }
    // Increase the retry count
    config.__retryCount += 1
    // Create new promise to handle exponential backoff
    let backoff = new Promise(function(resolve) {
      setTimeout(function() {
        resolve();
      }, config.retryDelay || 1)
    })
    return backoff.then(function() {
      return axios(config)
    })
  }
)

service.interceptors.response.use(
  (res) => {
    handleResponse(res)
    return res
  },
  (err) => {
    handleResponse(err.response)
    return Promise.reject(err)
  }
)

export default {
  async get(url, { params = {}, headers = {}, /*text = '', isLogin = false*/ } = {}) {
    let time = parseInt(new Date().getTime() / 1000)
    headers['TIMESTAMP'] = time
    return service({
      method: 'get',
      url: url,
      params: params,
      headers: headers
    })
  },
  async post(url, data, { headers = {}, /*text = '', isLogin = false*/ } = {}) {
    let time = parseInt(new Date().getTime() / 1000)
    headers['TIMESTAMP'] = time
    return service({
      method: 'post',
      url: url,
      data: data,
      headers: headers
    })
  },
  async delete(url, { params = {}, headers = {} } = {}) {
    let time = parseInt(new Date().getTime() / 1000)
    headers['TIMESTAMP'] = time
    return service({
      method: 'delete',
      url: url,
      params: params,
      headers: headers
    })
  },
  async put(url, { params = {}, headers = {} } = {}) {
    let time = parseInt(new Date().getTime() / 1000)
    headers['TIMESTAMP'] = time
    return service({
      method: 'put',
      url: url,
      params: params,
      headers: headers
    })
  }
}
