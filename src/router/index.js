import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'layout',
		redirect: "/vitae",
		component: () => import('../views/layout/index.vue'),
		children: [
			{
				path: '/vitae',
				name: 'vitae',
				component: () => import('../views/vitae.vue'),
				mate: { title: '个人简历'}
			}
		]
	},
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
