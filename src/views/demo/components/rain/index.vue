<template>
<div class="bg">
    <!-- <div class="glass"></div> -->
    <!-- <div class="rain"></div> -->
    <canvas id="canvas"></canvas>
</div>
</template>

<script>

export default {
    data() {
        return {
            rainArr: []
        }
    },
    mounted() {
        var c=document.getElementById("canvas");
        c.width = window.innerWidth;
        c.height = window.innerHeight;
        var ctx=c.getContext("2d");

        // setInterval(()=>{
        //     this.rain()
        // },100)
        // setInterval(()=>{
        //     this.rainArr.forEach(item=>{
        //         this.drow(ctx,item.y,item.xr,item.yr,item.speed)
        //     })
        // },300)


        // var num = 50;
        // let timer=setInterval(()=>{
        //     num++;
        //     console.log(num);
        //     if(num<(c.height-100)){
        //         ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
        //         ctx.save()
        //         ctx.beginPath();
        //         ctx.fillStyle= "#fff";
        //         ctx.ellipse(500,num,10,16,0,0,Math.PI * 2)
        //         ctx.fill();
        //     }else{
        //         clearInterval(timer)
        //     }
        // })
        
    },
    methods: {
        rand(min, max) {
            return Math.random() * (max - min) + min
        },
        rain(y){
           var rain = {
                speed: this.rand(3,6),
                x: this.rand(0,window.innerWidth),
                y: y||0,
                xr: this.rand(5,10),
                yr: this.rand(12,16),
           }
           this.rainArr.push(rain)
        },
        drow(ctx,y,xr,yr,speed) {
            setInterval(()=>{
                y+=speed
                ctx.save();
                ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
                ctx.beginPath();
                ctx.fillStyle= "#fff";
                ctx.ellipse(this.rand(10,window.innerWidth-10),y,xr,yr,0,0,Math.PI * 2)
                ctx.fill();
            },500)
            
        },
    }
}
</script>

<style>
.bg{
    /* position: relative; */
    height: 100%;
    width: 100%;
    /* background: url('@/assets/th.jpg') no-repeat 100%; */
    background: #0b0f34;
}
.glass{
    position: absolute;
    width: 100%;
    height: 100%;
    background: url('@/assets/th.jpg') no-repeat 100%;
    clip-path: inset(0 0);
    filter: blur(10px);
}
.rain{
  width: 30px;
  height: 30px;
  /* background: linear-gradient(90deg, rgba(207,238,230,1) 0%, rgba(144,229,236,1) 100%, rgba(0,212,255,1) 100%); */
  background: url('@/assets/th.jpg') no-repeat center;
  background-size: contain;
  border-radius: 90% 10% 60% 40% / 60% 10% 90% 40%;
  filter: blur(1px);
  /* border-radius: 100%; */
  transform: rotate(-45deg);
  position: absolute;
  top: 400px;
  left: 50%;
}
#canvas{
    /* position: absolute; */
    display: block;
}
</style>