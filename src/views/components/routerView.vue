<template>
<div class="components_container">
    <header class="header">
        <div class="title"><img src="../../assets/logo.png" alt=""><!--组件预览--></div>
        <el-breadcrumb separator="/" class="breadcrumb">
            <el-breadcrumb-item v-for="item in levelList" :key="item.path">{{ item.meta.title }}</el-breadcrumb-item>
        </el-breadcrumb>
    </header>
    <div class="main_container">
        <aside class="aside_content">
            <el-menu
                class="el-menu-vertical-demo"
                router
                :default-active="activeRouter"
                @open="handleOpen"
                @close="handleClose">
                <template v-for="(item,index) in routers">
                    <el-submenu :index="item.path" v-if="item.children" :key="item.path">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>{{item.meta.title}}</span>
                        </template>
                        <template v-for="i in item.children">
                            <el-menu-item :key="i.path" :index="i.path" v-if="i.meta.navShow!=false">{{i.meta.title}}</el-menu-item>
                        </template>
                    </el-submenu>
                    <el-menu-item :index="item.path" v-else :key="index">
                        <i class="el-icon-menu"></i>
                        <span slot="title">{{item.meta.title}}</span>
                    </el-menu-item>
                </template>
            </el-menu>
        </aside>
        <main class="main_content">
            <transition name="fade-transform" mode="out-in">
                <router-view />
            </transition>
        </main>
    </div>
</div>
</template>

<script>
import componentsRouter from '../../router/modules/components'
export default {
    data() {
        return {
            levelList: []
        }
    },
    computed: {
        key() {
            return this.$route.path
        },
        activeRouter() {
            const path = this.$route.path
            const headNav = this.$route.meta.headNav
            let active = path
            if (headNav) {
                active = headNav
            }
            return active
        },
        routers() {
            return componentsRouter
        },
    },
    watch: {
        $route(route) {
            if (route.path.startsWith('/redirect/')) {
                return
            }
            this.getBreadcrumb()
        }
    },
    mounted(){
        this.getBreadcrumb()
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        getBreadcrumb() {
            let matched = this.$route.matched.filter(item => item.meta && item.meta.title);

            let idx = this.$route.matched.findIndex(item => item.meta && item.meta.headNav);
            
            if(idx>-1){
                matched.splice(idx,0,{ path: matched[idx].meta.headNav, meta: { title: matched[idx].meta.headTitle }})
            }

            this.levelList = matched.filter(item => item.meta && item.meta.title)
        },
    }
}
</script>

<style lang="scss" scoped>
.components_container{
    width: 100%;
    height: 100vh;
    overflow: hidden;
    .header{
        height: 60px;
        background: #fff;
        border: 1px solid #ddd;
        .title{
            display: inline-block;
            width: 200px;
            line-height: 60px;
            vertical-align: bottom;
            padding-left: 20px;
            font-size: 24px;
            font-weight: bold;
            img{
                width: 50px;
                height: 50px;
                vertical-align: middle;
            }
        }
        .breadcrumb{
            display: inline-block;
            margin-bottom: 10px;
        }
    }
    .main_container{
        display: flex;
        height: calc(100vh - 60px);
        .aside_content{
            width: 200px;
            height: 100%;
            overflow-y: auto;
            overflow-x: hidden;
            background: #fff;
        }
        .main_content{
            flex: 1;
            min-width: 500px;
            margin: 20px;
        }
    }
    a{
        text-decoration: none;
        color: #000;
    }
}
</style>