<template>
<main-panel>
    <template slot="header">
        <div class="title">
            详情页内容标题
        </div>
    </template>
    <scroll-panel>
        <panel-item name="mk1" label="模块一"></panel-item>
        <panel-item name="mk2" label="模块二"></panel-item>
        <panel-item name="mk3" label="模块三"></panel-item>
        <panel-item name="mk4" label="模块四"></panel-item>
        <template slot="action">
            <el-button type="primary">保存</el-button>
            <el-button type="success">提交</el-button>
            <el-button>返回</el-button>
        </template>
    </scroll-panel>
</main-panel>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.title{
    padding: 20px;
}
</style>