import Vue from 'vue'
import zz from '~/zz/src/index.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 这里也可以直接执行 toastRegistry()
const utils =  {
  throttle: function(method, time=100){
    clearInterval(method.tId)
    // if (method.hasOwnProperty('tId')) {
    //   clearInterval(method.tId)
    // }
    method.tId = setInterval(function () {
      method()
    }, time)
  }
}
// import RGBaster from 'rgbaster'
Vue.prototype.$utils = utils
Vue.use(zz)
Vue.use(ElementUI)