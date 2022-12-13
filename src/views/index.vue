<template>
<div class="mainbg">
	<div class="dashboard" ref="mainRef">
		<div class="header">
			<div class="header_title">
				<dv-decoration-1 style="display:inline-block;width:200px;height:50px;margin-top: 10px;" />
				<span class="title_name">大数据可视化平台<b>DaShuJuKeShiHuaPingTai</b></span>
			</div>
			<div class="nav_bar">
				<ul>
					<li class="nav_item" v-for="item in routers" :key="item.path"><router-link :to="item.path">{{item.title}}</router-link></li>
				</ul>
			</div>
			<div class="header_info">
				<clock />
			</div>
		</div>
		<div class="main_content">
			<div class="left_content">
				<dv-border-box-10 class="chart_item">
					<div class="chart_content">
						<dv-charts class="chart" :option="option" style="width:50%;" />
						<dv-charts class="chart" :option="option" style="width:50%;" />
					</div>
				</dv-border-box-10>
				<dv-border-box-10 class="chart_item">
					<div class="chart_content">
						<dv-charts class="chart" :option="option1" />
					</div>
				</dv-border-box-10>
				<dv-border-box-10 class="chart_item">
					<div class="chart_content">
						<dv-scroll-board :config="config" style="width:100%;height:280px" />
					</div>
				</dv-border-box-10>
			</div>
			<div class="right_content">
				<dv-border-box-12  class="map_wrap">
					<allMap />
				</dv-border-box-12>
				<dv-border-box-10  class="bottom_wrap">
					<my-chart></my-chart>
				</dv-border-box-10>
			</div>
		</div>
	</div>
</div>
</template>
    
<script>
import resize from "@/mixins/resize";
import allMap from "@/components/echartMap/allMap"
import myChart from "@/components/echart"
import clock from "@/components/timeClock"
export default {
  	mixins: [resize],
	components: {
		allMap,
		myChart,
		clock
	},
	data() {
		return {
			routers: [
				{title: '我的', path: '/my'},
				{title: '案例', path: '/demo'},
				{title: '组件', path: '/components'}
			],
			option: {
				title: {
					text: '剩余油量表',
					style: {
						fill: '#fff'
					}
				},
				series: [
					{
						type: 'gauge',
						data: [ { name: 'itemA', value: 55 } ],
						center: ['50%', '55%'],
						axisLabel: {
							formatter: '{value}%',
							style: {
							fill: '#fff'
							}
						},
						axisTick: {
							style: {
							stroke: '#fff'
							}
						},
						animationCurve: 'easeInOutBack'
					}
				]
			},
			option1: {
				title: {
					text: '周销售额趋势',
					style: {
						fill: '#fff'
					}
				},
				legend: {
					textStyle: {
						fill: '#fff'
					},
					data: [
						{
							name: '销售额',
							color: '#aeeff0'
						},
						{
							name: '人流量',
							color: '#f1829f'
						}
					]
				},
				xAxis: {
					axisLabel: {
						style: {
							fill: '#fff',
						}
					},
					data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
				},
				yAxis: [
					{
						name: '销售额',
						data: 'value',
						axisLabel: {
							style: {
								fill: '#fff',
							}
						},
						nameTextStyle: {
							fill: '#fff'
						}
					},
					{
						name: '人流量',
						data: 'value',
						position: 'right',
						max: 2000,
						splitLine: {
							show: false
						},
						axisLabel: {
							style: {
								fill: '#fff',
							}
						},
						nameTextStyle: {
							fill: '#fff'
						}
					}
				],
				series: [
					{
						name: '人流量',
						data: [1000, 1200, 900, 1500, 900, 1200, 1000],
						type: 'line',
						smooth: true,
						lineArea: {
							show: true,
							gradient: ['rgba(251, 114, 147, 1)', 'rgba(251, 114, 147, 0)']
						},
						lineStyle: {
							stroke: 'rgba(251, 114, 147, 1)',
							lineDash: [3, 3]
						},
						linePoint: {
							style: {
								stroke: 'rgba(251, 114, 147, 1)'
							}
						},
						yAxisIndex: 1
					},
					{
						name: '销售额',
						data: [1500, 1700, 1400, 2000, 1400, 1700, 1500],
						type: 'bar',
						gradient: {
							color: ['rgba(103, 224, 227, .6)', 'rgba(103, 224, 227, .1)']
						},
						barStyle: {
							stroke: 'rgba(103, 224, 227, 1)'
						}
					}
				]
			},
			config:{
				header: ['列1', '列2', '列3'],
				data: [
					['行1列1', '行1列2', '行1列3'],
					['行2列1', '行2列2', '行2列3'],
					['行3列1', '行3列2', '行3列3'],
					['行4列1', '行4列2', '行4列3'],
					['行5列1', '行5列2', '行5列3'],
					['行6列1', '行6列2', '行6列3'],
					['行7列1', '行7列2', '行7列3'],
					['行8列1', '行8列2', '行8列3'],
					['行9列1', '行9列2', '行9列3'],
					['行10列1', '行10列2', '行10列3']
				],
				index: true,
				columnWidth: [50],
				align: ['center']
			}
		}
	}
};
</script>
    
<style lang="scss" scoped>
.mainbg{
	width: 100%;
	min-height: 100vh;
	overflow: hidden;
	background: url('@/assets/images/screenBg.png') no-repeat center;
	background-size: cover;
}
.dashboard {
	position: absolute;
	width: 1920px;
	height: 1080px;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	transform-origin: left top;
	overflow: hidden;
}
.header{
	display: flex;
	justify-content: space-between;
	width: 100%;
	height: 90px;
	background: url('@/assets/images/biaoti.png') no-repeat center;
	background-size: 100% 100%;
	.header_title{
		.title_name{
			display: inline-block;
			font-size: 32px;
			color: #fff;
			font-weight: bold;
			letter-spacing: 10px;
			b{
				display: block;
				font-size: 16px;
				letter-spacing: 5px;
			}
		}
	}
	.header_info{
		padding-right: 20px;
		font-size: 20px;
		color: #fff;
		font-weight: bold;
		margin-top: 10px;
		line-height: 60px;
	}
	.nav_bar{
		.nav_item{
			display: inline-block;
			line-height: 90px;
			a{
				text-decoration: none;
				color: #f1f1f1;
				padding: 10px 20px;
				font-size: 16px;
			}
		}
	}
}
.main_content{
	display: flex;
	.left_content{
		width: 550px;
		.chart_item{	
			height: 310px;
			margin-bottom: 20px;
			// padding: 15px;
			.chart_content{
				display: flex;
				height: 100%;
				color: #fff;
				padding: 15px;
			}
		}
	}
	.right_content{
		flex: 1;
		margin-left: 20px;
		.map_wrap{
			height: 640px;
		}
		.bottom_wrap{
			height: 310px;
			margin-top: 20px;
		}
	}
}
</style>