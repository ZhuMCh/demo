<template>
<div class="list-container">
    <header class="list-header">
        <slot name="header"></slot>
    </header>
    <main class="list-main">
        <slot></slot>
    </main>
</div>
</template>

<script>
export default {
    name: "ListPage",
    data() {
        return { }
    },
    methods: {}
}
</script>

<style lang="scss" scoped>
.list-container{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: #fff;
    .list-main{
        flex: 1;
        overflow: hidden;
    }
}
</style>