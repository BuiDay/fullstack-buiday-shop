import Breadcrumb from '@/components/Common/Breadcrumb/Breadcrumb';
import Meta from '@/components/Common/Meta/Meta';
import Detailage from '@/components/DetailPage/DetailPage';
import { getProductById } from '@/redux/features/products/productsSilce';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import React, { useEffect } from 'react';

const Detail = ({query}:any) => {
    const dispatch = useAppDispatch();
    const data = useAppSelector(state => state.products.product)
    console.log(query.id)
    useEffect(()=>{
        dispatch(getProductById({slug:query.id}))
    },[query])

    return (
        <div>
            <Meta title={"Sản phẩm"} />
            <Breadcrumb title={"Sản phẩm"} />
            <Detailage data={data}/>
        </div>
    );
};

export async function getServerSideProps(context:any) {
    // Fetch data from external API
    const query = context.query
    // Pass data to the page via props
    return { props: { query } }
  }

export default Detail;