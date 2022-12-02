<template>
<div class="vitae_content">
	<aside class="aside"></aside>
	<main class="main"></main>
</div>
</template>

<script>
export default {
	name: 'blog',
	data() {
		return {

		}
	},
	methods: {
		
	}
}
</script>

<style lang="scss" scoped>
.vitae_content{
	display: flex;
	// height: 500px;
	margin-top: 20px;
	// padding: 20px;
	// box-shadow: inset -4px -4px 5px #3e4247,inset 7px 7px 7px #1d1f23;
	color: #fff;
	.aside{
		width: 300px;
		min-height: 600px;
		box-shadow: inset -4px -4px 5px var(--theme-shadow1),inset 7px 7px 7px var(--theme-shadow2);
	}
	.main{
		flex: 1;
		margin-left: 20px;
		min-height: 600px;
		box-shadow: inset -4px -4px 5px var(--theme-shadow1),inset 7px 7px 7px var(--theme-shadow2);
	}
}
</style>