import Breadcrumb from '@/components/Common/Breadcrumb/Breadcrumb';
import Meta from '@/components/Common/Meta/Meta';
import LaptopPage from '@/components/LaptopPage/LaptopPage';
import { RootState, wrapper } from '@/redux/store';
import { setLaptopProduct } from '@/redux/features/products/productsSilce';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { GetServerSideProps } from 'next';
import productService from '@/redux/features/products/productsService';

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