import axios from 'axios'
import { getToken } from '@/utils/auth'
const service = axios.create({ baseURL: '/api', timeout: 10000 })
service.interceptors.request.use(cfg => {
  const t = getToken()
  if (t) cfg.headers.Authorization = `Bearer ${t}`
  return cfg
})
service.interceptors.response.use(r => r.data, e => Promise.reject(e.response?.data || e))
export default service
