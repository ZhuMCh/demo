<template>
<div class="main-wrapper">
    <header class="header" v-resize="handleResize">
        <slot name="header"></slot>
    </header>
    <main class="table" :style="{'height':tableHeight}">
        <slot name="table"></slot>
    </main>
    <footer class="footer">
        <slot name="footer"></slot>
    </footer>
</div>
</template>

<script>
export default {
    data() {
        return {
            tableHeight: ''
        }
    },
    mounted() {
        this.calculateHeight()
    },
    beforeMount () {
        window.addEventListener("resize", this.calculateHeight);
    },
    deactivated () {
        window.removeEventListener("resize", this.calculateHeight);
    },
    activated () {
        window.addEventListener("resize", this.calculateHeight);
    },
    updated () {
        this.$nextTick(() => {
        this.calculateHeight();
        })
    },
    beforeDestroy () {
        window.removeEventListener("resize", this.calculateHeight);
    },
    methods: {
        handleResize() {
            console.log("自定义指令成功")
            this.calculateHeight()
        },
        calculateHeight() {
            let mainHeight = document.querySelector('.main-wrapper').clientHeight;
            let hHeight = document.querySelector('.header').clientHeight;
            let fHeight = document.querySelector('.footer').clientHeight;
            this.tableHeight = mainHeight - hHeight - fHeight +'px';
            console.log(this.tableHeight)
        }
    }
}
</script>

<style lang="scss" scoped>
.main-wrapper{
    height: 100vh;
    width: 100%;
    overflow: hidden;
    .header{
        min-height: 50px;
        background: #f2f2f2
    }
    .footer{
        height: 40px;
        background: #f1f1f1;
    }
    .table{
        height: calc(100vh - 90px);
        overflow-y: auto;
        overflow-x: hidden;
    }
}
</style>