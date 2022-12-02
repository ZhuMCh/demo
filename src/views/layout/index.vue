<template>
<div class="main_container">
    <div class="header_wrapper">
        <Header />
    </div>
    <div class="main_wrapper">
        <transition name="fade-transform" mode="out-in">
            <keep-alive>
                <router-view :key="key"/>
            </keep-alive>
        </transition>
    </div>
</div>
</template>

<script>
import Header from './header.vue'
export default {
    components: {
        Header
    },
    computed: {
        key() {
            return this.$route.path
        },
    }
}
</script>

<style lang="scss" scoped>
.main_container{
    padding: 20px;
    height: 100%;
    width: 100%;
    background-color: var(--theme-bg);
    .header-wrapper{
        width: 100%;
    }
    .main_wrapper{
        min-height: 500px;
        width: 100%;
    }
}
</style>
<style>
/* fade-transform */
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all .5s;
}

.fade-transform-enter {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>