<template>
  <div class="news-wrapper">
    <div class="top-img">
      <img src="" alt="">
      <span class="news_title">{{title}}</span>
    </div>
    <div class="news-main"></div>
  </div>
</template>

<script>
  import api from '../../api/index'

  export default {
    name: "news-detail",
    data() {
      return {
        newsDetail:{},
        title:''
      }
    },
    created(){
      this._getNewsContent()
    },
    method: {
      _getNewsContent(){
        api.getNewsContent(this.$route.params.id).then(res => {
          console.log(res.data);
        })
      }
    },
    watch: {
      '$route'(to, from) {
        this._getNewsContent()
      }
    },
  }
</script>

<style scoped>

</style>
