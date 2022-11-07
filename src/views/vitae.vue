<template>
<div class="vitae_content">
	<aside class="aside">
		<div class="person_info">
			Tel：13511112222 <br>
			Email：123456789@163.com
		</div>
		<div class="article">
			<ul>
				<li>文章1</li>
				<li>文章2</li>
				<li>文章3</li>
			</ul>
		</div>
	</aside>
	<main class="main"></main>
</div>
</template>

<script>
export default {
	name: 'vitae',
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
	margin-top: 20px;
	color: #fff;
	align-items: flex-start;
	.aside{
		width: 300px;
		// min-height: 600px;
		.person_info{
			box-shadow: inset -4px -4px 5px #3e4247,inset 7px 7px 7px #1d1f23;
			padding: 20px;
		}
		.article{
			margin-top: 20px;
			box-shadow: inset -4px -4px 5px #3e4247,inset 7px 7px 7px #1d1f23;
			padding: 20px;
		}	
	}
	.main{
		flex: 1;
		margin-left: 20px;
		min-height: 600px;
		box-shadow: inset -4px -4px 5px #3e4247,inset 7px 7px 7px #1d1f23;
	}
}
</style>