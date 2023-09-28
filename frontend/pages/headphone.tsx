import Breadcrumb from '@/components/Common/Breadcrumb/Breadcrumb';
import Meta from '@/components/Common/Meta/Meta';
import React from 'react';
import { useAppSelector } from '@/redux/hook';
import { RootState, wrapper } from '@/redux/store';
import { GetServerSideProps, NextPage } from 'next';
import productService from '@/redux/features/products/productsService';
import {setHeadphones} from '@/redux/features/products/productsSilce';
import dynamic from 'next/dynamic';
import { setLoading } from '@/redux/features/loading/loadingSilce';
import HeadphonePage from '@/components/HeadphonePage/HeadphonePage';


const Headphone: NextPage = ({ query }: any) => {

  const {headphones} = useAppSelector((state: RootState) => state.products || {})
  const {isLoading} = useAppSelector((state: RootState) => state || {})
  return ( 
    <div>
      <Meta title={"Tai nghe"} />
      <Breadcrumb title={`Tai nghe / ${query.brand ? query.brand : "Tất cả" }`} />
      <HeadphonePage data={headphones} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(store => async ({ req, res, ...etc }) => {
  const query = etc.query 
  if (query) {
    const res = await productService.getHeadphonesProducts(query);
    if (res) {
      store.dispatch(setHeadphones(res));
    }
  }
  return {
    props: {
      query
    }
  };
});

// export default wrapper.withRedux(Mobile);
export default Headphone;







