<template>
  <div class="header">
    <div class="header-left">
      <span class="icon-menu"></span>
      <h2>{{title}}</h2>
    </div>
    <div class="header-right">
      <span class="icon-notice"></span>
      <span class="icon-more-2"></span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'm-header',
    props: {
      title: {
        type: String,
        default: '今日热闻'
      }
    },
    methods: {
      showSidebar () {
        this.$emit('showSidebar')
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import "~@common/stylus/mixin"
  @import "~@common/stylus/variable"
  .header
    position fixed
    top 0
    left 0
    width 100%
    height 40px
    z-index 10
    display flex
    justify-content space-between
    background-color $color-theme
    color $color-white
    font-size $font-size-large
    line-height 40px
    .header-left
      display flex
      font-size $font-size-medium-x
      span
        line-height 20px
        font-size $font-size-large-x
        display block
        padding: 10px;
    .header-right
      display flex
      span
        display block
        padding 0 10px
        line-height 40px
</style>
