<template>
	<div :style="mainStyle" :class="['main-panel-container', className]">
		<slot name="header" />

		<div class="contentStyle">
			<div class="content-wrap" :style="contentStyle">
				<slot />
			</div>
		</div>

		<slot name="footer" />
	</div>
</template>

<script>
// 主视图容器
export default {
	name: "MainPanel",
	props: {
		// 是否自动填充
		fill: {
			type: Boolean,
			default: true,
		},
		// 内边距
		padding: {
			type: Array,
			default: () => [0],
		},
		// 容器样式类名
		className: String,
		// 容器是否透明
		transparent: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			containerHeight: 448,
			headerHeight: 0,
			contentHeight: 448,
			footerHeight: 0,
		};
	},
	computed: {
		mainStyle() {
			const pd = this.normalizeStyle(this.padding);
			const styleObject = {
				height: `${this.containerHeight}px`,
				padding: `${pd[0]}px ${pd[1]}px ${pd[2]}px ${pd[3]}px`,
			};
			if (this.transparent) {
				styleObject.background = "transparent";
				styleObject.border = "none";
			}
			return styleObject;
		},
		contentStyle() {
			const styleObject = {};
			if (this.fill) {
				styleObject.height = `${this.contentHeight}px`;
			}
			return styleObject;
		},
	},
	beforeMount() {
		window.addEventListener("resize", this.layout);
	},
	activated() {
		window.addEventListener("resize", this.layout);
	},
	deactivated() {
		window.removeEventListener("resize", this.layout);
	},
	mounted() {
		this.fill && this.layout();
	},
	beforeDestroy() {
		window.removeEventListener("resize", this.layout);
	},
	methods: {
		// 获取slot高度
		getSlotHeight(name) {
			let height = 0;
			if (this.$slots[name] && this.$slots[name].length) {
				height = this.$slots[name][0].elm.clientHeight;
			}
			return height;
		},
		// 布局
		layout() {
			let $container = window.document.querySelector(".main_content");
			let height = $container ? $container.clientHeight : window.innerHeight;
			this.containerHeight = height;

			this.headerHeight = this.getSlotHeight("header");
			height -= this.headerHeight;

			this.footerHeight = this.getSlotHeight("footer");
			height -= this.footerHeight;

			this.contentHeight = height;
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
	}
};
</script>
<style lang="scss" scoped>
$zhfc-border-color-base: rgba(0, 0, 0, 0.06);

.main-panel-container {
	border: 1px solid $zhfc-border-color-base;
	box-sizing: border-box;
	background-color: #fff;
	border-radius: 4px;
	overflow-y: auto;
	display: flex;
	flex-direction: column;

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
	}

	.footer-section {
		padding: 5px 20px 5px 25px;
		text-align: right;
	}
}
</style>
