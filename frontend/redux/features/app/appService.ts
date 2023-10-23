import axiosConfig from '../../../utils/axiosConfig' 

export const apiGetCategories = () => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: '/api/category',
        })
        resolve(response.data)

    } catch (error) {
        reject(error)
    }
})

export const apiGetColors = () => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: '/api/color',
        })
        resolve(response.data)

    } catch (error) {
        reject(error)
    }
})

export const apiGetPublicProvinces = () => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: 'https://vapi.vnappmob.com/api/province/'
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const apiGetPublicDistrict = (provinceId:string) => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: `https://vapi.vnappmob.com/api/province/district/${provinceId}`
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const apiGetPublicWard = (districtId:string) => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: `https://vapi.vnappmob.com/api/province/ward/${districtId}`
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})
const appService = {
    apiGetCategories,apiGetColors,apiGetPublicProvinces,apiGetPublicDistrict,apiGetPublicWard
}

export default appService