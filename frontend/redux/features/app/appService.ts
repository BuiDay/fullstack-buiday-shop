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

const appService = {
    apiGetCategories,apiGetColors
}

export default appService