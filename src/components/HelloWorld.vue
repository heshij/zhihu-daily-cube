<template>
  <div class="helloWorld">
    <cube-button type="submit">{{tex}}</cube-button>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    },
    data () {
      return {
        tex: 'helloWorld'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  @import "~@/common/stylus/variable.styl"

  .helloWorld
    text-align center
    font-size $fontsize-medium
    color $color-blue-s
</style>
