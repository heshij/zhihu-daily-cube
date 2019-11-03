<template>
  <div class="home">
    <div class="scroll-wrapper">
      <cube-scroll ref="scroll">
        <div v-if="sliders.length" class="slide-container">
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
        <news-list ref="newsList"></news-list>
        <cube-button @click="_getMoreNews">more</cube-button>
      </cube-scroll>
    </div>
  </div>
</template>

<script>
  import api from '../../api/index'
  import { changeImageUrl } from '../../common/js/util'
  import NewsList from '../../base/news-list/new-list'
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'home',
    components: { NewsList },
    data () {
      return {
        sliders: [],
        date: Date,
        dateStr: ''
      }
    },
    created () {
      this._getNews()
      this.initDate()
      this.handleNewsList()
    },
    mounted () {
      setTimeout(() => {
        this._getSlider()
      }, 20)
    },
    methods: {
      _getSlider () {
        api.getSlider().then((res) => {
          // console.log(res.data.top_stories)
          this.sliders = this.initImage(res.data.top_stories)
          // console.log(this.sliders)
        }).catch((error) => {
          console.log(error)
        })
      },
      initImage (data) {
        data.map((item) => {
          item.image = changeImageUrl(item.image)
        })
        return data
      },
      _getNews () {
        api.getNews().then((response) => {
          let stories = response.data.stories
          let ids = stories.map(story => story.id)
          this.addNews({
            stories: stories,
            ids: ids
          })
          console.log(this.stories)
        }).catch((error) => {
          console.log(error)
        })
      },
      _getMoreNews () {
        console.log(this.homepageDateStr)
        api.getMoreNews(this.homepageDateStr).then(response => {
          let stories = response.data.stories
          console.log(stories)
          let ids = stories.map(story => story.id)
          this.addNews({
            stories: stories,
            ids: ids
          })
        }).catch((error) => {
          console.log(error)
        })

        this.decreaseDateStr()
      },
      decreaseDateStr () {
        let homeDate = this.homepageDate
        // console.log(homeDate)
        homeDate.setDate(homeDate.getDate() - 1)
        this.addDate(new Date(homeDate.getTime()))
        this.formatDate()
      },
      formatDate () {
        let nowDate = new Date(this.homepageDate.getTime())
        let year = nowDate.getFullYear() + ''
        let month = nowDate.getMonth() + 1
        let date = nowDate.getDate()
        month = month < 10 ? '0' + month : month + ''// 格式化月份，小于10前置0
        date = date < 10 ? '0' + date : date + ''// 格式化日期，小于10前置0;
        this.dateStr = year + month + date
        this.addDateStr(this.dateStr)
      },
      initDate () {
        this.date = new Date()
        this.addDate(new Date(this.date.getTime()))
        console.log(new Date(this.date.getTime()))
        this.formatDate()
      },
      handleNewsList () {
        // const paddingBottom = this.sliders.length > 0 ? '76px' : ''
        // this.$refs.newsList.style.paddingBottom = paddingBottom
        // this.$refs.scroll.refresh()
      },
      ...mapActions([
        'addNews',
        'addDate',
        'addDateStr'
      ])
    },
    computed: {
      ...mapGetters([
        'stories',
        'homepageDate',
        'homepageDateStr'
      ])
    }
  }
</script>

<style lang="stylus">
  @import "~@/common/stylus/variable.styl"
  html
    background-color $color-theme-d

  .home
    padding-top 40px

    .scroll-wrapper
      height 620px
      // fix 子元素超出边框圆角部分不隐藏的问题
      transform: rotate(0deg);
  .slide-container
    height 260px
    transform translateZ(0px)
    overflow hidden

    img
      width 100%;
      height: auto !important;
      margin-top -16%

    .cube-slide-item
      position relative

      span
        display block
        padding: 30px 16px;
        line-height: 30px
        position absolute
        bottom 0
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
