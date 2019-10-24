<template>
  <div class="news-wrapper">
    <div class="top-img">
      <img src="" alt="">
      <span class="news_title">{{title}}</span>
    </div>
    <div class="news-main">这是详情</div>
  </div>
</template>

<script>
  import api from '../../api/index'

  export default {
    data () {
      return {
        newsDetail: {},
        title: ''
      }
    },
    created () {
      this._getNewsContent()
      console.log(this.$route.params.id)
    },
    methods: {
      _getNewsContent () {
        api.getNewsContent(this.$route.params.id).then(res => {
          console.log(res.data)
        })
      }
    },
    watch: {
      '$route' (to, from) {
        console.log('____________')
        console.log(to)
        console.log(from)
        console.log('____________')
        // this._getNewsContent()
      }
    }
  }
</script>

<style scoped>
</style>
