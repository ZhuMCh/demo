<template>
<list-page>
<div class="flex-wrap">
	<div class="flex-item">
		<div class="dire-box">
			<div class="dire-title" style="cursor: pointer;" v-copy="copyData" title="点击复制">复制指令 v-copy</div>
			<div class="dire-content">
				<span>{{ copyData }}</span>
				<div class="show">
					<el-input type="textarea" :rows="3" placeholder="到此处粘贴" v-model="text"></el-input>
				</div>
			</div>
		</div>
	</div>
	<div class="flex-item">
		<div class="dire-box">
			<div class="dire-title" title="">权限指令 v-permission</div>
			<div class="dire-content">
				<el-input v-model="code" placeholder="请输入1,2,3,..."></el-input>
				<div class="show" :key="code">
					<el-button type="primary" v-permission="'1'">权限1</el-button>
					<el-button type="success" v-permission="'2'">权限2</el-button>
					<el-button type="danger"  v-permission="'3'">权限3</el-button>
					<el-button type="warning" v-permission="'4'">权限4</el-button>
				</div>
			</div>
		</div>
	</div>
	<div class="flex-item">
		<div class="dire-box">
			<div class="dire-title">水印指令 v-waterMarker</div>
			<div class="dire-content" v-waterMarker="{text:'水印',textColor:'#ddd'}">

			</div>
		</div>
	</div>
	<div class="flex-item" @click="setHeight">
		<div class="dire-box">
			<div class="dire-title">自适应大小指令 v-resize</div>
			<div class="dire-content" :style="{'height': autoHeight}" v-resize="handleResize">
				容器高度：{{ autoHeight }} ==== resize变化次数：{{ resizeNum }} 次
			</div>
		</div>
	</div>
	<div class="flex-item" style="cursor: move;" v-draggable>
		<div class="dire-box">
			<div class="dire-title">拖拽指令 v-draggable</div>
			<div class="dire-content">
				
			</div>
		</div>
	</div>
</div>
</list-page>
</template>

<script>
export default {
	data() {
		return {
			copyData: "层叠样式表(CSS)是一种用来表现HTML(标准通用标记语言的一个应用)或XML(标准通用标记语言的一个子集)等文件样式的计算机语言。CSS不仅可以静态地修饰网页，还可以配合各种脚本语言动态地对网页各元素进行格式化。",
			text: '',
			code: '',
			autoHeight: '100px',
			resizeNum: 0
		}
	},
	watch: {
		code:function(){
			let arr = this.code.split(',')
			this.$store.dispatch("handlePermission",arr);
		}
	},
	methods: {
		setHeight(){
			let h = this.autoHeight.replace('px','');
			this.autoHeight = Number(h) + 2 +'px';
			console.log(this.autoHeight)
		},
		handleResize(){
			this.resizeNum ++;
		}
	}
}
</script>

<style lang="scss" scoped>
.dire-box {
	box-shadow: 0 0 10px 2px #ddd;
	width: 400px;
	// height: 400px;

	.dire-title {
		border-bottom: 1px solid rgba($color: #000000, $alpha: .08);
		line-height: 40px;
		padding: 0 20px;
	}

	.dire-content {
		padding: 15px;
		min-height: 100px;
		user-select: none;
	}
	.show{
		margin-top: 20px;
		text-align: center;
	}
}
.flex-wrap{
	display: flex;
	flex-wrap: wrap;
	.flex-item{
		padding: 20px;
	}
}
</style>