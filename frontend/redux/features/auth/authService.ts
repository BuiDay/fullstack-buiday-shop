import axiosConfig from '../../../utils/axiosConfig' 
import axios from 'axios'
import { IAuthRegister,IAuthLogin } from '../InterfaceReducer'


const apiRegister =  (data:IAuthRegister) => new Promise(async(resolve, reject)=>{
    try {
        const res = await axiosConfig({
            method:"post",
            url:'/api/user/register',
            data:data
        })
        resolve(res.data)
    } catch (error) {
        reject(error)
    }
})

const apiLogin =  (data:IAuthLogin) => new Promise(async(resolve, reject)=>{
    try {
        const res = await axiosConfig({
            method:"post",
            url:'/api/user/login',
            data:data
        })
        resolve(res.data)
    } catch (error) {
        reject(error)
    }
})

const authService = {
    apiRegister,apiLogin
}

export default authService