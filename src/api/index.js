import axios from 'axios'
import { Loading } from 'element-ui';

axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/'


let loadingInstance
// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    loadingInstance = Loading.service({
        fullscreen: true,
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)' 
    });
    if( localStorage.getItem('mytoken')){
        config.headers.Authorization = localStorage.getItem('mytoken')     
    }
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });


// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Do something with response data
    loadingInstance.close();
     return response
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });


 const checkUser = params => {
    return axios.post('login',params)   
    }
const getUserList = params => {
    return axios.get('users',params)
}
export {checkUser,getUserList}