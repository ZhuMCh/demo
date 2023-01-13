import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import {setTheme} from '@/utils/auth'

export default new Vuex.Store({
  state: {
    theme: sessionStorage.getItem("theme")?sessionStorage.getItem("theme"):'',
    permissionList: []
  },
  getters: {
    theme (state) {
      return state.theme
    },
    permissionList (state) {
      return state.permissionList
    }
  },
  mutations: {
    SET_THEME: (state,theme) => {
      state.theme = theme;
      document.documentElement.className = theme
      setTheme(theme);
    },
    SET_PERMISSION: (state,data) => {
      state.permissionList = data;
    }
  },
  actions: {
    handleTheme({commit}, data) {
      commit("SET_THEME",data)
    },
    handlePermission({commit},data) {
      commit("SET_PERMISSION",data)
    }
  },
  modules: {
  }
})
