import Breadcrumb from '@/components/Common/Breadcrumb/Breadcrumb';
import Meta from '@/components/Common/Meta/Meta';
import LaptopPage from '@/components/LaptopPage/LaptopPage';
import { RootState } from '@/redux';
import { getLaptopProducts } from '@/redux/features/products/productsSilce';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const mobile = ({query}:any) => {
    const router = useRouter()
    const dispatch = useAppDispatch();
    const products:any = useAppSelector((state: RootState) => state.products.laptop)

    useEffect(() => {
        if(query)
            dispatch(getLaptopProducts(query))
        else
            dispatch(getLaptopProducts(router.query))
    },[router.query])

    return (
        <div>
            <Meta title={"Điện thoại"} />
            <Breadcrumb title={"Điện thoại"} />
            <LaptopPage data={products}/>
        </div>
    );
};
export async function getServerSideProps(context:any) {
    const query = context.query
    return { props: { query } }
  }
export default mobile;