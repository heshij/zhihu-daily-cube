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
  }
}
