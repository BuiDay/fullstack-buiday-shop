import Breadcrumb from '@/components/Common/Breadcrumb/Breadcrumb';
import Meta from '@/components/Common/Meta/Meta';
// import MobilePage from '@/components/MobilePage/MobilePage';
import React from 'react';
import { useAppSelector } from '@/redux/hook';
import { RootState, wrapper } from '@/redux/store';
import { GetServerSideProps, NextPage } from 'next';
import productService from '@/redux/features/products/productsService';
import { setMobilesProduct } from '@/redux/features/products/productsSilce';
import dynamic from 'next/dynamic';
import { setLoading } from '@/redux/features/loading/loadingSilce';

const MobilePage = dynamic(() => import('@/components/MobilePage/MobilePage'), {
  loading: () => <p>Loading...</p>,
});


const Mobile: NextPage = ({ query }: any) => {

  const {mobile} = useAppSelector((state: RootState) => state.products || {})
  const {isLoading} = useAppSelector((state: RootState) => state || {})
  return (
    <div>
      <Meta title={"Điện thoại"} />
      <Breadcrumb title={`Điện thoại / ${query.brand ? query.brand : "Tất cả" }`} />
      <MobilePage data={mobile}/>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(store => async ({ req, res, ...etc }) => {
  const query = etc.query 
  if (query) {
    const resMobile = await productService.getMobileProducts(query);
    if (resMobile) {
      store.dispatch(setMobilesProduct(resMobile));
    }
  }
  return {
    props: {
      query
    }
  };
});

// export default wrapper.withRedux(Mobile);
export default Mobile;
