<template>
<div>{{currentTime}}</div>
</template>

<script>
export default {
    data() {
        return {
            currentTime: ''
        }
    },
    mounted() {
        setInterval(()=>{
            this.initTime()
        },1000)
    },
    methods: {
        initTime() {
            let dateV = new Date()
            let year = dateV.getFullYear();
            let mounth = dateV.getMonth() + 1;
            let day = dateV.getDate();
            let h = dateV.getHours();
            let m = dateV.getMinutes();
            let s = dateV.getSeconds();
            let w = dateV.getDay();
            let arr = new Array("星期日","星期一","星期二","星期三","星期四","星期五","星期六")
            let week = arr[w]
            
            this.currentTime = year + '年' + mounth + '月' + (day<10?('0'+day):day) + '日' + " " + (h<10?("0"+h):h) + ":" + (m<10?('0'+m):m) + ":" + (s<10?('0'+s):s) + " " + week;
        },
    }
}
</script>

<style>

</style>