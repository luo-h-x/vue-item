import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 登录
    username: '',
    password: '',
    // 侧边栏
    show: true,
    ismobile: false
  },
  getters: {
    username (state) {
      return state.username || sessionStorage.getItem('loginusername')
    }
  },
  mutations: {
    // 登录
    setLogin (state, val) {
      state.username = val
      sessionStorage.setItem('loginusername', val)
    },
    // 侧边栏
    close (state) {
      state.show = false
    },
    open (state) {
      state.show = true
    },
    isMobile (state) {
      state.ismobile = true
    },
    removeMobile (state) {
      state.ismobile = false
    }
  },
  actions: {
  },
  modules: {
  }
})
