import Breadcrumb from '@/components/Common/Breadcrumb/Breadcrumb';
import Meta from '@/components/Common/Meta/Meta';
import Detailage from '@/components/DetailPage/DetailPage';
import MobilePage from '@/components/MobilePage/MobilePage';
import productService from '@/redux/features/products/productsService';
import React, { use, useEffect } from 'react';

const Detail = () => {

 
    return (
        <div>
            <Meta title={"Sản phẩm"} />
            <Breadcrumb title={"Sản phẩm"} />
            <Detailage />
        </div>
    );
};

export default Detail;