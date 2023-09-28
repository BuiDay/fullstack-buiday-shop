import axiosConfig from '../../../utils/axiosConfig' 


const getProducts =  (params:any) => new Promise(async(resolve, reject)=>{
    
    try {
        const res = await axiosConfig({
            method:"get",
            url:'/api/product',
            params:params
        })
        resolve(res.data)
        
    } catch (error) {
        reject(error)
    }
})

const getMobileProducts =  (params?:any) => new Promise(async(resolve, reject)=>{
    
    try {
        const res = await axiosConfig({
            method:"get",
            url:'/api/product',
            params:{category: "Điện thoại",limit:20,...params}
        })
        resolve(res.data)
        
    } catch (error) {
        reject(error)
    }
})

const getTabletProducts =  (params:any) => new Promise(async(resolve, reject)=>{
    
    try {
        const res = await axiosConfig({
            method:"get",
            url:'/api/product',
            params:{category: "Máy tính bảng",limit:20,...params}
        })
        resolve(res.data)
        
    } catch (error) {
        reject(error)
    }
})

const getLaptopProducts =  (params:any) => new Promise(async(resolve, reject)=>{
    
    try {
        const res = await axiosConfig({
            method:"get",
            url:'/api/product',
            params:{category: "Laptop",limit:20,...params}
        })
        resolve(res.data)
        
    } catch (error) {
        reject(error)
    }
})

const getWatchProducts =  (params:any) => new Promise(async(resolve, reject)=>{
    
    try {
        const res = await axiosConfig({
            method:"get",
            url:'/api/product',
            params:{category: "Đồng hồ thông minh",limit:20,...params}
        })
        resolve(res.data)
        
    } catch (error) {
        reject(error)
    }
})

const getTiviProducts =  (params:any) => new Promise(async(resolve, reject)=>{
    
    try {
        const res = await axiosConfig({
            method:"get",
            url:'/api/product',
            params:{category: "Tivi",limit:20,...params}
        })
        resolve(res.data)
        
    } catch (error) {
        reject(error)
    }
})

const getAudioProducts =  (params:any) => new Promise(async(resolve, reject)=>{
    
    try {
        const res = await axiosConfig({
            method:"get",
            url:'/api/product',
            params:{category: ["Tai nghe","Loa"],limit:20,...params}
        })
        resolve(res.data)
        
    } catch (error) {
        reject(error)
    }
})

const getSpeakersProducts =  (params:any) => new Promise(async(resolve, reject)=>{
    
    try {
        const res = await axiosConfig({
            method:"get",
            url:'/api/product',
            params:{category: ["Loa"],limit:20,...params}
        })
        resolve(res.data)
        
    } catch (error) {
        reject(error)
    }
})

const getHeadphonesProducts =  (params:any) => new Promise(async(resolve, reject)=>{
    
    try {
        const res = await axiosConfig({
            method:"get",
            url:'/api/product',
            params:{category: ["Tai nghe"],limit:20,...params}
        })
        resolve(res.data)
        
    } catch (error) {
        reject(error)
    }
})

const getSearchProducts =  (params:any) => new Promise(async(resolve, reject)=>{
    try {
        const res = await axiosConfig({
            method:"get",
            url:'/api/product/search-product',
            params:{limit:20,...params}
        })
        resolve(res.data)
    } catch (error) {
        reject(error)
    }
})


const getProductById =  (id:any) => new Promise(async(resolve, reject)=>{
    try {
        const res = await axiosConfig({
            method:"get",
            url:'/api/product/get_product',
            params:id
        })
        if(res.data.err === -1)
        {
            reject(res)
        }
        resolve(res.data)
        
    } catch (error) {
        reject(error)
    }
})

const productService = {
    getProducts,getProductById,getMobileProducts,getTabletProducts,getLaptopProducts,getSpeakersProducts,getHeadphonesProducts,getWatchProducts, getTiviProducts, getSearchProducts, getAudioProducts
}

export default productService