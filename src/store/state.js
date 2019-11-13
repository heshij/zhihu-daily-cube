export default {
  stories: [], // 当前新闻数组
  allStories: [], // 全部已加载新闻数组
  ids: [], // 当前新闻数组id
  id: '', // 当前新闻id
  nextId: '', // 下一篇新闻的id
  new: [], // 当前新闻详情页内容
  homepageDate: 0, // 首页当前日期
  homepageDateStr: 0, // 首页日期字符串
  dateStr: 0, // 详情页日期字符串
  date: 0, // 详情页日期,
  popularity: 0, // 当前新闻点赞数
  isCollect: false, // 当前收藏状态
  isCollectIds: [], // 收藏新闻id数组
  isCollectNews: [] // 收藏新闻数组
}
