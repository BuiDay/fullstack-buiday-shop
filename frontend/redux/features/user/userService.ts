import axiosToken from '@/utils/axiosToken'
import axiosConfig from '../../../utils/axiosConfig' 
// import axios from 'axios'

const getUser =  () => new Promise(async(resolve, reject)=>{
    try {
        const res = await axiosToken({
            method:"get",
            url:`/api/user`,
        })
        resolve(res.data)
    } catch (error) {
        reject(error)
    }
})

const apiAddToWishlist =  (data:{proId:string}) => new Promise(async(resolve, reject)=>{
    try {
        const res = await axiosToken({
            method:"put",
            url:`/api/product/wishlist`,
            data
        })
        resolve(res.data)
    } catch (error) {
        reject(error)
    }
})

const apiGetWishlist =  () => new Promise(async(resolve, reject)=>{
    try {
        const res = await axiosToken({
            method:"get",
            url:`/api/product/wishlist`,
        })
        resolve(res.data)
    } catch (error) {
        reject(error)
    }
})

const apiAddCart =  (data:any) => new Promise(async(resolve, reject)=>{
    try {
        const res = await axiosToken({
            method:"post",
            url:`api/user/cart`,
            data:{
                cart:data
            }
        })
        resolve(res.data)
    } catch (error) {
        reject(error)
    }
})

const apiGetCart =  () => new Promise(async(resolve, reject)=>{
    try {
        const res = await axiosToken({
            method:"get",
            url:`api/user/cart`,
        })
        resolve(res.data)
    } catch (error) {
        reject(error)
    }
})

const apiCreateUrlVnPay = (params:{amount:number}) => new Promise(async(resolve, reject)=>{
    try {
        const res = await axiosToken({
            method:"post",
            url:`api/vnpay/create_payment_url`,
            headers:{  'Access-Control-Allow-Origin': '*'},
            data:params
        })
        resolve(res.data)
    } catch (error) {
        reject(error)
    }
})

const apiGetVnPay = (params:any) => new Promise(async(resolve, reject)=>{
    console.log(params)
    try {
        const res = await axiosToken({
            method:"get",
            url:`api/vnpay/vnpay_ipn`,
            params
        })
        resolve(res.data)
    } catch (error) {
        reject(error)
    }
})

const userService = {
    getUser,apiAddToWishlist,apiGetWishlist,apiAddCart,apiGetCart,apiCreateUrlVnPay,apiGetVnPay
}

export default userService