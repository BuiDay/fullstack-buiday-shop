import Breadcrumb from '@/components/Common/Breadcrumb/Breadcrumb';
import Meta from '@/components/Common/Meta/Meta';
import React from 'react';
import { useAppSelector } from '@/redux/hook';
import { RootState, wrapper } from '@/redux/store';
import { GetServerSideProps, NextPage } from 'next';
import productService from '@/redux/features/products/productsService';
import { setAudio } from '@/redux/features/products/productsSilce';
import dynamic from 'next/dynamic';
import { setLoading } from '@/redux/features/loading/loadingSilce';
import AudioPage from '@/components/AudioPage/AudioPage';


const AudioEquipments: NextPage = ({ query }: any) => {

  const {audio} = useAppSelector((state: RootState) => state.products || {})
  const {isLoading} = useAppSelector((state: RootState) => state || {})
  console.log(audio)
  return ( 
    <div>
      <Meta title={"Thiết bị âm thanh"} />
      <Breadcrumb title={`Thiết bị âm thanh / ${query.brand ? query.brand : "Tất cả" }`} />
      <AudioPage data={audio} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(store => async ({ req, res, ...etc }) => {
  const query = etc.query 
  if (query) {
    const res = await productService.getAudioProducts(query);
    if (res) {
      store.dispatch(setAudio(res));
    }
  }
  return {
    props: {
      query
    }
  };
});

// export default wrapper.withRedux(Mobile);
export default AudioEquipments;







