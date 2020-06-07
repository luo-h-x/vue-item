import axios from './axios'
const api = {
  info (id, tk) {
    return axios.get(`/dy/aweme/iteminfo/?item_ids=${id}&dytk=${tk}`)
  }
}
export default api
