<template>
<div class="header_content">
    <div class="header_bar">
        <el-switch
            class="theme_change"
            v-model="isTheme"
            active-color="#555"
            inactive-color="#e6e7ee">
        </el-switch>
        <router-link class="login_btn" to="/login">登陆</router-link>
    </div>
    <div class="banner_box">
        <!-- <img src="../../assets/th.jpg" alt="" width="100%" height="100%"> -->
        <cloud />
    </div>
    <div class="nav_box">
        <div class="user_info">
            <div class="avatar">
                <div class="avatar_insert"></div>
            </div>
            <div class="name">Monkey D Luffy</div>
        </div>
        <div class="nav_bar">
            <ul class="nav">
                <li v-for="item in routers" :key="item.path" :class="{'active':item.path==activeRouter}"><router-link :to="item.path">{{item.mate.title}}</router-link></li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import navRouter from '../../router/modules/nav'
import Cloud from '../demo/components/cloud'
export default {
    components:{Cloud},
    data() {
        return {
            isTheme: false
        }
    },
    computed: {
        ...mapGetters(['theme']),
        activeRouter() {
            return this.$route.path
        },
        routers() {
            return navRouter[0]['children']
        },
    },
    watch:{
        isTheme:function(){
            this.$store.dispatch("handleTheme",this.isTheme?'dark':'');
        }
    },
    mounted() {
        this.isTheme = this.theme?true:false;
    }
}
</script>

<style lang="scss" scoped>
.header_content{
    position: relative;
    box-shadow: inset -4px -4px 5px var(--theme-shadow1),inset 7px 7px 7px var(--theme-shadow2);
    .header_bar{
        padding: 15px;
        position: absolute;
        right: 0;
        left: 0;
        z-index: 100;
        background: rgba($color: #000000, $alpha: .2);
        text-align: right;
    }
    .login_btn{
        // position: absolute;
        // top: 30px;
        // right: 30px;
        color: #f1f1f1;
        z-index: 100;
        margin-left: 20px;
    }
    .theme_change{
        // position: absolute;
        // top: 30px;
        // right: 80px;
        // z-index: 100;
    }
    ::v-deep .theme_change .el-switch__core::after{
        font-family: element-icons!important;
        content: "\e6f6" !important;
        background: #fff;
        line-height: 16px;
    }
    ::v-deep .theme_change.is-checked .el-switch__core::after{
        content: "\e6f0" !important;
        background: #333;
        color: #fff;
        text-align: right;
    }
    .banner_box{
        height: 300px;
        width: 100%;
    }
    .nav_box{
        height: 80px;
        display: flex;
        justify-content: space-between;
        .user_info{
            position: relative;
            // width: 250px;
            text-align: center;
            .name{
                font-size: 34px;
                margin-top: 35px;
                color: #356859;
                font-weight: bold;
                padding-left: 50px;
            }
            .avatar{
                position: absolute;
                width: 150px;
                height: 150px;
                top: -120px;
                left: 50px;
                padding: 15px;
                border-radius: 50%;
                background-color: var(--theme-bg);
                box-shadow: inset -4px -4px 5px var(--theme-shadow1),inset 7px 7px 7px var(--theme-shadow2);
                .avatar_insert{
                    width: 120px;
                    height: 120px;
                    overflow: hidden;
                    border-radius: 50%;
                    box-shadow: -4px -4px 5px var(--theme-shadow1),7px 7px 7px var(--theme-shadow2);
                    background: url('../../assets/lf.jpeg') no-repeat center;
                    background-size: contain;
                    border: 10px solid var(--theme-bg);
                }
            }
        }
        .nav_bar{
            .nav{
                height: 50px;
                margin-top: 30px;
                li{
                    display: inline-block;
                    padding: 0 20px;
                    height: 50px;
                    line-height: 50px;
                    text-align: center;
                    cursor: pointer;
                    &:hover{
                        background: rgba($color: #fff, $alpha: 0.1);
                    }
                    a{
                        display: block;
                        text-decoration: none;
                        color: var(--theme-color1);
                    }
                }
                .active{
                    position: relative;
                    color: #0097a7;
                    // text-shadow: 0px 0 10px #0097a7;
                    box-shadow: inset -4px -4px 5px var(--theme-shadow1),inset 7px 7px 7px var(--theme-shadow2);
                    &::after{
                        position: absolute;
                        content: "";
                        height: 2px;
                        background: #0097a7;
                        bottom: 2px;
                        left: 0;
                        right: 0;
                    }
                    &:hover::before{
                        background-color: #0097a7;
                        bottom: 0;
                        content: "";
                        left: 0;
                        opacity: 0.24;
                        pointer-events: none;
                        position: absolute;
                        right: 0;
                        top: 0;
                        -webkit-transition: .3s cubic-bezier(.25,.8,.5,1);
                        transition: .3s cubic-bezier(.25,.8,.5,1);
                    }
                }
            }
        }
    }
}
</style>