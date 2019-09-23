/*
import { get } from './helpers'

const getSlider = get('api/news/latest')

export {
  getSlider
}
*/
import axios from 'axios'

export function getSlider () {
  return axios.get('api/news/latest').then((res) => {
    return Promise.resolve(res)
  })
}
