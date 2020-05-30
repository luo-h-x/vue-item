import axios from './axios'
const api = {
  last () {
    return axios.get('/news/latest')
  },
  before (time) {
    return axios.get(`/news/before/${time}`)
  },
  detail (id) {
    return axios.get(`/news/${id}`)
  }
}
export default api
