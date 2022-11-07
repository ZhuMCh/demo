const navRouter = [
	{
		path: '/',
		name: 'layout',
		redirect: "/vitae",
		component: () => import('../../views/layout/index.vue'),
		children: [
			{
				path: '/vitae',
				name: 'vitae',
				component: () => import('../../views/vitae.vue'),
				mate: { title: '个人简历'}
			},
            {
				path: '/notes',
				name: 'notes',
				component: () => import('../../views/notes.vue'),
				mate: { title: '学习笔记'}
			},
            {
				path: '/blog',
				name: 'blog',
				component: () => import('../../views/blog.vue'),
				mate: { title: '个人博客'}
			},
            {
				path: '/case',
				name: 'case',
				component: () => import('../../views/case.vue'),
				mate: { title: '学习案例'}
			}
		]
	}
]

export default navRouter