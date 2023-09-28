import React, { useEffect, useState } from 'react';
import SideBar from '../Common/SideBar/SideBar';

import ProductCards from '../ProductCards/ProductCards';
import { useRouter } from 'next/router';
import Pagination from '../Common/Pagination/Pagination';
import Loading from '../Common/Loading/Loading';


interface IQuery {
    category?: string,
    brand?: string,
    sort?: string
}

interface IProps{
    data?:any,
    isLoading?:boolean
}

const MobilePage:React.FC<IProps> = ({data,isLoading}) => {
    const products = data?.data
    const router = useRouter()
    const handleSort = (value:string | number,title:string) =>{
        if(value !== "All"){
            router.push(
                {
                    pathname:"/mobile",
                    query:{
                        ...router.query,
                        page:1,
                        [title]:value,
                    }
                }
            )
        }else
        router.push(
            {
                pathname:"/mobile",
                query:{}
            }
        )
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
                                    <p className='mb-0' style={{ whiteSpace: "nowrap" }}>Xếp xếp theo:</p>
                                    <select name="" id="" className='form-control form-select' onChange={(e)=>handleSort(e.target.value,"sort")}>
                                        <option value="All">Mặc định</option>
                                        <option value="-totalRating">Nổi bật</option>
                                        <option value="best-selling">Mua nhiều</option>
                                        <option value="discount">Giá: Thấp-Cao</option>
                                        <option value="-discount">Giá: Cao-Thấp</option>
                                    </select>
                                </div>
                                <div className="d-flex align-items-center gap-10">
                                    <p className="total-products">{data?.total} sản phẩm</p>
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
                            {isLoading && <div className='d-flex w-100 justify-content-center'> <Loading /></div>}
                            {
                               products && products.length > 0 ? products?.map((item:any, index:any) => {
                                    return (
                                        <ProductCards key={index} data={item} grid={4} />
                                    )
                                }) : <h4 className=''>Không có sản phẩm nào </h4>
                            }
                            <Pagination data={products} total={data?.total}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default MobilePage;