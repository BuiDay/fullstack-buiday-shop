import Breadcrumb from '@/components/Common/Breadcrumb/Breadcrumb';
import Meta from '@/components/Common/Meta/Meta';
import MobilePage from '@/components/MobilePage/MobilePage';
import React,{useEffect} from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { RootState } from '@/redux';
import {getMobileProducts } from '@/redux/features/products/productsSilce';
import { useRouter } from 'next/router';

const mobile = ({query}:any) => {

    const router = useRouter()
    const dispatch = useAppDispatch();
    const products:any = useAppSelector((state: RootState) => state.products.mobile)

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
            <MobilePage data={products} />
        </div>
    );
};
export async function getServerSideProps(context:any) {
    const query = context.query
    return { props: { query } }
  }
  
export default mobile;