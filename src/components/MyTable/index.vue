<template>
<div class="zj">
    <div class="tableAction">
        <div class="leftAction">
            <slot name="leftAction"></slot>
        </div>
        <div class="rightAction">
            <slot name="rightAction"></slot>
            <div class="dropConfig">
                <el-dropdown>
                    <el-button plain icon="el-icon-setting">列表配置</el-button>
                    <el-dropdown-menu slot="dropdown">
                        <el-checkbox-group v-model="configColumn" true-label="prop" class="dropBox">
                            <draggable :list="columns">
                                <template v-for="item in columns">
                                    <el-checkbox class="dropItem" :key="item.prop" :disabled="item.alwaysShow" :label="item.prop" v-if="item.prop">{{item.label}}</el-checkbox>
                                </template>
                            </draggable>
                        </el-checkbox-group>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
    </div>
    <div class="tableContent">
        <el-table :key="key" :data="tableData" border>
            <el-table-column type="index" label="序号" width="60" align="center"></el-table-column>
            <template v-for="column in tableColumn">
                <el-table-column :key="column.prop" :label="column.label" :prop="column.prop" v-bind="column.attr" v-if="column.prop">
                    <template slot-scope="{ row }">
                        <slot :name="column.prop" :row="row" v-if="column.slot"></slot>
                        <template v-else>{{row[column.prop]}}</template>
                    </template>
                </el-table-column>
                <el-table-column :label="column.label" v-bind="column.attr" :key="column.label" v-else>
                    <template slot-scope="{ row }">
                        <slot name="action" :row="row"></slot>
                    </template>
                </el-table-column>
            </template>
        </el-table>
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
        columns: {
            type: Array,
            required: true,
            default: ()=>{
                return []
            }
        },
        tableData: {
            type: Array,
            default: ()=>{
                return []
            }
        }
    },
    data() {
        return {
            key: 1,
            configColumn: [],
            tableColumn:this.columns
        }
    },
    watch:{
        columns:function(){
            this.configColumn = this.tableColumn.map(item=>item.prop);
        },
        configColumn:function(newVal,oldVal){
            this.tableColumn = this.columns.filter(item=>newVal.indexOf(item.prop)>=0);
            this.key=this.key+1
        },
    },
    created() {
        this.configColumn = this.columns.map(item=>item.prop);
    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>
.tableAction{
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
.dropBox{
    padding: 0 10px;
    .dropItem{
        display: block;
        padding: 5px 10px;
        margin-right: 0;;
        &:hover{
            background: #ecf5ff;
            color: #66b1ff;
        }
    }
}
.tableContent{
    margin-top: 20px;
}
</style>