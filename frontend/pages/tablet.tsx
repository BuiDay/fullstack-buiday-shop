import Breadcrumb from '@/components/Common/Breadcrumb/Breadcrumb';
import Meta from '@/components/Common/Meta/Meta';
import React from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { RootState, wrapper } from '@/redux/store';
import TabletPage from '@/components/TabletPage/TabletPage';
import { GetServerSideProps } from 'next';
import productService from '@/redux/features/products/productsService';
import { setTabletProduct } from '@/redux/features/products/productsSilce';

const Tablet = ({query}:any) => {
    const {tablet} = useAppSelector((state: RootState) => state.products || {})
    return (
        <div>
            <Meta title={"Máy tính bảng"} />
            <Breadcrumb title={"Máy tính bảng"} />
            <TabletPage data={tablet} />
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(store => async ({ req, res, ...etc }) => {
    const query = etc.query 
    if (query) {
      const resMobile = await productService.getTabletProducts(query);
      if (resMobile) {
        store.dispatch(setTabletProduct(resMobile));
      }
    }
    return {
      props: {
        query
      }
    };
  });
  
export default Tablet;