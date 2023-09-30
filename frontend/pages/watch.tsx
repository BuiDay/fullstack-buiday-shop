import React from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { RootState,wrapper } from '@/redux/store';
import productService from '@/redux/features/products/productsService';
import { useRouter } from 'next/router';
import { GetServerSideProps, NextPage } from 'next';
import { setWatchProduct } from '@/redux/features/products/productsSilce';

import dynamic from 'next/dynamic';
const TabletPage = dynamic(() => import('@/components/TabletPage/TabletPage'));
const Meta = dynamic(() => import('@/components/Common/Meta/Meta'));
const Breadcrumb = dynamic(() => import('@/components/Common/Breadcrumb/Breadcrumb'));

const Watch = ({query}:any) => {

    const products:any = useAppSelector((state: RootState) => state.products.watch)

    return (
        <div>
            <Meta title={"Đồng hồ thông minh"} />
            <Breadcrumb title={"Đồng hồ thông minh"} />
            <TabletPage data={products} />
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(store => async ({ req, res, ...etc }) => {
    const query = etc.query 
    if (query) {
      const resWatch = await productService.getWatchProducts(query);
      if (resWatch) {
        store.dispatch(setWatchProduct(resWatch));
      }
    }
    return {
      props: {
        query
      }
    };
  });
export default Watch;