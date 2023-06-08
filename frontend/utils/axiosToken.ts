import axios, { HeadersDefaults } from 'axios';

const axiosToken= axios.create();

axiosToken.defaults.baseURL = "http://localhost:8000";

axiosToken.interceptors.request.use(function(config:any){
    let token = window.localStorage.getItem('persist:auth') && JSON.parse(window.localStorage.getItem('persist:auth')  || 'Default Value')?.token?.slice(1, -1) 
    config.headers = {
        authorization: token ? `Bearer ${token}` : null
    }
    return config
},function(err){
  console.log(err)
    return Promise.reject(err);
})

axiosToken.interceptors.response.use(response => {
    return Promise.resolve(response)
 }, error => {
   return Promise.reject(error.response||error.response)
 });

export default axiosToken