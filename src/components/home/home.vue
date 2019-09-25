<template>
  <div class="home">
    <div class="slide-container-v">
      <cube-slide ref="slide" :data="sliders">
        <cube-slide-item v-for="(item, index) in sliders" :key="index" @click.native="clickHandler(item, index)">
          <a :href="item.url">
            <img :src="item.image">
            <b class="mark"></b>
            <span>{{item.title}}</span>
          </a>
        </cube-slide-item>
      </cube-slide>
    </div>
  </div>
</template>

<script>
  import api from '../../api/index'
  import { changeImageUrl } from '../../common/js/util'

  export default {
    name: 'home',
    data () {
      return {
        sliders: []
      }
    },
    created () {
      setTimeout(() => {
        this._getSlider()
      }, 20)
    },
    mounted () {
    },
    methods: {
      _getSlider () {
        api.getSlider().then((res) => {
          // console.log(res.data.top_stories)
          this.sliders = this.initImage(res.data.top_stories)
          console.log(this.sliders)
        })
      },
      initImage (data) {
        data.map((item) => {
          item.image = changeImageUrl(item.image)
        })
        return data
      }
    }
  }
</script>

<style lang="stylus">
  @import "~@/common/stylus/variable.styl"
  .home
    padding-top 40px
  .slide-container-v
    height 260px
    transform translateZ(0px)
    overflow hidden
    img
      width 100%;
      height: auto!important;
      margin-top -16%
    .cube-slide-item
      position relative
      span
        display block
        padding: 30px 16px;
        line-height: 30px
        position absolute
        top 50%
        left 0
        z-index 40
        color $color-white
        font-size $font-size-large
        overflow hidden
        white-space normal
      b
        position absolute
        top 0
        left 0
        width 100%
        height 100%
        z-index 30
        background $color-background-back-s
        opacity .6
    .cube-slide-dots
      bottom 8px
      & span
        width 8px
        height 8px
        border-radius 50%
        margin 0 2px
        background-color: #8c8e8b
        &.active
          background-color: $color-white
</style>
