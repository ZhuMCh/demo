<template>
<div class="vitae_content">
	<aside class="aside">
		<div class="person_info">
			<p>I'm web developer working in fullstack application. I choose this firm b'coz I love it. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
			<dl class="base_info">
				<dt>Tel：</dt>
				<dd>13511112222</dd>
				<dt>Email：</dt>
				<dd>13511112222@163.com</dd>
				<dt>Birthday：</dt>
				<dd>1993-09-20</dd>
				<dt>Education：</dt>
				<dd>Undergraduate</dd>
				<dt>Years of Working：</dt>
				<dd>Four Years</dd>
			</dl>
			
		</div>
		<div class="article">
			<ul>
				<li>Culpa sint aliqua adipisicing officia aliquip excepteur occaecat dolor velit culpa ullamco.</li>
				<li>Minim fugiat labore est enim consectetur anim commodo irure reprehenderit est.</li>
				<li>Officia consectetur consectetur adipisicing consectetur commodo enim tempor nulla reprehenderit occaecat</li>
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
		width: 500px;
		// min-height: 600px;
		.person_info{
			box-shadow: inset -4px -4px 5px #3e4247,inset 7px 7px 7px #1d1f23;
			padding: 20px;
			.base_info{
				// margin-top: 20px;
				dt{
					margin-top: 15px;
					font-size: 16px;
				}
				dd{
					font-size: 14px;
					color: rgba($color: #fff, $alpha: .7);
				}
			}
		}
		.article{
			margin-top: 20px;
			box-shadow: inset -4px -4px 5px #3e4247,inset 7px 7px 7px #1d1f23;
			padding: 20px;
			li{
				margin-top: 10px;
				text-overflow: ellipsis;
				white-space: nowrap;
				overflow: hidden;
				text-decoration: underline;
				cursor: pointer;
			}
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