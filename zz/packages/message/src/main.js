import Vue from 'Vue'
import Main from './main.vue'
// 返回一个 扩展实例构造器
let MessageConstructor = Vue.extend(Main)

let instance;
let instances = [];
let seed = 1;
// TODO:vm实例结构
const Message = function (options = {}) {
  if (Vue.prototype.$isServer) return;
  if (typeof options === 'string') {
    options = {
      message: options
    };
  }
  if (options.duration) {  
  } else {
    options.duration = 2000
  }
  options.showWrap = true
  let id = 'message_' + seed++;
  instance = new MessageConstructor({
    data: options
  });
  instance.id = id;
  instance.vm = instance.$mount();
  document.body.appendChild(instance.vm.$el);
  instances.push(instance);
  //   // 提前 250ms 执行淡出动画(因为我们再css里面设置的隐藏动画持续是250ms)
  // setTimeout(() => {instance.vm._data.showContent = false} ,options.duration - 1250)
  // // 过了 duration 时间后隐藏整个组件
  // setTimeout(() => {instance.vm._data.showWrap = false} ,options.duration)
  return instance.vm;
}

// // 定义弹出组件的函数 接收2个参数, 要显示的文本 和 显示时间
// function showToast(text, duration = 2000) {
//   const toastDom = new ToastConstructor({
//     el: document.createElement('div'),
//     data() {
//       return {
//         text:text,
//         showWrap:true,    // 是否显示组件
//         showContent:true  // 作用:在隐藏组件之前,显示隐藏动画
//       }
//     }
//   })
//   document.body.appendChild(toastDom.$el)

//   // 提前 250ms 执行淡出动画(因为我们再css里面设置的隐藏动画持续是250ms)
//   setTimeout(() => {toastDom.showContent = false} ,duration - 1250)
//   // 过了 duration 时间后隐藏整个组件
//   setTimeout(() => {toastDom.showWrap = false} ,duration)
// }


// // 注册为全局组件的函数
// function registryToast() {
//   // 将组件注册到 Vue 的 原型链里去,
//   // 这样就可以在所有 Vue 的实例里面使用 this.$toast()
//   Vue.prototype.$toast = showToast
// }

export default Message