<template>
<list-page>
    <component :is="currentComponent"></component>
</list-page>
</template>

<script>
import Cloud from './components/cloud'
import Rain from './components/rain'
import DataV from './components/datav'
export default {
    components: {
        Cloud,
		Rain,
        DataV
    },
    data() {
        return {
            currentComponent: 'DataV'
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