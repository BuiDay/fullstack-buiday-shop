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

const getMobileProducts =  (params:any) => new Promise(async(resolve, reject)=>{
    
    try {
        const res = await axiosConfig({
            method:"get",
            url:'/api/product',
            params:{category: "Điện thoại",...params}
        })
        resolve(res.data)
        
    } catch (error) {
        reject(error)
    }
})


const getProductById =  (id:string) => new Promise(async(resolve, reject)=>{
    try {
        const res = await axiosConfig({
            method:"get",
            url:'/api/product/get_product',
            params:{id}
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
    getProducts,getProductById,getMobileProducts
}

export default productService