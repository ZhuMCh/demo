<template>
<div class="main_container">
    <div class="header_wrapper">
        <Header />
    </div>
    <div class="main_wrapper">
        <router-view />
    </div>
</div>
</template>

<script>
import Header from './header.vue'
export default {
    components: {
        Header
    }
}
</script>

<style lang="scss" scoped>
.main_container{
    padding: 20px;
    height: 100%;
    width: 100%;
    background-color: #292d32;
    .header-wrapper{
        // height: 400px;
        width: 100%;
    }
    .main_wrapper{
        min-height: 500px;
        width: 100%;
    }
}
</style>