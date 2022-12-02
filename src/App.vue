<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(['theme'])
  },
  created() {
    document.documentElement.className = this.theme
  }
}
</script>

<style lang="scss">

</style>
