import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/'

export const checkUser = params => {
    return axios.post('login',params)   
}
