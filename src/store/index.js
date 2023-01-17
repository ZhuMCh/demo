import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import {setTheme,setTablecol} from '@/utils/auth'

export default new Vuex.Store({
  state: {
    theme: sessionStorage.getItem("theme")?sessionStorage.getItem("theme"):'',
    permissionList: [],
    tableColumns: []
  },
  getters: {
    theme (state) {
      return state.theme
    },
    permissionList (state) {
      return state.permissionList
    },
    tableColumns (state) {
      return state.tableColumns
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
    },
    SET_TABLECOLUMNS: (state,data) => {
      state.tableColumns = data.value
      setTablecol(data.key,data.value)
    }
  },
  actions: {
    handleTheme({commit}, data) {
      commit("SET_THEME",data)
    },
    handlePermission({commit},data) {
      commit("SET_PERMISSION",data)
    },
    handleTableCol({commit},data) {
      commit("SET_TABLECOLUMNS",data)
    }
  },
  modules: {
  }
})
