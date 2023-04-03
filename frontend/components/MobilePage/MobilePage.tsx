import React, { useEffect, useState} from 'react';
import SideBar from '../Common/SideBar/SideBar';
import styles from './MobilePage.module.scss'
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { RootState } from '@/redux';
import { getAllProducts } from '@/redux/features/products/productsSilce';
import ProductCards from '../ProductCards/ProductCards';
import { useRouter } from 'next/router';


interface IQuery{
    category?:string,
    brand?:string,
    sort?:string
}

const MobilePage = () => { 

    const dispatch = useAppDispatch();
    const products  = useAppSelector((state:RootState) => state.products.products)
    const router = useRouter()

    useEffect(()=>{
        if(!router.query){
            return
        }
        var x = {category:"Điện thoại",...router.query}
        dispatch(getAllProducts(x))
    },[router])


    const handleFilter = (value:string) =>{
        if(router.query.brand){
            router.push({
                query:{brand:router.query.brand,sort:value}
            })
        }else{
            router.push({
                query:{sort:value}
            })
        }
    }

    return (
        <div className={`store-wrapper home_wrapper_2 py-4`}>
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">
                        <SideBar />                                          
                        </div>
                        <div className="col-9">
                            <div className="filter-sort-grid mb-4">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center gap-10">
                                        <p className='mb-0' style={{whiteSpace:"nowrap"}}>Xếp xếp theo:</p>
                                        <select name="" id="" className='form-control form-select' onChange={(e)=>handleFilter(e.target.value)}>
                                            <option value="">Tất cả</option>
                                            <option value="-totalRating">Nổi bật</option>
                                            <option value="best-selling">Mua nhiều</option>
                                            <option value="price">Giá: Thấp-Cao</option>
                                            <option value="-price">Giá: Cao-Thấp</option>
                                        </select>
                                    </div>
                                    <div className="d-flex align-items-center gap-10">
                                        <p className="total-products">{products?.length} sản phẩm</p>
                                        <div className="d-flex gap-10 align-items-center grid">
                                            {/* <img className='img-fluid active' src={Gr4} alt="" onClick={()=>getGrid(4)} />
                                            <img className='img-fluid' src={Gr3} alt="" onClick={()=>getGrid(3)}/>
                                            <img className='img-fluid' src={Gr2} alt="" onClick={()=>getGrid(6)}/>
                                            <img className='img-fluid' src={Gr} alt="" onClick={()=>getGrid(12)}/> */}
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="products-list pb-5 d-flex flex-wrap gap-10">
                              {
                                 products  &&  products?.map((item,index)=>{
                                        return(
                                            <ProductCards key={index} data={item} grid={4} />
                                        )
                                    })
                              }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};


export default MobilePage;