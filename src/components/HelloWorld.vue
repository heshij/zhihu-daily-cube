<template>
  <div class="helloWorld">
    <cube-button type="submit" class="icon-back">{{tex}}</cube-button>
  </div>
</template>

<script>
  import api from '../api'
  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    },
    data () {
      return {
        tex: 'helloWorld'
      }
    },
    created () {
      this._getSlider()
    },
    methods: {
      _getSlider () {
        api.getSlider().then((res) => {
          console.log(res.data)
        })
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
