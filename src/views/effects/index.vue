<template>
<list-page>
    <div class="box">
        <div class="progress step" :style="{'--width':progress+'px'}">伪类+css变量实现 进度条</div>
        <el-input class="num" type="number" v-model="progress"></el-input>
    </div>
    <div class="box">
        <el-form :inline="true" :model="formD">
            <el-form-item label="文字">
                <el-select v-model="formD.textColor">
                    <el-option v-for="item in colors" :key="item" :value="item" :label="item"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="背景">
                <el-select v-model="formD.bgColor">
                    <el-option v-for="item in colors" :key="item" :value="item" :label="item"></el-option>
                </el-select>
            </el-form-item>
        </el-form>
        <div class="main" :style="{'--bgColor':formD.bgColor}">
            <div class="title" :style="{'--textColor':formD.textColor}">标题</div>
            <div class="content" :style="{'--textColor':formD.textColor}">文本内容</div>
        </div>
    </div>
</list-page>
</template>

<script>
export default {
    data() {
        return {
            progress: 10,
            colors: ['#333333','#f1f1f1','#67C23A','#E6A23C','#F56C6C','#909399'],
            formD:{
                textColor: '#333333',
                bgColor: '#f1f1f1'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.box{
    margin: 20px 0 0 50px;
}
.progress{
    display: inline-block;
    width: 400px;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #ccc;
}
.num{
    display: inline-block;
    width: 100px;
    margin-top: 50px;
}
.step{
    position: relative;
    &::after{
        content: "";
        display: block;
        width: var(--width);
        height: 3px;
        background: #007ACC;
        position: absolute;
        bottom: 0;
        left: 0;
        transition: 0.2s;
    }
}

.main{
    width: 400px;
    height: 500px;
    background: var(--bgColor);
    border: 1px solid #ccc;
    .title{
        padding: 20px;
        border-bottom: 1px solid #ccc;
        color: var(--textColor);
    }
    .content{
        color: var(--textColor);
        padding: 20px;
    }
}
</style>