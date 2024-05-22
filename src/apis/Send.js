import axios from 'axios'

const JWT_TOKEN = localStorage.getItem("AccessToken") ;
axios.defaults.headers.common['Authorization'] = JWT_TOKEN ? `Bearer ${JWT_TOKEN}` : ''

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
})

instance.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

instance.interceptors.response.use(
  (response) => {
    return response
  },

  (error) => {
    return Promise.reject(error)
  },
)

export default instance
