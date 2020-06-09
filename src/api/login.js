import axios from './axios'
const api = {
  login () {
    return axios.post('/api/login')
  }
}
export default api
