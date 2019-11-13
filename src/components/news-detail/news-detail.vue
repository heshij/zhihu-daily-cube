<template>
  <div class="news-wrapper">
    <news-menu></news-menu>
    <div class="top-img">
      <img v-lazy="attachImageUrl(newsDetail.image)" alt="">
      <span class="news_title">{{newsDetail.title}}</span>
      <b></b>
    </div>
    <div class="news-main" v-html="newsDetail.body"></div>
  </div>
</template>

<script>
  import api from '../../api/index'
  import NewsMenu from '../../base/news-menu/news-menu'
  import { mapGetters, mapActions } from 'vuex'
  export default {
    components: { NewsMenu },
    data () {
      return {
        newsDetail: {}
      }
    },
    created () {
      this._getNewsContent()
    },
    computed: {
      ...mapGetters([
        'id'
      ])
    },
    methods: {
      _getNewsContent () {
        // console.log(this.$route.params.id)
        api.getNewsContent(this.$route.params.id).then(res => {
          res.data.body = this.attachBodyContent(res.data.body)
          this.newsDetail = res.data
          this.changeCurrentNewsId(this.$route.params.id)
          // console.log(this.newsDetail)
        }).catch(error => {
          console.log(error)
        })
      },
      // 修改图片链接
      attachImageUrl (srcUrl) {
        if (srcUrl !== undefined) {
          return srcUrl.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p')
        }
      },
      // 修改返回数据中的body中的图片链接
      attachBodyContent (body) {
        return body.replace(/src="http\w{0,1}:\/\//g, 'src="https://images.weserv.nl/?url=')
      },
      ...mapActions([
        'changeCurrentNewsId'
      ])
    },
    watch: {
      '$route.path'(newVal) {
        if (newVal === `/news-detail/${this.$route.params.id}`) {
          this._getNewsContent()
        }
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import "~@/common/stylus/variable.styl"
  /*@import "~@/common/stylus/news_qa.auto.styl"*/
  .news-wrapper
    overflow: hidden
    .top-img
      position relative
      width 100%
      height 240px
      overflow hidden
      margin-top 40px
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
        z-index 10
      span
        position absolute
        bottom 20px
        left 0
        z-index 12
        color $color-white
        font-size $font-size-large-x
        overflow hidden
        white-space normal
        padding 0 20px
        line-height 28px
      b
        position absolute
        bottom 0
        left 0
        background-color rgba(0,0,0,.3)
        z-index 11
        display block
        width 100%
        height 100%
</style>
