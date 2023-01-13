<template>
	<div :style="mainStyle" :class="['main-panel-container', className, fixedHead ? 'fixedBox' : '']">
		<div class="header-section">
			<div class="query-wrap">
				<slot name="headerForm" />
			</div>
			<div class="action-wrap">
				<div class="left-action">
					<slot name="leftAction" />
				</div>
				<div class="right-action">
					<slot name="rightAction" />
				</div>
			</div>
		</div>
		<div :class="['contentStyle', fixedHead ? 'srcoll-box' : '']">
			<div class="content-wrap" :style="contentStyle">
				<div class="content-section">
					<slot />
				</div>
			</div>
			<div class="footer-section">
				<slot name="footer" />
			</div>
		</div>
	</div>
</template>

<script>

// 主视图容器
export default {
	name: "DefaultPanel",
	props: {
		// 是否自动填充
		fill: {
			type: Boolean,
			default: true
		},
		// 内边距
		padding: {
			type: Array,
			default: () => [0]
		},
		// 容器样式类名
		className: String,
		// 容器是否透明
		transparent: {
			type: Boolean,
			default: false
		},
		//表格的一个固定最大高度
		tableMaxHeight: {
			type: [String, Number],
			default: 0
		},
		//表单是否圆角
		inputRadios: {
			type: Boolean,
			default: true
		},
		//是否固定搜索区域
		fixedHead: {
			type: Boolean,
			default: false
		},
		//展示类型//1一屏，2非一屏
		type: {
			type: [String, Number],
			default: 1
		},
	},
	data() {
		return {
			containerHeight: 448,
			headerHeight: 0,
			contentHeight: 448,
			footerHeight: 0
		};
	},
	computed: {
		mainStyle() {
			const pd = this.normalizeStyle(this.padding);
			const styleObject = {
				height: `${this.containerHeight}px`,
				padding: `${pd[0]}px ${pd[1]}px ${pd[2]}px ${pd[3]}px`
			};
			if (this.transparent) {
				styleObject.background = "transparent";
				styleObject.border = "none";
			}
			return styleObject;
		},
		contentStyle() {
			const styleObject = {};
			if (this.tableMaxHeight && this.fill) {
				styleObject.maxHeight = this.tableMaxHeight
			}
			if (this.fill) {
				styleObject.height = `${this.contentHeight}px`;
			}
			return styleObject;
		},

	},
	methods: {
		// 布局
		layout() {
			let $container = window.document.querySelector(".main_content");
			let height = $container
				? $container.clientHeight
				: window.innerHeight - 20;
			this.containerHeight = height;
			if (this.type == 1) {//1一屏，2非一屏
				this.headerHeight = document.querySelector('.header-section').clientHeight
				height -= this.headerHeight;
				this.footerHeight = document.querySelector(".footer-section").clientHeight;
				height -= this.footerHeight;
				this.contentHeight = height
			} else {

				let table = document.querySelector('.el-table__body').clientHeight
				let tableHeader = document.querySelector('.el-table__header').clientHeight
				this.contentHeight = table + tableHeader + 10;
			}

		},
		normalizeStyle(st) {
			let val = st;
			if (st.length === 1) {
				val = [st[0], st[0], st[0], st[0]];
			} else if (st.length === 2) {
				val = [st[0], st[1], st[0], st[1]];
			} else if (st.length === 3) {
				val = [st[0], st[1], st[3], st[1]];
			} else {
				val = st.slice(0, 4);
			}
			return val;
		},
	},
	beforeMount() {
		window.addEventListener("resize", this.layout);
	},
	deactivated() {
		window.removeEventListener("resize", this.layout);
	},
	activated() {
		window.addEventListener("resize", this.layout);
	},
	mounted() {
		this.$nextTick(()=>{
		   this.fill &&this.layout();
		})
	},
	updated() {
		this.$nextTick(() => {
			this.fill && this.layout();
		})
	},
	beforeDestroy() {
		window.removeEventListener("resize", this.layout);
	},
};
</script>

<style scoped lang="scss">
$zhfc-border-color-base: rgba(0, 0, 0, 0.06);
.fixedBox {
	display: flex;
	flex-direction: column;
	overflow: hidden;
}

.srcoll-box {
	flex: 1;
	overflow-y: auto;
}

.main-panel-container {
	border: 1px solid $zhfc-border-color-base;
	box-sizing: border-box;
	background-color: #fff;
	border-radius: 4px;
	overflow-y: auto;
	display: flex;
	flex-direction: column;

	.header-section {
		padding-top: 30px;

		.query-wrap {
			position: relative;
			margin-bottom: 24px;

			// border-bottom: 1px solid rgba(0, 0, 0, 0.0784313725490196);
			&::before {
				position: absolute;
				content: ' ';
				width: calc(100% - 60px);
				height: 1px;
				bottom: 0px;
				margin-left: 30px;
				background-color: rgba(0, 0, 0, 0.0784313725490196);
			}

			.el-form-item {
				white-space: nowrap;
				margin-bottom: 24px;
			}

			.el-form-item__label {
				font-weight: normal;
				white-space: pre-wrap;
			}

			.zhfc-btn {
				position: absolute;
				right: 0;
				bottom: 0;
			}
		}

		.action-wrap {
			padding: 0 30px;
			margin-bottom: 16px;

			&::after {
				content: "";
				display: table;
				clear: both;
			}

			.left-action {
				float: left;
			}

			.right-action {
				float: right;
			}
		}
	}

	.contentStyle {
		flex: 1;
		overflow: auto;
		display: flex;
		flex-direction: column;

		.content-wrap {
			flex: 1 1 0%;
			overflow: auto;

		}
	}

	.content-section {
		height: 100%;
		padding: 0 5px;
	}

	.footer-section {
		padding: 5px 20px 5px 25px;
		text-align: right;
	}
}
</style>