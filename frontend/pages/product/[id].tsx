import Breadcrumb from '@/components/Common/Breadcrumb/Breadcrumb';
import Loading from '@/components/Common/Loading/Loading';
import Meta from '@/components/Common/Meta/Meta';
import Detailage from '@/components/DetailPage/DetailPage';
import productService from '@/redux/features/products/productsService';
import { setProduct } from '@/redux/features/products/productsSilce';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { wrapper } from '@/redux/store';
import { GetServerSideProps } from 'next';
import React, { useEffect } from 'react';

const Detail = ({query}:any) => {
    const {product,isLoading} = useAppSelector(state => state.products)
    console.log(product)
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


export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(store => async ({ req, res, ...etc }) => {
    const query = etc.query 
    if (query) {
      const resProduct = await productService.getProductById({slug:query.id}) || {};
      if (resProduct) {
        store.dispatch(setProduct(resProduct));
      }
    }
    return {
      props: {
        query
      }
    };
  });

export default Detail;