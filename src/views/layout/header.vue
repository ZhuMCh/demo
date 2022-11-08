<template>
<div class="heaader_content">
    <router-link class="login_btn" to="/login">登陆</router-link>
    <div class="banner_box">
        <img src="../../assets/th.jpg" alt="" width="100%" height="100%">
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
import navRouter from '../../router/modules/nav'
export default {
    data() {
        return {

        }
    },
    computed: {
        activeRouter() {
            return this.$route.path
        },
        routers() {
            return navRouter[0]['children']
        }
    },
}
</script>

<style lang="scss" scoped>
.heaader_content{
    box-shadow: inset -4px -4px 5px #3e4247,inset 7px 7px 7px #1d1f23;
    .login_btn{
        position: absolute;
        top: 30px;
        right: 30px;
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
                background-color: #292d32;
                box-shadow: inset -4px -4px 5px #3e4247,inset 7px 7px 7px #1d1f23;
                .avatar_insert{
                    width: 120px;
                    height: 120px;
                    overflow: hidden;
                    border-radius: 50%;
                    box-shadow: -4px -4px 5px #3e4247,7px 7px 7px #1d1f23;
                    background: url('../../assets/lf.jpeg') no-repeat center;
                    background-size: contain;
                    border: 10px solid #292d32;
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
                    color: rgba($color: #fff, $alpha: .6);
                    cursor: pointer;
                    &:hover{
                        background: rgba($color: #fff, $alpha: 0.1);
                    }
                    a{
                        display: block;
                        text-decoration: none;
                        // background: transparent;
                        color: unset;
                    }
                }
                .active{
                    position: relative;
                    color: #0097a7;
                    text-shadow: 0px 0 10px #0097a7;
                    box-shadow: inset -4px -4px 5px #3e4247,inset 7px 7px 7px #1d1f23;
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