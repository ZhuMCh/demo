<template>
<div class="err_container">
    <div class=err_wrapper>
        <div class="err_text">404</div>
        <div class="err_tips">Error Page !</div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.err_container{
    display: flex;
    width: 100%;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
    background: #292d32;
    .err_wrapper{
        width: 900px;
        height: 400px;
        box-shadow: -4px -4px 5px #3e4247,7px 7px 7px #1d1f23;
        .err_text{
            margin-top: 100px;
            text-align: center;
            font-size: 50px;
            color: rgba($color: #fff, $alpha: .6);
            text-shadow: 0 -2px 5px rgba($color: #fff, $alpha: .6);
        }
        .err_tips{
            margin-top: 30px;
            text-align: center;
            color: #fff;
        }
    }
}

</style>