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
          <i :class="isCollectClass" @click="addCollect"></i>
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
  import { mapGetters, mapMutations, mapActions } from 'vuex'

  export default {
    name: 'news-menu',
    data () {
      return {
        // timer_: function () {
        // },
        ...mapGetters([
          'popularity',
          'isCollectIds'
        ]),
        isPopularity: false,
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
          this.setPopularity(this.popularity)
          // console.log(this.popularity)
        })
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
          this.setPopularity(this.popularity)
        } else {
          this.popularity--
          this.setPopularity(this.popularity)
        }
      },
      back () {
        this.$router.go(-1)
      },
      ...mapActions([
        'addCollect',
        'setCollectState'
      ]),
      ...mapMutations({
        setPopularity: 'SET_POPULARITY'
      })
    },
    computed: {
      ...mapGetters([
        'isCollect',
        'isCollectNews'
      ]),
      isPopularityClass () {
        if (this.isPopularity) {
          return 'icon-like isOk'
        } else {
          return 'icon-like isNo'
        }
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
