import axios, { AxiosError } from "axios";

const instance = axios.create({
    baseURL: "http://localhost:8000"
})

instance.interceptors.request.use(function(config:any){
    let token = window.localStorage.getItem('persist:auth') && JSON.parse(window.localStorage.getItem('persist:auth')  || 'Default Value')?.token?.slice(1, -1) 
    config.headers = {
        authorization: token ? `Bearer ${token}` : null
    }
    return config
},function(err){
    return Promise.reject(err);
})

instance.interceptors.response.use(response => {
    return Promise.resolve(response)
 }, error => {
   return Promise.reject(error.response.data)
 });

export default instance