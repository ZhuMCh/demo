<template>
    <div class="demoPage">
        <!-- <Cloud /> -->
        <ListPage>
            <template slot="header">
                <search-form :formOptions="formOptions"></search-form>
            </template>
            <template slot="table">
                <el-button @click="modelChange">切换背景</el-button>
            </template>
            <template slot="footer">分页</template>
        </ListPage>
    </div>
</template>

<script>
import Cloud from './components/cloud'
import ListPage from '@/components/listPage'
import SearchForm from '@/components/SearchForm'
export default {
    components: {
        Cloud,
        ListPage,
        SearchForm
    },
    data() {
        return {
            formOptions: [
                {
                    prop: 'name',
                    label: '姓名',
                    element: 'input',
                    attr: {
                        placeholder:'请输入姓名',
                        disabled: false,
                        clearable: true
                    }
                },
                {
                    prop: 'sex',
                    label: '性别',
                    element: 'select',
                    initValue: '2',
                    options: [
                        {label:'男',value:'1'},
                        {label:'女',value:'2'}
                    ],
                    attr: {
                        placeholder:'请选择性别'
                    }
                },
                {
                    prop: 'age',
                    label: '年龄',
                    element: 'input',
                    rules:[{required:true,message:'必填',trigger:'blur'},{pattern:/^([0]|[1-9][0-9]*)$/,message:"请输入数字类型"}],
                    attr: {
                        placeholder:'请输入年龄',
                    }
                },
                { prop: 'params1', label: '条件1', element: 'input'},
                { prop: 'params2', label: '条件2', element: 'input'},
                { prop: 'params3', label: '条件3', element: 'input'},
                { prop: 'params4', label: '条件4', element: 'input'},
            ],
            dark:false,
        }
    },
    mounted() {
        window.document.documentElement.setAttribute( "data-theme", 'light' );
    },
    methods: {
        modelChange() {
            this.dark = !this.dark;
            if(this.dark){
                window.document.documentElement.setAttribute( "data-theme", 'dark' );
            }else{
                window.document.documentElement.setAttribute( "data-theme", 'light' );
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/common.scss';
.demoPage{
    @include background_color("background_color");
    //再次使用了文字颜色变量
        @include font_color("text-color");
}
</style>