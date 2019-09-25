<template>
  <div id="app">
    <m-header @showSidebar="show"></m-header>
    <sidebar ref="sidebar"></sidebar>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<style lang="stylus">

</style>
<script>
  import MHeader from './components/m-header/m-header.vue'
  import Sidebar from './components/sidebar/sidebar'

  export default {
    methods: {
      show () {
        this.$refs.sidebar.open()
      }
    },
    components: { Sidebar, MHeader }
  }
</script>
