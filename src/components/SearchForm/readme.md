# 用法
<template>
<div class="home">
	<search-form :formOptions="formOptions" @handleSearch="handleSearch"></search-form>
</div>
</template>

<script>
import SearchForm from '@/components/SearchForm'
export default {
	name: 'HomeView',
	components: {
		SearchForm
	},
	data() {
		return {
			searchForm:{},
			formOptions: [
				{
					prop: 'name',
					label: '姓名',
					element: 'input',
					attr: {
						placeholder:'请输入姓名',
						disabled: false,
						clearable: true
					}
				},
				{
					prop: 'sex',
					label: '性别',
					element: 'select',
					initValue: '2',
					options: [
						{label:'男',value:'1'},
						{label:'女',value:'2'}
					],
					attr: {
						placeholder:'请选择性别'
					},
					events:{
						change:this.handleChange
					}
				},
				{
					prop: 'age',
					label: '年龄',
					element: 'input',
					rules:[{required:true,message:'必填',trigger:'blur'},{pattern:/^([0]|[1-9][0-9]*)$/,message:"请输入数字类型"}],
					attr: {
						placeholder:'请输入年龄',
					}
				},
				{
					prop: 'birthdy',
					label: '出生日期',
					element: 'date',
					attr: {
						placeholder:'请选择出生日期'
					}
				},
				{
					prop: 'test1',
					label: '测试1',
					element: 'input',
					attr: {
						placeholder:'请输入',
					}
				},
				{
					prop: 'test2',
					label: '测试2',
					element: 'input',
					attr: {
						placeholder:'请输入',
					}
				}
			]
		}
	},
	methods: {
		handleSearch(formData) {
			this.searchForm = Object.assign(this.searchForm,formData)
			console.log("父页面",formData,this.searchForm)
		},
		handleChange(value){
			console.log("change",value)
		}
	}
}
</script>
