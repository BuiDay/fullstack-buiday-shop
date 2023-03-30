import axiosConfig from '../../../utils/axiosConfig' 


const getProducts =  () => new Promise(async(resolve, reject)=>{
    try {
        const res = await axiosConfig({
            method:"get",
            url:'/api/product',
        })
        console.log(res.data.err)
        if(res.data.err === -1)
        {
            reject(res.data)
        }
        resolve(res.data)
        
    } catch (error) {
        reject(error)
    }
})


const getProductById =  () => new Promise(async(resolve, reject)=>{
    try {
        const res = await axiosConfig({
            method:"get",
            url:'/api/product/id=6424a50238bdf66bacbc695d',
            // params:{id:"6424a50238bdf66bacbc692d"}
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
    getProducts,getProductById
}

export default productService