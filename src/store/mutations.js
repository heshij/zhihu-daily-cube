import * as types from './mutation_types'

export default {
  // 改变首页字符串
  [types.ADD_HOME_DATE_STR] (state, dateStr) {
    state.homeDateStr = dateStr
  }
}
