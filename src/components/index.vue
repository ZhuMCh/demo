<template>
<main-panel v-waterMarker="{text:'版权所有',textColor:'rgba(180, 180, 180, 0.4)'}">
    <template slot="header">
        <div style="padding:18px 20px 0;background:#ddd;">
            <el-form :inline="true" size="mini" label-width="140px">
                <el-form-item label="科目一">清而完全而去</el-form-item>
                <el-form-item label="科目二">阿斯达</el-form-item>
                <el-form-item label="科目三">阿达达</el-form-item>
                <el-form-item label="科目四">未完全而去</el-form-item>
            </el-form>
        </div>
    </template>
    <template slot="footer">@copright 23222</template>
    <scroll-panel>
        <panel-item name="nav1" label="导航一">
            <div style="height: 400px;">
                <el-card class="box-card" v-draggable>
                    <div slot="header" class="header">
                        <span>使用text-overflow控制溢出文本</span>
                        <span>
                            <i class="el-icon-c-scale-to-original"></i>
                            <i class="el-icon-full-screen"></i>
                        </span>
                    </div>
                    <div class="content">
                        <p class="ellipsis-text s-line sl-ellipsis">CSS非常有趣和搞怪，可以做一些JS也能做的事情</p>
                        <p class="ellipsis-text m-line ml-ellipsis">层叠样式表(CSS)是一种用来表现HTML(标准通用标记语言的一个应用)或XML(标准通用标记语言的一个子集)等文件样式的计算机语言。CSS不仅可以静态地修饰网页，还可以配合各种脚本语言动态地对网页各元素进行格式化。</p>
                        <p class="ellipsis-text m-line mls-ellipsis">层叠样式表(CSS)是一种用来表现HTML(标准通用标记语言的一个应用)或XML(标准通用标记语言的一个子集)等文件样式的计算机语言。CSS不仅可以静态地修饰网页，还可以配合各种脚本语言动态地对网页各元素进行格式化。</p>
                    </div>
                    <code>
                        <pre>
                            代码
                            试试
                        </pre>
                    </code>
                </el-card>
                <el-button v-debounce="debounceClick">防抖指令</el-button>
                <el-button v-permission="'1'">权限指令1</el-button>
                <el-button v-permission="'10'">权限10</el-button>
                <el-button v-copy="content">复制指令</el-button>
                <el-button v-draggable>拖拽指令</el-button>
            </div>
        </panel-item>
        <panel-item name="nav2" label="导航二">
            <div style="height: 400px;"></div>
        </panel-item>
        <panel-item name="nav3" label="导航三">
            <div style="height: 400px;"></div>
        </panel-item>
        <template slot="action">
            <el-button type="primary">保存</el-button>
            <el-button type="success">提交</el-button>
            <el-button>返回</el-button>
        </template>
    </scroll-panel>
</main-panel>
</template>

<script>
import ListPage from '@/components/ListPage'
import SearchForm from '@/components/SearchForm'
import MyTable from '@/components/MyTable'
import ScrollPanel from '@/components/ScrollPanel'
import PanelItem from '@/components/ScrollPanel/PanelItem.vue'
import MainPanel from '@/components/MainPanel'
import { debounce } from "../utils/common";
export default {
    components: {
        ListPage,
        SearchForm,
        MyTable,
        ScrollPanel,
        PanelItem,
        MainPanel
    },
    data() {
        return {
            content: "",
        }
    },
    mounted(){
        this.content = document.querySelector('.content').innerHTML
        // window.addEventListener('mousemove', debounce(()=>this.mouseStyle($emit)),50)
    },
    methods: {
        debounceClick(){
            this.$message("开始发送请求")
            setTimeout(()=>{
                this.$message.success("发送请求成功")
            },500)
        },
        mouseStyle(event) {
            console.log(event)
            let timer = null;
            clearTimeout(timer)
            let page = document.getElementsByTagName('html');
            page[0].style.cursor = 'default';
            // console.log(event.pageX,event.pageY)
            timer=setTimeout(()=>{
                page[0].style.cursor = 'none'
            },3000)
        }
    }
}
</script>

<style lang="scss" scoped>
.page{
    background: var(--theme-bg);
    color: var(--theme-color);
    width: 100%;
    height: 100vh;
    // overflow: hidden;
}
.sb{
    width: 100px;
    height: 100px;
    background: #ddd;
    // cursor: alias;
    // cursor: all-scroll;
    // cursor: auto;
    // cursor: cell;
    // cursor: col-resize;
    // cursor: context-menu;
    // cursor: copy;
    // cursor: crosshair;
    // cursor: default;
    // cursor: e-resize;
    // cursor: ew-resize;
    // cursor: grab;
    // cursor: none;
}
.box-card{
    display: inline-block;
    vertical-align: bottom;
    width: auto;
    .header{
        display: flex;
        justify-content: space-between;
        i{
            cursor: pointer;
            margin-left: 10px;
            font-size: 16px;
        }
    }
}

.ellipsis-text {
	line-height: 30px;
	font-size: 20px;
	&.s-line {
		width: 400px;
	}
	&.m-line {
		margin-top: 10px;
		width: 400px;
		text-align: justify;
	}
	&.sl-ellipsis {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	&.ml-ellipsis {
		display: -webkit-box;
		overflow: hidden;
		text-overflow: ellipsis;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
	}
	&.mls-ellipsis {
		overflow: hidden;
		position: relative;
		max-height: 90px;
		&::after {
			position: absolute;
			right: 0;
			bottom: 0;
			padding-left: 40px;
			background: linear-gradient(to right, transparent, #fff 50%);
			content: "...";
		}
	}
}
</style>
