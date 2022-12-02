<template>
<div id="myEchart"></div>
</template>

<script>
import * as echarts from 'echarts';
export default {
    props: {},
    data() {
        return {}
    },
    mounted() {
        this.initChart()
    },
    methods: {
       initChart(type,data) {
            let myChart = echarts.init(document.getElementById('myEchart'));
            let options = {
                tooltip: {},
                legend:{
                    bottom:20,
                    left:80,
                    icon:'roundRect',
                    textStyle:{ color:'#9499A9'},
                },
                xAxis: {
                    type: 'category',
                    axisTick: {show: false},
                    axisLine: {
                        show:false,
                        lineStyle: {
                            color: '#9499A9'
                        }
                    },
                    data: ['11:00', '11:30', '12:00', '12:30', '13:00', '13:30','14:00','14:30','15:00','15:30','16:00','16:30','17:00','17:30','18:00','18:30']
                },
                yAxis: {
                    type: 'value',
                    axisTick: {show: false},
                    splitLine: {
                        lineStyle: { color: '#40465B' }
                    },
                    axisLine: {
                        show:false,
                        lineStyle: {
                            color: '#9499A9'
                        }
                    },
                    min: 20,
                    max: 80,
                    interval:10,
                    position: 'left',
                    axisLabel: {
                        formatter: '{value} %'
                    }
                },
                series: [{
                    name: 'XXcpu使用率',
                    type: 'line',
                    smooth:true,
                    data: [20, 50, 35, 60, 67, 60,48,45,40,45,50,65,80,30,50,20],
                    itemStyle: {  
                        normal: { //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1,[{
                                    offset: 0, color: 'rgba(68,161,238,0.32)' // 0% 处的颜色
                                },  {
                                    offset: 1, color: 'rgba(68,161,238,0)' // 100% 处的颜色
                                }]
                            ),   
                            lineStyle: {
                                width: 3,  
                                type: 'solid',  
                                color: "#52BDFC" 
                            }  
                        }
                    },
                    areaStyle: {normal: {}},
                }]
            };
            myChart.setOption(options)
        } 
    }
}
</script>

<style>
#myEchart{
    height: 100%;
}
</style>