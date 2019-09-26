<template>
  <div class="list">
    <div class="date">{{newsDate}}</div>
    <ul>
      <li class="new border-1px" v-for="story in stories" :key="story.id" @click="goNews(story)">
        <span class="title">{{story.title}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  import api from '../../api/index'
  // eslint-disable-next-line no-unused-vars
  import { mapGetters, mapMutations, mapActions } from 'vuex'

  export default {
    name: 'news-list',
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
      this._getMoreNews()
    },
    methods: {
      _getNews () {
        api.getNews().then((res) => {
          this.stories = res.data.stories
          console.log(res.data.date)
        }).catch((error) => {
          console.log(error)
        })
      },
      _getMoreNews () {
        api.getMoreNews(this.homeDateStr).then((res) => {
          console.log('更多新闻' + res.data.stories)
        }).catch((error) => {
          console.log(error)
        })
      },
      goNews (story) {
        this.$router.push({
          path: `/news-detail/${story.id}`
        })
      },
      ...mapActions([
        'addNews',
        'addDate',
        'addDateStr'
      ])
    },
    computed: {
      ...mapGetters([
        'homeDateStr'
      ])
    }
  }
</script>

<style scoped lang="stylus">
</style>
