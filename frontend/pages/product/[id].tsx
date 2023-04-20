import Breadcrumb from '@/components/Common/Breadcrumb/Breadcrumb';
import Loading from '@/components/Common/Loading/Loading';
import Meta from '@/components/Common/Meta/Meta';
import Detailage from '@/components/DetailPage/DetailPage';
import { getProductById } from '@/redux/features/products/productsSilce';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import React, { useEffect } from 'react';

const Detail = ({query}:any) => {
    const dispatch = useAppDispatch();
    const {product,isLoading} = useAppSelector(state => state.products)
    useEffect(()=>{
        dispatch(getProductById({slug:query.id}))
    },[query])

    return (
        <div>
            <Meta title={"Sản phẩm"} />
            <Breadcrumb title={"Sản phẩm"} />
           
            {
                isLoading ?  
                <div className='d-flex justify-content-center align-items-center' style={{height:"500px"}}>
                <Loading/>
                </div>: 
                <Detailage data={product}/>
            }
        </div>
    );
};

export async function getServerSideProps(context:any) {
    // Fetch data from external API
    const query = context.query
    // Pass data to the page via props
    return { props: { query } }
  }

export default Detail;