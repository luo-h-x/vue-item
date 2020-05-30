import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: '',
    password: '',
    show: true,
    ismobile: false
  },
  getters: {
    username (state) {
      return state.username || sessionStorage.getItem('loginusername')
    }
  },
  mutations: {
    setLogin (state, val) {
      state.username = val
      sessionStorage.setItem('loginusername', val)
    },
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
