import Breadcrumb from '@/components/Common/Breadcrumb/Breadcrumb';
import Meta from '@/components/Common/Meta/Meta';
import React,{useEffect} from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { RootState } from '@/redux/store';
import {getTabletProducts } from '@/redux/features/products/productsSilce';
import { useRouter } from 'next/router';
import TabletPage from '@/components/TabletPage/TabletPage';

const Tablet = ({query}:any) => {

    const router = useRouter()
    const dispatch = useAppDispatch();
    const products:any = useAppSelector((state: RootState) => state.products.tablet)

    useEffect(() => {
        if(query)
            dispatch(getTabletProducts(query))
        else
            dispatch(getTabletProducts(router.query))
    },[router.query])

    return (
        <div>
            <Meta title={"Máy tính bảng"} />
            <Breadcrumb title={"Máy tính bảng"} />
            <TabletPage data={products} />
        </div>
    );
};
export async function getServerSideProps(context:any) {
    const query = context.query
    return { props: { query } }
  }
  
export default Tablet;