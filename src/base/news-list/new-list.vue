<template>
  <div class="list">
    <div class="date">{{newsDate}}</div>
    <ul>
      <li class="new border-1px" v-for="story in stories" :key="story.id" @click="goNews(story)">
        <span class="title">{{story.title}}</span>
        <div class="img-wrap">
          <img :src="attachImageUrl(story.images[0])" alt="" class="_img">
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import api from '../../api/index'

  export default {
    name: 'news-list',
    props: {
    },
    data () {
      return {
        newsDate: '今日热闻',
        stories: [],
        date: Date,
        dateStr: ''
      }
    },
    created () {
      this._getNews()
    },
    methods: {
      _getNews () {
        api.getNews().then((res) => {
          this.stories = res.data.stories
          console.log(res.data)
        }).catch((error) => {
          console.log(error)
        })
      },
      // 修改图片链接
      attachImageUrl (srcUrl) {
        if (srcUrl !== undefined) {
          return srcUrl.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p')
        }
      },
      goNews (story) {
        this.$router.push({
          path: `/news-detail/${story.id}`
        })
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import "~@/common/stylus/variable.styl"
  .list
    background-color $color-theme-d
    padding 0 12px
    /*padding-bottom: 76px*/
    .date
      font-size 14px
      color $color-title-s
      padding 16px 12px
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
