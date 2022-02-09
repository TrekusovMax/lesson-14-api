import axios from 'axios'
import logger from './log.service'
import { toast } from 'react-toastify'
import config from '../config.json'

axios.defaults.baseURL = config.apiEndpoint

axios.interceptors.response.use(
  (res) => res,
  (error) => {
    const expectedErrors =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500
    if (!expectedErrors) {
      toast.error('Something was wrong. Try it later')
      logger.log(error)
    }
    return Promise.reject(error)
  },
)

const httpService = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
}
export default httpService
