import * as types from './mutation_types'

export default {
  // 增加首页新闻数组
  [types.ADD_NEWS] (state, stories) {
    state.stories = stories
  },
  // 增加首页新闻id数组
  [types.ADD_IDS] (state, ids) {
    state.ids = ids
  },
  // 增加全部加载过的新闻到数组
  [types.ADD_ALL_NEWS] (state, stories) {
    state.allStories = state.allStories.concat(stories)
  },
  // 添加更多的id数组
  [types.ADD_MORE_IDS] (state, ids) {
    state.ids = state.ids.concat(ids)
  },
  // 改变首页日期
  [types.ADD_HOMEPAGE_DATE] (state, date) {
    state.homepageDate = date
  },
  // 改变首页字符串
  [types.ADD_HOMEPAGE_DATE_STR] (state, dateStr) {
    state.homepageDateStr = dateStr
  },
  // 改变日期和当前字符串
  [types.ADD_DATE] (state, date) {
    state.date = date
  },
  // 增加日期字符串
  [types.ADD_DATE_STR] (state, dateStr) {
    state.dateStr = dateStr
  },
  // 设置点赞数
  [types.SET_POPULARITY] (state, popularity) {
    state.popularity = popularity
  },
  // 收藏新闻
  [types.SET_COLLECT_NEWS] (state) {
    let index = state.isCollectIds.indexOf(state.id)
    console.log(state.id)
    if (index < 0) {
      state.isCollect = true
      state.isCollectIds.push(state.id)
      state.allStories.forEach((story) => {
        if (story.id === state.id) {
          state.isCollectNews.push(story)
        }
      })
    } else {
      state.isCollect = false
      state.isCollectIds.splice(index, 1)
      state.isCollectNews.splice(index, 1)
    }
    console.log(state.isCollectIds)
    console.log(state.isCollectNews)
    console.log(state.stories)
  },
  // 判断当前收藏状态
  [types.SET_COLLECT_STATE] (state) {
    if (state.isCollectIds.indexOf(state.id) < 0) {
      state.isCollect = false
    } else {
      state.isCollect = true
    }
    console.log(state.stories)
  }
}
