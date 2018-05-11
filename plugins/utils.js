import Vue from 'vue'

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

Vue.prototype.$utils = utils