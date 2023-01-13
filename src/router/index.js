import Vue from 'vue'
import VueRouter from 'vue-router'
import navRouter from './modules/nav'
import demoRouter from './modules/demo'
import componentsRouter from './modules/components'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		component: () => import('../views/index.vue')
	},
	...navRouter,
	...demoRouter,
	...componentsRouter,
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
