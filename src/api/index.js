/*
import { get } from './helpers'

const getSlider = get('api/news/latest')

export {
  getSlider
}
*/
import axios from 'axios'

/*
export function getSlider () {
  return axios.get('api/news/latest').then((res) => {
    return Promise.resolve(res)
  })
}
*/

export default {
  getSlider () {
    return axios.get('api/news/latest').then((res) => {
      return Promise.resolve(res)
    })
  },
  getNews () {
    return axios.get('api/news/latest').then((res) => {
      return Promise.resolve(res)
    })
  },
  getNewsContent (id) {
    return axios('api/news/' + id).then(res => {
      return Promise.resolve(res)
    })
  },
  getMoreNews (homeDateStr) {
    return axios('api/news/before/' + homeDateStr).then(res => {
      return Promise.resolve(res)
    })
  },
  getNewsExtraData (id) {
    return axios('api/story-extra/' + id).then(res => {
      return Promise.resolve(res)
    })
  }
}
