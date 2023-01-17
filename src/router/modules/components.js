const componentsRouter = [
	{
		path: '/components',
		name: 'components',
		redirect: "/table",
		component: () => import('../../views/components/routerView.vue'),
		meta: { title: '组件'},
		children: [
			{
				path: '/table',
				name: 'table',
				component: () => import('../../views/components/table.vue'),
				meta: { title: '配置表格'}
			},
			{
				path: '/detail',
				name: 'detail',
				component: () => import('../../views/components/detail.vue'),
				meta: { title: '表格详情', headNav: '/table',headTitle:'配置表格', navShow:false}
			},
			{
				path: '/directive',
				name: 'directive',
				component: () => import('../../views/components/directive.vue'),
				meta: { title: '指令'}
			},
			{
				path: '/signBoard',
				name: 'signBoard',
				component: () => import('../../views/components/signBoard.vue'),
				meta: { title: '签字版'}
			},
			{
				path: '/richTextEditor',
				name: 'richTextEditor',
				component: () => import('../../views/components/richTextEditor.vue'),
				meta: { title: '富文本编辑器'}
			},
			{
				path: '/other',
				name: 'other',
				component: () => import('../../views/components/other.vue'),
				meta: { title: '其他'}
			},
		]
	},
	{
		path: '/effects',
		name: 'effects',
		redirect: "/tx1",
		component: () => import('../../views/components/routerView.vue'),
		meta: { title: '特效'},
		children: [
			{
				path: '/tx1',
				name: 'tx1',
				component: () => import('../../views/effects/index.vue'),
				meta: { title: '特效1'}
			},
			{
				path: '/reg',
				name: 'reg',
				component: () => import('../../views/effects/index.vue'),
				meta: { title: '正则表达式'}
			},
		]
	}
]

export default componentsRouter