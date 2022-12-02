<template>
<div class="page">
    <el-card class="box-card">
        <div slot="header" class="header">
            <span>使用text-overflow控制溢出文本</span>
            <span>
                <i class="el-icon-c-scale-to-original"></i>
                <i class="el-icon-full-screen"></i>
            </span>
        </div>
        <div>
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
</div>
</template>

<script>
import ListPage from '@/components/listPage'
import SearchForm from '@/components/SearchForm'
import MyTable from '@/components/MyTable'
export default {
    components: {
        ListPage,
        SearchForm,
        MyTable
    },
    data() {
        return {

        }
    },
    methods: {
        
    }
}
</script>

<style lang="scss" scoped>
.page{
    background: var(--theme-bg);
    color: var(--theme-color);
}
.box-card{
    display: inline-block;
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
