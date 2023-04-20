import axiosConfig from '../../../utils/axiosConfig' 
import axios from 'axios'
import { IAuthRegister,IAuthLogin, IForgotPassword, IResetPassword } from '../InterfaceReducer'


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

const apiForgotPassword =  (data:IForgotPassword) => new Promise(async(resolve, reject)=>{
    try {
        const res = await axiosConfig({
            method:"post",
            url:'/api/user/forgot-password',
            data:data
        })
        resolve(res.data)
    } catch (error) {
        reject(error)
    }
})

const apiResetPassword =  (data:IResetPassword) => new Promise(async(resolve, reject)=>{
    console.log(data)
    try {
        const res = await axiosConfig({
            method:"post",
            url:`/api/user/reset-password/${data.token}`,
            data:{password:data.values.password}
        })
        resolve(res.data)
    } catch (error) {
        reject(error)
    }
})

const authService = {
    apiRegister,apiLogin,apiForgotPassword,apiResetPassword
}

export default authService