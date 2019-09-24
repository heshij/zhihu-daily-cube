<template>
  <div id="app">
    <m-header></m-header>
    <sidebar></sidebar>
  </div>
</template>
<style lang="stylus">

</style>
<script>
  import MHeader from './components/m-header/m-header.vue'
  import Sidebar from './components/sidebar/sidebar'

  export default {
    components: { Sidebar, MHeader }
  }
</script>
