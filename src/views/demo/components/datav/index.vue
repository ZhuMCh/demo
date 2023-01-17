<template>
    <dv-full-screen-container class="bg">
        <div class="header">
            <dv-decoration-8 style="width:300px;height:50px;" />
            <div class="title">
                <span>数据可视化</span>
                <dv-decoration-5 style="width:500px;height:30px;" />
            </div>
            <dv-decoration-8 :reverse="true" style="width:300px;height:50px;" />
        </div>
        <div class="main">
            <div class="left">
                <dv-border-box-13 style="height:32%;">
                    <div class="flex">
                        <dv-charts :option="option" />
                        <dv-charts :option="option" />
                    </div>
                </dv-border-box-13>
                <dv-border-box-13 style="height:32%;margin-top: 2%;">
                    <div class="flex">
                        <dv-capsule-chart :config="capsuleData" style="width:300px;height:200px" />
                    </div>
                </dv-border-box-13>
                <dv-border-box-13 style="height:32%;margin-top: 2%;">
                    <div class="flex">
                        <dv-scroll-board :config="scrollBoardData" style="width:100%;height:100%" />
                    </div>
                </dv-border-box-13>
            </div>
            <div class="center">
                <dv-border-box-10>
                    <div class="flex">
                        <dv-flyline-chart :config="flylineData" style="width:100%;height:100%;" />
                    </div>
                </dv-border-box-10>
            </div>
            <div class="right">
                <dv-border-box-13 style="height:32%">
                    <div class="flex">
                        <dv-active-ring-chart :config="config" style="width:100%;height:100%" />
                        <dv-active-ring-chart :config="config" style="width:100%;height:100%" />
                    </div>
                </dv-border-box-13>
                <dv-border-box-13 style="height:32%;margin-top: 2%;">
                    <div class="flex">
                        <dv-scroll-ranking-board :config="scrollRankingBoardData" style="width:100%;height:100%" />
                    </div>
                </dv-border-box-13>
                <dv-border-box-13 style="height:32%;margin-top: 2%;">
                    <div class="flex" id="chart"></div>
                </dv-border-box-13>
            </div>
        </div>
    </dv-full-screen-container>
</template>

<script>
// import Charts from '@jiaminghi/charts'
export default {
    data() {
        return {
            flylineData: {
                centerPoint: [0.48, 0.35],
                points: [
                    {
                        position: [0.52, 0.235],
                        text: '新乡'
                    },
                    {
                        position: [0.43, 0.29],
                        text: '焦作'
                    },
                    {
                        position: [0.59, 0.35],
                        text: '开封'
                    },
                    {
                        position: [0.53, 0.47],
                        text: '许昌'
                    },
                    {
                        position: [0.45, 0.54],
                        text: '平顶山'
                    },
                    {
                        position: [0.36, 0.38],
                        text: '洛阳'
                    },
                    {
                        position: [0.62, 0.55],
                        text: '周口'
                    },
                    {
                        position: [0.56, 0.56],
                        text: '漯河'
                    },
                    {
                        position: [0.37, 0.66],
                        text: '南阳'
                    },
                    {
                        position: [0.55, 0.81],
                        text: '信阳'
                    },
                    {
                        position: [0.55, 0.67],
                        text: '驻马店'
                    },
                    {
                        position: [0.37, 0.29],
                        text: '济源'
                    },
                    {
                        position: [0.20, 0.36],
                        text: '三门峡'
                    },
                    {
                        position: [0.76, 0.41],
                        text: '商丘'
                    },
                    {
                        position: [0.59, 0.18],
                        text: '鹤壁'
                    },
                    {
                        position: [0.68, 0.17],
                        text: '濮阳'
                    },
                    {
                        position: [0.59, 0.10],
                        text: '安阳'
                    }
                ],
                k: 0.5,
                bgImgUrl: require('@/assets/datav/map.jpg'),
                centerPointImg: {
                    url: require('@/assets/datav/mapCenterPoint.png')
                },
                pointsImg: {
                    url: require('@/assets/datav/mapPoint.png')
                }
            },
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
                        data: [{ name: 'itemA', value: 55 }],
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
            config: {
                data: [
                    {
                        name: '武昌',
                        value: 55
                    },
                    {
                        name: '洪山',
                        value: 120
                    },
                    {
                        name: '汉阳',
                        value: 78
                    },
                    {
                        name: '蔡甸',
                        value: 66
                    },
                    {
                        name: '青山',
                        value: 80
                    }
                ],
                lineWidth: 10,
                digitalFlopStyle: {
                    fontSize: 18
                }
            },
            scrollBoardData: {
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
            },
            scrollRankingBoardData: {
                data: [
                    {
                        name: '周口',
                        value: 55
                    },
                    {
                        name: '南阳',
                        value: 120
                    },
                    {
                        name: '西峡',
                        value: 78
                    },
                    {
                        name: '驻马店',
                        value: 66
                    },
                    {
                        name: '新乡',
                        value: 80
                    },
                    {
                        name: '信阳',
                        value: 45
                    },
                    {
                        name: '漯河',
                        value: 29
                    }
                ]
            },
            capsuleData: {
                data: [
                    {
                        name: '南阳',
                        value: 167
                    },
                    {
                        name: '周口',
                        value: 123
                    },
                    {
                        name: '漯河',
                        value: 98
                    },
                    {
                        name: '郑州',
                        value: 75
                    },
                    {
                        name: '西峡',
                        value: 66
                    },
                ],
                colors: ['#e062ae', '#fb7293', '#e690d1', '#32c5e9', '#96bfff'],
                unit: '单位',
                showValue: true
            }
        }
    },
    mounted() {
        
    }
}
</script>

<style lang="scss" scoped>
.bg {
    // width: 100%;
    // height: 100vh;
    background: url('../../../../assets/images/screenBg.png') no-repeat center;
    background-size: cover;
}

.header {
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    // background: #264F78;
    .title {
        text-align: center;
        font-size: 32px;
        font-weight: bold;
        position: relative;

        span {
            position: absolute;
            bottom: 20px;
            left: 0;
            right: 0;
            color: #fff;
            letter-spacing: 5px;
        }
    }
}

.main {
    height: calc(100vh - 60px);
    padding: 20px;
    display: flex;
    justify-content: space-between;

    .left {
        width: 25%;
    }

    .center {
        flex: 1;
        margin: 0 20px;
    }

    .right {
        width: 25%;
    }
}

.flex {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 100%;
    width: 100%;
    padding: 20px;
}
</style>