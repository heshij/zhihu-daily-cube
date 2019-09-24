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
                <span>离线下载</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="list">
          <ul>
            <li>
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
        showSidebar: true
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
        padding 20px 16px
        ul
          display flex
          justify-content space-between
          font-size $font-size-medium-x
          color $color-white
          a
            color $color-white
</style>
