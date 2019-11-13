import * as types from './mutation_types'

export function addNews ({ commit, state }, { stories, ids }) {
  let nStories = state.stories.slice()
  let nIds = state.ids.slice()

  let newStories = nStories.concat(stories)
  let newIds = nIds.concat(ids)

  commit(types.ADD_NEWS, newStories)
  commit(types.ADD_IDS, newIds)
}

export function addDate ({ commit }, date) {
  commit(types.ADD_DATE, date)
  commit(types.ADD_HOMEPAGE_DATE, date)
}

export function addDateStr ({ commit }, dateStr) {
  commit(types.ADD_DATE_STR, dateStr)
  commit(types.ADD_HOMEPAGE_DATE_STR, dateStr)
}
// 修改当前新闻详情页面id
export function changeCurrentNewsId({ commit }, id) {
  commit(types.CHANGE_CURRENT_NEWS_ID, id)
}

export function addCollect ({ commit }) {
  commit(types.SET_COLLECT_NEWS)
}
