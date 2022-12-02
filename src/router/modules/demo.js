const demoRouter = [
    {
		path: '/demo',
		name: 'demo',
		component: () => import('../../views/demo/index.vue')
	},
	{
		path: '/components',
		name: 'components',
		component: () => import('../../components/index.vue')
	}
]

export default demoRouter