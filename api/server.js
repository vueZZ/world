import axios from 'axios'
import { Message } from 'element-ui'

const server = axios.create({
  timeout: 10000,
  withCredentials: true
})

// // 添加请求拦截器
// server.interceptors.request.use(function (config) {
//   // 在发送请求之前做些什么
//   return config;
// }, function (error) {
//   // 对请求错误做些什么
//   return Promise.reject(error)
// });

// 添加响应拦截器
server.interceptors.response.use(res => {
  return checkData(res)
}, error => {
  return Promise.reject(error)
})

function checkData (res) { // 检查数据
  return new Promise((resolve, reject) => {
    if (res.data.code === '200') {
      resolve(res.data.data)
    } else {
      // let msg = `${res.data.code}:${res.data.msg}`
      handleError(res.data.code).then(e => {
        reject(e)
      })
    }
  })
}

function handleError (code) {
  return new Promise((resolve, reject) => {
    let msg = ''
    switch (code) {
      case '300':
        msg = '300错误'
        break
    }
    Message.error(msg)
    resolve(code)
  })
}

export default server