<template>
<div class="searchContent">
    <div :class="['searchBox', !open?'close':'']">
        <el-form ref="searchForm" :model="searchForm" :inline="true" :label-width="labelWidth">
            <el-form-item
                v-for="(item,index) in formOptions"
                :key="index"
                :prop="item.prop"
                :label="item.label"
                :rules="item.rules"
            >
                <el-input 
                    v-if="item.element==='input'"
                    v-model="searchForm[item.prop]"
                    v-bind="item.attr"
                    v-on="item.events"
                ></el-input>
                <el-select
                    v-if="item.element==='select'"
                    v-model="searchForm[item.prop]"
                    v-bind="item.attr"
                    v-on="item.events"
                >
                    <el-option v-for="(op,i) in item.options" :key="i" :label="op.label" :value="op.value"></el-option>
                </el-select>
                <el-date-picker type="date" v-if="item.element==='date'" v-model="searchForm[item.prop]" value-format="yyyy-MM-dd"></el-date-picker>
            </el-form-item>
            <div class="searchBtn">
                <el-form-item>
                    <el-button @click="handleReset">重置</el-button>
                    <el-button type="primary" @click="handleSearch">查询</el-button>
                </el-form-item>
            </div>
        </el-form>
    </div>
    <div class="open" @click="open=!open"><i :class="[open?'el-icon-caret-top':'el-icon-caret-bottom']"></i></div>
</div>
</template>

<script>
export default {
    name: 'SearchForm',
    props:{
        labelWidth: {
            type: String,
            default: '120px'
        },
        formOptions: {
            type: Array,
            required: true,
            default () {
                return []
            }
        },
    },
    data() {
        return {
            open: false,
            searchForm: {}
        }
    },
    created() {
        this.searchForm = this.formOptions.reduce((obj,item) => {
            obj = {...obj, [item.prop]:item.initValue||'' }
            return obj
        },{})
    },
    mounted() {
        this.$emit('handleSearch',this.searchForm)
    },
    methods: {
        handleSearch() {
            this.$refs.searchForm.validate(valid=>{
                if(valid){
                    this.$emit('handleSearch',this.searchForm)
                }
            })
        },
        handleReset() {
            this.$refs.searchForm.resetFields()
            this.$emit('handleSearch',this.searchForm)
        }
    }
}
</script>

<style lang="scss">
.searchContent{
    padding-top: 18px;
    position: relative;
    .open{
        position: absolute;
        width: 200px;
        height: 10px;
        bottom: -10px;
        left: 0;
        right: 0;
        margin: auto;
        text-align: center;
        border: 1px solid #ddd;
        background: #f1f1f1;
        font-size: 14px;
        border-radius: 0 0 10px 10px;
        cursor: pointer;
        i{
            color: #999;
            margin-top: -3px;
            vertical-align: top;
        }
    }
}
.searchBox{
    position: relative;
    overflow: hidden;
    box-shadow: 0 2px 5px #ddd;
    .el-input{
        width: 200px !important;
    }
    .searchBtn{
        width: 320px;
        position: absolute;
        bottom: 0px;
        right: 0;
        text-align: center;
    }
}
.close{
    height: 58px;
    padding-right: 320px;
}

</style>