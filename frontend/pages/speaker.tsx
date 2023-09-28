import Breadcrumb from '@/components/Common/Breadcrumb/Breadcrumb';
import Meta from '@/components/Common/Meta/Meta';
import React from 'react';
import { useAppSelector } from '@/redux/hook';
import { RootState, wrapper } from '@/redux/store';
import { GetServerSideProps, NextPage } from 'next';
import productService from '@/redux/features/products/productsService';
import { setAudio, setSpeakers } from '@/redux/features/products/productsSilce';
import dynamic from 'next/dynamic';
import { setLoading } from '@/redux/features/loading/loadingSilce';
import AudioPage from '@/components/AudioPage/AudioPage';
import SpeakerPage from '@/components/SpeakerPage/SpeakerPage';


const Speaker: NextPage = ({ query }: any) => {

  const {speakers} = useAppSelector((state: RootState) => state.products || {})
  const {isLoading} = useAppSelector((state: RootState) => state || {})
  return ( 
    <div>
      <Meta title={"Loa"} />
      <Breadcrumb title={`Loa / ${query.brand ? query.brand : "Tất cả" }`} />
      <SpeakerPage data={speakers} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(store => async ({ req, res, ...etc }) => {
  const query = etc.query 
  if (query) {
    const res = await productService.getSpeakersProducts(query);
    if (res) {
      store.dispatch(setSpeakers(res));
    }
  }
  return {
    props: {
      query
    }
  };
});

// export default wrapper.withRedux(Mobile);
export default Speaker;







