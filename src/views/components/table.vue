<template>
<list-page>
    <template slot="header">
        <search-form :formOptions="formOptions" @handleSearch="handleSearch"></search-form>
    </template>
    <my-table :columns="tableColumn" :tableData="tableData" :pageNo.sync="searchForm.pageNo" :pageSize.sync="searchForm.pageSize" >
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
</list-page>
</template>

<script>
export default {
    data() {
        return {
            searchForm:{
                pageNo: 1,
                pageSize: 10
            },
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
                {label: '其他',prop:'other'},
                {label: '操作',prop:'',slot:true,attr:{width: '100'}}
            ],
            tableData: {
                list:[],
                total: 0,
                loading: false
            }
        }
    },
    watch: {
        "searchForm.pageNo"(){
            this.getList()
        },
        "searchForm.pageSize"(){
            this.getList()
        }
    },
    methods: {
        lookDetail(data) {
            console.log(data)
            this.$router.push("/detail")
        },
        handleSearch(formData) {
            this.searchForm = Object.assign(this.searchForm,formData)
            this.getList()
        },
        handleChange(value){
            console.log("change",value)
        },
        getList(){
            this.tableData.loading=true;
            console.log("获取列表数据",this.searchForm)
            setTimeout(()=>{
                this.tableData = {
                    list:[
                        {name: '张三', age: '18', sex: 0, other:'说明'},
                        {name: '张三', age: '22', sex: 1, other:'说明'},
                        {name: '张三', age: '18', sex: 0, other:'说明'},
                        {name: '张三', age: '23', sex: 1, other:'说明'},
                    ],
                    total: 30
                }
                this.tableData.loading=false;
            },2000)
        },
    }
}
</script>

<style>

</style>