import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({

  state: {
    url:'',
    imgUrl: '/img/' // 图片路径
    // imgUrl: '/assets/img/' // 图片路径
  }
  // mutations: {
  //   SET_HOME (state, value) {
  //     state.home = value
  //   },
  //   SET_SHOWRIGHT (state, value) {
  //     state.showRight = value
  //   }
  // },
  // actions: {
  //   async nuxtServerInit ({ commit }, { req }) { //初始化
  //     let { data } = await getHomeInit()
  //     commit('SET_HOME', data.data)
  //   }
  // }
})

export default store