import { axios } from '@/utils/axios'

export const home = (req) => {
  return axios.get('', req).then((res) => {
    return Promise.resolve(res.data)
  })
}
