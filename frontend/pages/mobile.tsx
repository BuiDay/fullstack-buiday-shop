import Breadcrumb from '@/components/Common/Breadcrumb/Breadcrumb';
import Meta from '@/components/Common/Meta/Meta';
// import MobilePage from '@/components/MobilePage/MobilePage';
import React,{useEffect,useId} from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { RootState, wrapper } from '@/redux/store';
import { useRouter } from 'next/router';
import { GetServerSideProps, NextPage } from 'next';
import productService from '@/redux/features/products/productsService';
import { setMobilesProduct } from '@/redux/features/products/productsSilce';
import dynamic from 'next/dynamic';

const MobilePage = dynamic(() => import('@/components/MobilePage/MobilePage'), {
    loading: () => <p>Loading...</p>,
  });


const Mobile: NextPage = (props:any) => {
    const router = useRouter()
    const dispatch = useAppDispatch();

    const {mobile, isLoading} = useAppSelector((state) => state.products || {})

    // useEffect(() => {
    //     if(query)
    //         dispatch(getMobileProducts(query))
    //     else
    //         dispatch(getMobileProducts(router.query))
    // },[router.query])

    return (
        <div>
            <Meta title={"Điện thoại"} />
            <Breadcrumb title={"Điện thoại"} />
            <MobilePage data={mobile} isLoading={isLoading}/>
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(store => async ({ req, res, ...etc }) => { 
      const query = etc.query
        if(query){
            const resMobile = await productService.getMobileProducts(query);
            if(resMobile){
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
