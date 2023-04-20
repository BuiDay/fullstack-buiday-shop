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

const userService = {
    getUser
}

export default userService