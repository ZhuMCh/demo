import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import dataV from '@jiaminghi/data-view'
import './assets/style/index.scss'

Vue.config.productionTip = false

Vue.use(Element, { size: 'medium' });
Vue.use(dataV)

import './directive/index'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
