import Breadcrumb from '@/components/Common/Breadcrumb/Breadcrumb';
import Meta from '@/components/Common/Meta/Meta';
import DetailPage from '@/components/DetailPage/DetailPage';
import productService from '@/redux/features/products/productsService';
import React, { use, useEffect } from 'react';

const Detail = () => {

 
    return (
        <div>
            <Meta title={"Sản phẩm"} />
            <Breadcrumb title={"Sản phẩm"} />
            <DetailPage />
        </div>
    );
};

export default Detail;