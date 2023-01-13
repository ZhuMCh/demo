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

// 全局模板注册
import { components } from '@/components';
components.forEach(component => {
  Vue.component(component.name, component);
});

import './directive/index'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
