import Vue from 'vue'
import VueRouter from 'vue-router'
import navRouter from './modules/nav.js'

Vue.use(VueRouter)

const routes = [
	...navRouter,
	{
		path: '/login',
		name: 'login',
		component: () => import('../views/Login.vue'),
	},
	{
		path: '/404',
		component: () => import('../views/404.vue'),
	},
	{ path: "*", redirect: "/404", hidden: true }
]

const router = new VueRouter({
	routes
})

export default router
