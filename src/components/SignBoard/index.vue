<template>
    <div class="sign_board" v-resize="handleResize">
        <div class="sign_box">
            <span class="tips" v-if="textShow">Please sign your full name</span>
            <canvas id="signBoard"></canvas>
        </div>
        <div class="action">
            <el-button @click="handelCancel">取消</el-button>
            <el-button type="primary" @click="handleSure">确定</el-button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'signBoard',
    data() {
        return {
            textShow: true,
            config: {
                width: 400, // 宽度
                height: 200, // 高度
                lineWidth: 5, // 线宽
                strokeStyle: 'red', // 线条颜色
                lineCap: 'round', // 设置线条两端圆角
                lineJoin: 'round', // 线条交汇处圆角
            },
            client: {
                offsetX: 0, // 偏移量
                offsetY: 0,
                endX: 0, // 坐标
                endY: 0
            },
            canvas: null,
            ctx: null,
            mobileStatus: '',
        }
    },
    mounted() {
        this.mobileStatus = (/Mobile|Android|iPhone/i.test(navigator.userAgent));
        this.config.width = document.querySelector('.sign_box').clientWidth - 40;
        this.config.height = document.querySelector('.sign_box').clientHeight - 40;
        this.$nextTick(() => {
            this.init();
            // 创建鼠标/手势按下监听器
            window.addEventListener(this.mobileStatus ? "touchstart" : "mousedown", this.reset)
            // 创建鼠标/手势 弹起/离开 监听器
            window.addEventListener(this.mobileStatus ? "touchend" : "mouseup", this.cloaseDraw)
        })
    },
    methods: {
        handleResize(){
            console.log("dom有变化")
            this.config.width = document.querySelector('.sign_box').clientWidth - 40
            this.config.height = document.querySelector('.sign_box').clientHeight - 40
        },
        init() {
            // 获取canvas 实例
            const canvas = document.querySelector('canvas')
            // 设置宽高
            canvas.width =  this.config.width
            canvas.height =  this.config.height
            // 设置一个边框
            canvas.style.border = '1px solid #000'
            // 创建上下文
            const ctx = canvas.getContext('2d')

            // 设置填充背景色
            ctx.fillStyle = 'transparent'
            // 绘制填充矩形
            ctx.fillRect(
                0, // x 轴起始绘制位置
                0, // y 轴起始绘制位置
                this.config.width, // 宽度
                this.config.height // 高度
            );

            this.canvas = canvas
            this.ctx = ctx
        },
        reset(event) {
            this.textShow = false
            // 获取偏移量及坐标
            const { offsetX, offsetY, pageX, pageY } = this.mobileStatus ? event.changedTouches[0] : event

            // 修改上次的偏移量及坐标
            this.client.offsetX = offsetX
            this.client.offsetY = offsetY
            this.client.endX = pageX - 240
            this.client.endY = pageY -100

            // 清除以上一次 beginPath 之后的所有路径，进行绘制
            this.ctx.beginPath()
            // 根据配置文件设置相应配置
            this.ctx.lineWidth = this.config.lineWidth
            this.ctx.strokeStyle = this.config.strokeStyle
            this.ctx.lineCap = this.config.lineCap
            this.ctx.lineJoin = this.config.lineJoin
            // 设置画线起始点位
            this.ctx.moveTo(this.client.endX, this.client.endY)
            // 监听 鼠标移动或手势移动
            window.addEventListener(this.mobileStatus ? "touchmove" : "mousemove", this.draw)
        },
        draw(event) {
            // 获取当前坐标点位
            const { pageX, pageY } = this.mobileStatus ? event.changedTouches[0] : event
            // 修改最后一次绘制的坐标点
            this.client.endX = pageX
            this.client.endY = pageY

            // 根据坐标点位移动添加线条
            this.ctx.lineTo(pageX - 240, pageY - 100)

            // 绘制
            this.ctx.stroke()
        },
        cloaseDraw() {
            // 结束绘制
            this.ctx.closePath()
            // 移除鼠标移动或手势移动监听器
            window.removeEventListener("mousemove", this.draw)
        },
        handelCancel() {
            // 清空当前画布上的所有绘制内容
            this.ctx.clearRect(0, 0, this.config.width, this.config.height)
            this.textShow = true;
        },
        handleSure() {
            // 将canvas上的内容转成blob流
            this.canvas.toBlob(blob => {
                // // 获取当前时间并转成字符串，用来当做文件名
                // const date = Date.now().toString()
                // // 创建一个 a 标签
                // const a = document.createElement('a')
                // // 设置 a 标签的下载文件名
                // a.download = `${date}.png`
                // // 设置 a 标签的跳转路径为 文件流地址
                // a.href = URL.createObjectURL(blob)
                // // 手动触发 a 标签的点击事件
                // a.click()
                // // 移除 a 标签
                // a.remove()
                this.$emit("update:visible",true)
                this.$emit("update:signUrl",URL.createObjectURL(blob))
                this.handelCancel()
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.sign_board {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;

    .sign_box {
        flex: 1;
        padding: 20px;
        min-height: 300px;
        position: relative;
        .tips{
            position: absolute;
            top: 40px;
            left: 40px;
            font-size: 32px;
            color: #999;
        }
    }

    .action {
        width: 100%;
        height: 50px;
        line-height: 50px;
        padding: 0 20px;
        text-align: right;
        border-top: 1px solid #ddd;
    }
}
</style>