<template>
<div class="bg">
    <!-- <div class="glass"></div> -->
    <!-- <div class="rain"></div> -->
    <canvas id="canvas"></canvas>
</div>
</template>

<script>

export default {
    mounted() {
        var c=document.getElementById("canvas");
        c.width = window.innerWidth;
        c.height = window.innerHeight;
        var ctx=c.getContext("2d");
        var num = 50;

        let timer=setInterval(()=>{
            num++;
            console.log(num);
            if(num<(c.height-100)){
                ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
                ctx.save()
                // ctx.fillRect(num, 0, 100, 100);
                // console.log("内部",num)
                ctx.beginPath();
                ctx.fillStyle= "#fff";
                ctx.arc(500, num, 50, 0, Math.PI * 2);
                ctx.fill();
            }else{
                clearInterval(timer)
            }
        })
        
    },
    methods: {
        rand(min, max) {
            return Math.random() * (max - min) + min
        }
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