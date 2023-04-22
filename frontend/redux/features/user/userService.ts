import axiosConfig from '../../../utils/axiosConfig' 
import axios from 'axios'

const getUser =  () => new Promise(async(resolve, reject)=>{
    try {
        const res = await axiosConfig({
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
        const res = await axiosConfig({
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
        const res = await axiosConfig({
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
        const res = await axiosConfig({
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

const userService = {
    getUser,apiAddToWishlist,apiGetWishlist,apiAddCart
}

export default userService