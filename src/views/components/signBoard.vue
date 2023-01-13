<template>
<list-page>
    <sign-board :signUrl.sync="signUrl" :visible.sync="visible"></sign-board>
    <el-dialog v-if="visible" :visible.sync="visible" title="稿件" width="60%">
        <div class="text_content">
            <h1>Lorem ipsum dolor sit</h1>
            <hr>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, voluptatum, ducimus aspernatur quia eaque voluptatem quam saepe accusamus sint ipsum repudiandae? Quasi tempora quod nesciunt eveniet enim dolore ex odio.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ullam ab doloremque. Dignissimos, facere. Voluptas aliquam, alias eveniet vel dolore repudiandae sequi suscipit laborum ipsam laudantium sit velit odit asperiores.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur dolorum perferendis alias voluptas, quam nesciunt, facilis harum quidem quod a beatae eaque cupiditate aut hic nisi consequuntur ad nam porro!
            Quis cum consectetur reprehenderit iure. Magni reiciendis adipisci ad natus minus illo autem fuga iure earum amet corporis quae quibusdam similique, totam, placeat obcaecati quaerat dolores? Error a earum cumque.
            Autem esse quidem ipsa quasi, deleniti ab voluptatibus earum quae dolorem voluptatem aliquid similique minus aspernatur suscipit! Ullam aliquam laboriosam sit? Ab assumenda optio magnam id dolores, architecto ea est.</p>
            <div class="sign_addr">
                Full Name：<img :src="signUrl" alt="Electronic Signature">
                <br/>Sign Date：<span>{{ time }}</span>
            </div>
        </div>
    </el-dialog>
</list-page>
</template>
<script>
export default {
    data() {
        return {
            signUrl:'',
            visible: false,
            time:''
        }
    },
    created(){
        let dateV = new Date()
        let year = dateV.getFullYear();
        let mounth = dateV.getMonth() + 1;
        let day = dateV.getDate();
        this.time = year + '/' + mounth + '/' + day
    },
}
</script>

<style lang="scss" scoped>
.text_content{
    h1{
        text-align: center;
    }
    hr{
        margin: 10px 0;
    }
    p{
        font-size: 16px;
        line-height: 1.5;
        text-indent: 32px;
    }
    .sign_addr{
        text-align: right;
        margin-top: 50px;
        img{
            display: inline-block;
            width: 150px;
            height: 70px;
            vertical-align: middle;
        }
        span{
            display: inline-block;
            width: 150px;
            text-align: left;
            padding-left: 20px;
        }
    }
}
</style>