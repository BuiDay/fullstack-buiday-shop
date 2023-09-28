import Breadcrumb from '@/components/Common/Breadcrumb/Breadcrumb';
import Meta from '@/components/Common/Meta/Meta';
import React,{useEffect} from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { RootState,wrapper } from '@/redux/store';
import productService from '@/redux/features/products/productsService';
import { useRouter } from 'next/router';
import TabletPage from '@/components/TabletPage/TabletPage';
import { GetServerSideProps, NextPage } from 'next';
import { setTivi} from '@/redux/features/products/productsSilce';


const Tivi = ({query}:any) => {

    const products:any = useAppSelector((state: RootState) => state.products.tivi)

    return (
        <div>
            <Meta title={"Tivi"} />
            <Breadcrumb title={"Tivi"} />
            <TabletPage data={products} />
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(store => async ({ req, res, ...etc }) => {
    const query = etc.query 
    if (query) {
      const resTivi = await productService.getTiviProducts(query);
      if (resTivi) {
        store.dispatch(setTivi(resTivi));
      }
    }
    return {
      props: {
        query
      }
    };
  });
export default Tivi;