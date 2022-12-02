import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import {setTheme} from '@/utils/auth'

export default new Vuex.Store({
  state: {
    theme: sessionStorage.getItem("theme")?sessionStorage.getItem("theme"):''
  },
  getters: {
    theme (state) {
      return state.theme
    }
  },
  mutations: {
    SET_THEME: (state,theme) => {
      state.theme = theme;
      document.documentElement.className = theme
      setTheme(theme);
    }
  },
  actions: {
    handleTheme({commit}, data) {
      commit("SET_THEME",data)
    },
  },
  modules: {
  }
})
