<template>
  <div class="wrap">
    <transition name="fold">
      <div class="sidebar" v-show="showSidebar">
        <div class="sidebar-top">
          <div class="user">
            <div class="img_wrap">
              <img src="./luoxiaohei.png" alt="">
            </div>
            <div class="name">罗小黑</div>
          </div>
          <div class="ctrl">
            <ul>
              <li>
                <span class="icon-collect"></span>
                <router-link to="/">我的收藏</router-link>
              </li>
              <li>
                <span class="icon-download"></span>
                <b>离线下载</b>
              </li>
            </ul>
          </div>
        </div>
        <div class="list">
          <ul>
            <li @click="hide">
              <span class="icon-home"></span>
              <router-link to="/">首页</router-link>
            </li>
          </ul>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div class="mask" @click.stop.prevent="hide" v-show="showSidebar"></div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'sidebar',
    data () {
      return {
        showSidebar: false
      }
    },
    methods: {
      open () {
        this.showSidebar = true
      },
      hide () {
        this.showSidebar = false
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import "~@common/stylus/variable"
  .sidebar
    position fixed
    top 0
    left 0
    z-index 40
    width 300px
    height 100%
    background-color $color-background
    transform translate3d(0, 0, 0)
    &.fold-enter-active, &.fold-leave-active
      transition all .5s
    &.fold-enter, &.fold-leave-active
      transform translate3d(-100%, 0, 0)
    .sidebar-top
      background-color $color-theme
      .user
        display flex
        padding: 12px 16px;
        .img_wrap
          width 40px
          height 40px
          border-radius 50%
          margin-right 16px
          position relative
          overflow hidden
          img
            width 100%
            height 100%
            position absolute
            top 0
            left 0
            right 0
            bottom 0
            object-fit cover
            margin auto
        .name
          color $color-white
          font-size $font-size-large
          line-height 40px
      .ctrl
        padding 12px 16px
        ul
          display flex
          justify-content space-between
          font-size $font-size-medium-x
          color $color-white
          li
            padding: 12px 0;
            a
              color $color-white
            span
              margin-right 16px
    .list
      background-color $color-theme-d
      li
        font-size $font-size-large
        color $color-theme
        padding 16px
        a
          color $color-theme
          margin-left 18px
          font-size $font-size-medium-x
  .mask
    position fixed
    top 0
    left 0
    width 100%
    height 100%
    z-index 30
    background $color-background-back-s
    opacity 1
    &.fade-enter-active, &.fade-leave-active
      transitio all .5s
    &.fade-enter, &.fade-leave-active
      opacity 0
</style>
