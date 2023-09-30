import Breadcrumb from '@/components/Common/Breadcrumb/Breadcrumb';
import { RootState, wrapper } from '@/redux/store';
import { setLaptopProduct } from '@/redux/features/products/productsSilce';
import { useAppSelector } from '@/redux/hook';
import React, { useEffect } from 'react';
import { GetServerSideProps } from 'next';
import productService from '@/redux/features/products/productsService';

import dynamic from 'next/dynamic';
const LaptopPage = dynamic(() => import('@/components/LaptopPage/LaptopPage'));
const Meta = dynamic(() => import('@/components/Common/Meta/Meta'));

const Mobile = ({query}:any) => {
    const {laptop} = useAppSelector((state: RootState) => state.products || {})
    return (
        <div>
            <Meta title={"Laptop"} />
            <Breadcrumb title={`Laptop / ${query.brand ? query.brand : "Tất cả" }`} />
            <LaptopPage data={laptop}/>
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(store => async ({ req, res, ...etc }) => {
    const query = etc.query 
    if (query) {
      const resLatop = await productService.getLaptopProducts(query);
      if (resLatop) {
        store.dispatch(setLaptopProduct(resLatop));
      }
    }
    return {
      props: {
        query
      }
    };
  });
export default Mobile;