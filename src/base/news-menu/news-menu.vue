<template>
  <div class="header">
    <div class="header-left">
      <span class="icon-back" @click="back"></span>
    </div>
    <div class="header-right">
      <ul>
        <li>
          <i class="icon-share"></i>
        </li>
        <li>
          <i :class="getFavoriteIcon(currentNews)" @click="toggleFavorite(currentNews)"></i>
        </li>
        <li>
          <i class="icon-comment"></i>
          <span>{{comments}}</span>
        </li>
        <li>
          <i :class="isPopularityClass" @click="changePopularity"></i>
          <span>{{popularity}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import api from '../../api/index'
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'news-menu',
    data () {
      return {
        // timer_: function () {
        // },
        ...mapGetters([
          'popularity',
          'isCollectIds',
          'isPopularity'
        ]),
        comments: 0
      }
    },
    created () {
      this._getNewsExtraData()
      // this.timer()
    },
    methods: {
      _getNewsExtraData () {
        api.getNewsExtraData(this.$route.params.id).then(res => {
          // console.log(res.data)
          this.popularity = res.data.popularity
          this.comments = res.data.comments
          this.setPopularity()
          // console.log(this.popularity)
        })
      },
      setCollect () {
        this.addCollect()
        const toast = this.$createToast({
          time: 2000,
          txt: this.isCollect ? 'Collect Success' : 'Cancel Success',
          type: 'correct'
        })
        toast.show()
      },
      // timer () {
      //   this.timer_ = setInterval(() => {
      //     this._getNewsExtraData()
      //     console.log(new Date())
      //   }, 10000)
      // },
      changePopularity () {
        this.isPopularity = !this.isPopularity
        if (this.isPopularity) {
          this.popularity++
          this.setPopularityState(this.isPopularity)
        } else {
          this.popularity--
          this.setPopularityState(this.isPopularity)
        }
      },
      back () {
        this.$router.go(-1)
      },
      toggleFavorite (news) {
        console.log(this.isFavorite(news))
        if (this.isFavorite(news)) {
          this.deleteFavoriteList(news)
        } else {
          this.saveFavoriteList(news)
        }
      },
      getFavoriteIcon (news) {
        if (this.isFavorite(news)) {
          return 'icon-collect'
        }
        return 'icon-nocollect'
      },
      isFavorite (news) {
        const index = this.favoriteList.findIndex((item) => {
          return item.id === news.id
        })
        return index > -1
      },
      ...mapActions([
        'addCollect',
        'setCollectState',
        'setPopularity',
        'setPopularityState',
        'saveFavoriteList',
        'deleteFavoriteList'
      ])
    },
    computed: {
      ...mapGetters([
        'isCollect',
        'isCollectNews',
        'currentIndex',
        'currentNews',
        'favoriteList'
      ]),
      isPopularityClass () {
        return this.isPopularity ? 'icon-like isOk' : 'icon-like isNo'
      },
      isCollectClass () {
        this.setCollectState()
        return this.isCollect ? 'icon-collect' : 'icon-nocollect'
      }
    },
    // destroyed() {
    //   clearInterval(this.timer_)
    // }
    watch: {
      '$route.path' (newVal) {
        if (newVal === `/news-detail/${this.$route.params.id}`) {
          this._getNewsExtraData()
        }
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
    ul
      display flex
      justify-content space-between

      li
        margin 0 10px

        i
          font-size $font-size-large

        .icon-collect
          color $color-star

        .isNo
          color $color-white

        .isOk
          color $color-like

        span
          margin-left: 4px;
          font-size $font-size-small
</style>
