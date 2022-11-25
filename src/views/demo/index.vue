<template>
<div class="demoPage">
    <!-- <Cloud /> -->
	<Rain />
</div>
</template>

<script>
import Cloud from './components/cloud'
import Rain from './components/rain'
export default {
    components: {
        Cloud,
		Rain
    },
    data() {
        return {

        }
    },
	mounted() {

	},
	methods: {
		
	}
}
</script>

<style lang="scss" scoped>
.demoPage{
	width: 100vw;
	height: 100vh;
}
</style>