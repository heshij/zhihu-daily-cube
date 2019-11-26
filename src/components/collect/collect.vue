<template>
  <div class="collect">
    <div class="header">
      <div class="header-left">
        <span class="icon-back" @click="black"></span>
        <h2>{{title}}</h2>
      </div>
      <div class="header-right">
        <span class="icon-notice"></span>
        <span class="icon-more-2"></span>
      </div>
    </div>
    <div class="scroll-wrapper">
      <cube-scroll
        ref="scroll"
        :data="isCollectNews">
        <div class="list" v-show="isCollectNews.length">
          <ul>
            <li class="new border-1px" v-for="item in isCollectNews" :key="item.id" @click="goNews(item)">
              <span class="title">{{item.title}}</span>
              <div class="img-wrap">
                <img v-lazy="attachImageUrl(item.images[0])" alt="" class="_img">
              </div>
            </li>
          </ul>
        </div>
      </cube-scroll>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'collect',
    data () {
      return {
        title: '收藏'
      }
    },
    computed: {
      ...mapGetters([
        'isCollectNews'
      ])
    },
    created () {
      console.log(this.isCollectNews)
    },
    methods: {
      goNews (story) {
        this.$router.push({
          path: `/news-detail/${story.id}`
        })
      },
      black () {
        this.$router.push({
          path: `/home`
        })
      },
      // 修改图片链接
      attachImageUrl (srcUrl) {
        if (srcUrl !== undefined) {
          return srcUrl.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p')
        }
      }
    },
    watch: {
      '$route.path' (newVal) {
        if (newVal === `/news-detail/${this.$route.params.id}`) {
        }
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import "~@/common/stylus/variable.styl"
  .collect
    padding-top: 40px;
    .scroll-wrapper
      height 620px
      // fix 子元素超出边框圆角部分不隐藏的问题
      transform: rotate(0deg);
  .header
    position fixed
    top 0
    left 0
    width 100%
    height 40px
    z-index 99
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

  .list
    background-color $color-theme-d
    padding 0 12px
    /*padding-bottom: 76px*/

    ul
      overflow: hidden

      li
        font-size $font-size-large
        color $color-title
        padding 12px
        background-color $color-background
        -webkit-border-radius 4px
        -moz-border-radius 4px
        border-radius 4px
        margin-bottom 6px
        display flex
        justify-content space-between
        height 76px

        .title
          width 75%
          line-height 24px
          display -webkit-box
          -webkit-box-orient vertical
          -webkit-line-clamp 3
          overflow hidden

        .img-wrap
          position relative
          width 25%

          ._img
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            margin: auto;
            width: 100%;
            height: 100%;
            max-width: 100%;
            max-height: 100%;
            -o-object-fit: cover;
            object-fit: cover;
</style>
