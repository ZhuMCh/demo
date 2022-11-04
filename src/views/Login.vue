<template>
  <div class="body">
    <img id="bck_img" src="@/assets/th.jpg" alt />
    <div class="raindrop_box">
      <div
        class="raindrop"
        v-for="(i,index) in 200"
        :key="index"
        :style="`top:${random(0,window_h)}px;left:${random(0,window_w)}px;`"
      >
        <img src="@/assets/th.jpg" alt />
      </div>
    </div>
    <svg style="width: 10px; height: 10px;">
      <defs>
        <filter id="shadowed-goo">
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
            result="goo"
          />
          <feGaussianBlur in="goo" stdDeviation="3" result="shadow" />
          <feColorMatrix
            in="shadow"
            mode="matrix"
            values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 -0.2"
            result="shadow"
          />
          <feOffset in="shadow" dx="1" dy="1" result="shadow" />
          <feBlend in2="shadow" in="goo" result="goo" />
          <feBlend in2="goo" in="SourceGraphic" result="mix" />
        </filter>
      </defs>
    </svg>
  </div>
</template>

<script>
import anime from "animejs/lib/anime.es.js";
export default {
  data() {
    return {
      window_w: window.innerWidth,
      window_h: window.innerHeight
    };
  },
  methods: {
    random(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }
  },
  mounted() {
    let _this = this;
    console.log(_this.window_h);
    let raindrops = document.querySelectorAll(".raindrop");
    anime({
      targets: ".raindrop",
      scale: function(el, i, l) {
        return anime.random(1, 5) * 0.1;
      },
      duration: 0,
      complete: function(params) {
        for (let i = 0; i < raindrops.length; i++) {
          anime({
            targets: raindrops[i],
            delay: i * -100,
            easing: "easeInOutExpo",
            translateY: _this.window_h,
            duration: 7000,
            loop: true
          });
        }
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.body {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  #bck_img {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    filter: blur(10px);
    transform: scale(1.1);
    z-index: -1;
  }
  .raindrop_box {
    filter: url("#shadowed-goo");
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    .raindrop {
      position: absolute;
      width: 30px;
      height: 40px;
      border-radius: 100%;
      overflow: hidden;
      filter: blur(1px);
      img {
        width: 100%;
        height: 100%;
        transform: scaleY(-1);
      }
    }
  }
}
</style>