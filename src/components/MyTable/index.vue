<template>
<div class="table-container">
    <div class="table-action">
        <div class="leftAction">
            <slot name="leftAction"></slot>
        </div>
        <div class="rightAction">
            <slot name="rightAction"></slot>
            <div class="dropConfig">
                <el-dropdown>
                    <el-button plain icon="el-icon-setting">列表配置</el-button>
                    <el-dropdown-menu slot="dropdown">
                        <div class="dropBox">
                            <draggable :list="tableColumn">
                                <template v-for="item in tableColumn">
                                    <el-checkbox class="dropItem" :key="item.prop" v-model="item.show" :disabled="item.alwaysShow" v-if="item.prop">{{item.label}}</el-checkbox>
                                </template>
                            </draggable>
                        </div>
                        
                        <div class="dropAction">
                            <el-button type="text" @click="reset">重置</el-button>
                            <el-button type="text" @click="refresh">刷新</el-button>
                            <el-tooltip content="初始化配置请点'重置',保留当前配置请点'刷新'" effect="light">
                                <i class="el-icon-question text-button-warning"></i>
                            </el-tooltip>
                        </div>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
    </div>
    <div class="table-content" v-loading="tableData.loading">
        <el-table :key="key" :data="tableData.list" border height="100%" style="width:100%">
            <el-table-column type="selection" width="60" align="center" v-if="tableConfig.selection" fixed="left"></el-table-column>
            <el-table-column type="index" label="序号" width="60" align="center" fixed="left"></el-table-column>
            <template v-for="item in tableColumn">
                <el-table-column :key="item.prop" :label="item.label" :prop="item.prop" v-bind="item.attr" show-overflow-tooltip v-if="item.show">
                    <template slot-scope="{ row }">
                        <template v-if="item.dictKey">
                            {{ formatter(item.dictKey,row[item.prop]) }}
                        </template>
                        <template v-else-if="item.isImg">
                            <el-image style="width: 40px; height: 40px" :src="row[item.prop]" :preview-src-list="[row[item.prop]]"></el-image>
                        </template>
                        <template v-else>
                            <slot :name="item.prop" :row="row" v-if="item.slot"></slot>
                            <template v-else>{{row[item.prop]}}</template>
                        </template>
                    </template>
                </el-table-column>
            </template>
            <slot name="action"></slot>
        </el-table>
    </div>
    <div class="table-pagination">
        <el-pagination
            background
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="1"
            :page-sizes="[10, 20, 30, 40,100]"
            :page-size="10"
            layout="total, prev, pager, next, sizes, jumper"
            :total="tableData.total">
    </el-pagination>
    </div>
</div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
    name: 'MyTable',
    components: {
        draggable
    },
    props: {
        tableConfig: {
            type: Object,
            default: ()=>{
                return {
                    url: 'tableColumns',
                    selection: false,
                    allColumns: []
                }
            }
        },
        tableData: {
            type: Object,
            default: ()=>{
                return {
                    list: [],
                    total: 0,
                    loading: false
                }
            }
        },
        dict:{
            type: Object,
            default: ()=>{
                return {}
            }
        }
    },
    data() {
        return {
            key: 1,
            tableColumn:[],
        }
    },
    computed: {

    },
    watch: {
        tableColumn:{
            deep: true,
            handler(newVal,oldVal){
                this.key=this.key+1
                this.$store.dispatch('handleTableCol',{key:this.tableConfig.url,value:JSON.stringify(newVal)})
            }
        },
    },
    created() {
        let sessionData = sessionStorage.getItem(this.tableConfig.url)
        if(sessionData){
            this.tableColumn = JSON.parse(sessionData)
        }else{
            this.tableColumn = JSON.parse(JSON.stringify(this.tableConfig.allColumns));
            this.$store.dispatch('handleTableCol',{key:this.tableConfig.url,value:JSON.stringify(this.tableConfig.allColumns)})
        }
    },
    methods: {
        reset(){
            this.tableColumn = JSON.parse(JSON.stringify(this.tableConfig.allColumns));
            this.$store.dispatch('handleTableCol',{key:this.tableConfig.url,value:JSON.stringify(this.tableConfig.allColumns)})
        },
        refresh(){
            // 获取删除项
            let del = this.tableColumn.filter(v => {
                return this.tableConfig.allColumns.every(e => e.prop != v.prop);
            });
            // 获取新增项
            let add = this.tableConfig.allColumns.filter(v => {
                return this.tableColumn.every(e => e.prop != v.prop);
            });
            // 获取新增项的下标
            let addIdx = [];
            for(let i=0;i<add.length;i++){
                let idx = this.tableConfig.allColumns.findIndex(item=>item.prop==add[i].prop)
                addIdx.push(idx)
            }
            // 先删除当前数据中已删除的项
            del.forEach(item=>{
                this.tableColumn=this.tableColumn.filter(i=>{return item.prop!=i.prop})
            })
            // 再向当前数据中插入新增的项
            addIdx.forEach((i,index)=>{
                if(this.tableColumn.length>i){
                    this.tableColumn.splice(i,0,add[index]) 
                }else{
                    this.tableColumn.push(add[index])
                }
            })
            // 更新缓存
            this.$store.dispatch('handleTableCol',{key:this.tableConfig.url,value:JSON.stringify(this.tableColumn)})
        },
        handleSizeChange(val){
            console.log("pageSize",val)
            this.$emit("update:pageSize",val)
        },
        handleCurrentChange(val){
            console.log("page",val)
            this.$emit("update:pageNo",val)
        },
        formatter(prop,val){
            if(this.dict&&this.dict.hasOwnProperty(prop)){
                let obj = this.dict[prop].find(item=>{return item.code==val})
                return (obj&&obj.name)||''
            }
        },
    }
}
</script>

<style lang="scss" scoped>
.table-container{
    height: 100%;
    overflow: hidden;
}
.table-action{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    margin-top: 20px;
}
.dropConfig{
    display: inline-block;
    margin-left: 20px;
}
.dropAction{
    padding: 0 10px;
    border-top: 1px solid #ddd;
    .el-icon-question{
        vertical-align: text-bottom;
        margin-left: 10px;
    }
}
.dropBox{
    padding: 0 10px;
    max-height: 300px;
    overflow-x: hidden;
    overflow-y: auto;
    .dropItem{
        display: block;
        padding: 5px 10px;
        margin-right: 0;
        ::v-deep .el-checkbox__label{
            padding: 0 10px;
        }
        &:hover{
            background: #ecf5ff;
            color: #66b1ff;
        }
    }
}
.table-content{
    margin-top: 20px;
    height: calc(100% - 36px - 72px - 40px);
}
.table-pagination{
    padding: 20px;
    text-align: center;
    height: 72px;
}
</style>