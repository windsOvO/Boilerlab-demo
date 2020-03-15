import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // login user information
    userInfo: {
      email: '',
      name: '',
      section: 0
    },
    currentLab: null
  },
  mutations: {
    setUserInfo (state, userInfo) {
      state.userInfo = userInfo
    },
    clearUserInfo (state) {
      state.userInfo.email = ''
      state.userInfo.name = ''
      state.userInfo.section = 0
    },
    setLab (state, lab) {
      state.currentLab = lab
    },
    resetLab (state) {
      state.currentLab = null
    }
  },
  actions: {
  },
  modules: {
  }
})
