<template>
  <div id="app">
    <!--<sidebar ref="sidebar"></sidebar>-->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<style lang="stylus">

</style>
<script>
  // import Sidebar from './components/sidebar/sidebar'
  export default {
    methods: {
    },
    components: {
      // Sidebar,
    }
  }
</script>
