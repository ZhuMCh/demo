<template>
<div class="page">
    <ListPage>
        <template slot="header">
            <search-form :formOptions="formOptions" @handleSearch="handleSearch"></search-form>
        </template>
        <template slot="table">
            <my-table :columns="tableColumn" :tableData="tableData">
                <template slot="leftAction">
                    <el-button type="primary">新增</el-button>
                    <el-button type="primary">导入</el-button>
                </template>
                <template slot="rightAction">
                    <el-button>打印</el-button>
                </template>
                <template slot="sex" slot-scope="{row}">
                    <span>{{row.sex==0?'女':'男'}}</span>
                </template>
                <template slot="action" slot-scope="{row}">
                    <el-button type="text" @click="lookDetail(row)">查看详情</el-button>
                </template>
            </my-table>
        </template>
        <template slot="footer">分页</template>
    </ListPage>
</div>
</template>

<script>
import ListPage from '@/components/listPage'
import SearchForm from '@/components/SearchForm'
import MyTable from '@/components/MyTable'
export default {
    components: {
        ListPage,
        SearchForm,
        MyTable
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
                { prop: 'params1', label: '条件1', element: 'input'},
                { prop: 'params2', label: '条件2', element: 'input'},
                { prop: 'params3', label: '条件3', element: 'input'},
                { prop: 'params4', label: '条件4', element: 'input'},
            ],
            tableColumn:[
                {label: '姓名',prop:'name',alwaysShow:true},
                {label: '年龄',prop:'age',attr:{sortable:true}},
                {label: '性别',prop:'sex',slot:true},
                {label: '其他备注',prop:'other'},
                {label: '操作',prop:'',slot:true,attr:{width: '100'}}
            ],
            tableData: [
                {name: '张三', age: '李四', sex: 1, other:'说明'}
            ]
        }
    },
    methods: {
        lookDetail(data) {
            console.log(data)
        },
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

<style>
.page{
    background: var(--theme-bg);
    color: var(--theme-color);
}
</style>
    