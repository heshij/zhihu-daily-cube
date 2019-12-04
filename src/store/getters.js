export const id = state => state.id

export const stories = state => state.stories

export const homepageDate = state => state.homepageDate

export const homepageDateStr = state => state.homepageDateStr

export const popularity = state => state.popularity

export const isCollect = state => state.isCollect

export const isCollectIds = state => state.isCollectIds

export const isCollectNews = state => state.isCollectNews

export const currentIndex = state => state.currentIndex

export const currentNews = (state) => {
  return state.stories[state.currentIndex] || {}
}

export const favoriteList = state => state.favoriteList
