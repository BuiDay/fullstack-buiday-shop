import Breadcrumb from '@/components/Common/Breadcrumb/Breadcrumb';
import Meta from '@/components/Common/Meta/Meta';
import MobilePage from '@/components/MobilePage/MobilePage';
import React,{useEffect} from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { RootState } from '@/redux/store';
import {getMobileProducts } from '@/redux/features/products/productsSilce';
import { useRouter } from 'next/router';



const Mobile = ({query}:any) => {

    const router = useRouter()
    const dispatch = useAppDispatch();
    const {mobile, isLoading} = useAppSelector((state) => state.products || {})
    useEffect(() => {
        if(query)
            dispatch(getMobileProducts(query))
        else
            dispatch(getMobileProducts(router.query))
    },[router.query])

    return (
        <div>
            <Meta title={"Điện thoại"} />
            <Breadcrumb title={"Điện thoại"} />
            <MobilePage data={mobile} isLoading={isLoading} />
        </div>
    );
};
export async function getServerSideProps(context:any) {
    const query = context.query
    return { props: { query } }
  }
  
export default Mobile;