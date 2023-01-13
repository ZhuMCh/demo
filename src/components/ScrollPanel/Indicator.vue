<template>
<div class="panel-indicator-container">
	<div :class="['indicator-item',item.selected?'select':'']" v-for="item in items" :key="item.name" @click.stop="scrollIntoView(item)">
		<div class="line"></div>
		<div class="circle"></div>
		<div class="title">{{item.label}}</div>
	</div>
</div>
</template>

<script>
// 滚动容器位置指示器
export default {
	name: "Indicator",
	inject: ["scrollPanel"],
	data() {
		return { }
	},
	computed: {
		items() {
			return this.scrollPanel.panelItems;
		},
	},
	methods: {
		// 滚动面板到视图
		scrollIntoView(item) {
			this.scrollPanel.scrollIntoView(item.name, item.$parent.name);
		},
	}
};
</script>

<style lang="scss" scoped>
.indicator-item{
	position: relative;
	padding-bottom: 20px;
	padding-left: 25px;
	cursor: pointer;

	.circle{
		position: absolute;
		top: 4px;
		left: 0;
		width: 18px;
		height: 18px;
		border: 2px solid #b8b9be;
		border-radius: 50%;
		background: #fff;
	}
	
	.line{
		position: absolute;
		top: 4px;
		left: 8px;
		width: 2px;
		height: 100%;
		background: #b8b9be;
	}

	.title{
		color: #666;
		padding: 2px 5px;
	}

	&:last-child{
		.line{
			display: none;
		}
	}

}
.select{
	&::after{
		content: "";
		position: absolute;
		top: 8px;
		left: 4px;
		width:  10px;
		height: 10px;
		border-radius: 50%;
		background: #409EFF;
	}
	.circle{
		border-color: #409EFF;
	}
	.title{
		background: #e2efff;
		color: #409EFF;
	}
}
</style>