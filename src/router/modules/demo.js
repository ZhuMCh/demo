const demoRouter = [
    {
		path: '/demo',
		name: 'demo',
		component: () => import('../../views/demo/index.vue')
	},
	{
		path: '/test',
		name: 'test',
		component: () => import('../../components/index.vue')
	}
]

export default demoRouter