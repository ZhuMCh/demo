<template>
    <list-page>
        <template slot="header">
            <search-form :formOptions="formOptions" :dict="dict" @handleSearch="handleSearch"></search-form>
        </template>
        <my-table :tableConfig="tableConfig" :tableData="tableData" :dict="dict" :pageNo.sync="searchForm.pageNo" :pageSize.sync="searchForm.pageSize">
            <template slot="leftAction">
                <el-button type="primary">新增</el-button>
                <el-button type="primary">导入</el-button>
            </template>
            <template slot="rightAction">
                <el-button>打印</el-button>
            </template>

            <template slot="other" slot-scope="{row}">
                <router-link to="/detail">{{ row.other }}</router-link>
            </template>

            <el-table-column label="操作" fixed="right" width="200" slot="action">
                <template slot-scope="scope">
                    <el-button type="text" @click="lookDetail(scope.row)">查看</el-button>
                    <el-button type="text" class="text-button-warning" @click="lookDetail(scope.row)">编辑</el-button>
                    <el-button type="text" class="text-button-danger" @click="handleDel(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </my-table>
    </list-page>
</template>

<script>
export default {
    data() {
        return {
            searchForm: {
                pageNo: 1,
                pageSize: 10
            },
            formOptions: [
                {
                    prop: 'name',
                    label: '姓名',
                    element: 'input',
                    attr: {
                        placeholder: '请输入姓名',
                        disabled: false,
                        clearable: true
                    }
                },
                {
                    prop: 'sex',
                    label: '性别',
                    element: 'select',
                    initValue: '1',
                    attr: { placeholder: '请选择性别' },
                    events: { change: this.handleChange }
                },
                {
                    prop: 'age',
                    label: '年龄',
                    element: 'input',
                    rules: [{ required: true, message: '必填', trigger: 'blur' }, { pattern: /^([0]|[1-9][0-9]*)$/, message: "请输入数字类型" }],
                    attr: { placeholder: '请输入年龄' }
                },
                { prop: 'params1', label: '条件1', element: 'input' },
                { prop: 'params2', label: '条件2', element: 'input' },
                { prop: 'params3', label: '条件3', element: 'input' },
                { prop: 'params4', label: '条件4', element: 'input' },
            ],
            tableConfig: {
                url:'first',
                selection: true,
                allColumns: [
                    { label: '头像', prop: 'avatar', show: true, isImg:true, attr: { width: 100 } },
                    { label: '姓名', prop: 'name', show: true, alwaysShow: true },
                    { label: '年龄', prop: 'age', show: true, attr: { sortable: true, width: 80 } },
                    { label: '性别', prop: 'sex', show: true, dictKey: 'sex', attr: { width: 80 } },
                    { label: '其他', prop: 'other', show: true, slot: true },
                    { label: '测试', prop: 'test', show: true }
                ]
            },
            dict: {
                sex: [
                    { name: '女', code: '0' },
                    { name: '男', code: '1' }
                ]
            },
            tableData: {
                list: [],
                total: 0,
                loading: false
            }
        }
    },
    watch: {
        "searchForm.pageNo"() {
            this.getList()
        },
        "searchForm.pageSize"() {
            this.getList()
        }
    },
    methods: {
        lookDetail(data) {
            this.$router.push("/detail")
        },
        handleDel(data){
            this.$confirm(`此操作将永久删除该用户：【${data.name}】, 是否继续?`, '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$message.success('删除成功!');
            }).catch(() => {
                this.$message.info('已取消删除');          
            });
        },
        handleSearch(formData) {
            this.searchForm = Object.assign(this.searchForm, formData)
            this.getList()
        },
        handleChange(value) {
            console.log("change", value)
        },
        getList() {
            this.tableData.loading = true;
            // console.log("获取列表数据",this.searchForm)
            setTimeout(() => {
                this.tableData = {
                    list: [
                        { name: '张三', age: '18', sex: 0, other: '说明', test: '测试', avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png' },
                        { name: '李四', age: '22', sex: 1, other: '说明', test: '测试', avatar: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg' },
                        { name: '王五', age: '18', sex: 0, other: '说明', test: '测试', avatar: '' },
                        { name: '赵六', age: '23', sex: 1, other: '说明', test: '测试', avatar: '' },
                    ],
                    total: 30
                }
                this.tableData.loading = false;
            }, 2000)
        },
    }
}
</script>

<style>

</style>