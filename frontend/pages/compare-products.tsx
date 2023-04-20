import Breadcrumb from '@/components/Common/Breadcrumb/Breadcrumb';
import Meta from '@/components/Common/Meta/Meta';
import CompareProductsPage from '@/components/CompareProductsPage/CompareProductsPage';
import {useAppSelector } from '@/redux/hook';
import React, { useEffect } from 'react';

const CompareProducts = () => {
    const listId = useAppSelector(state => state.app.compare_products)
    return (
        <div>
            <Meta title={"So sánh sản phẩm"} />
            <Breadcrumb title={"So sánh sản phẩm"} />
            <CompareProductsPage listIdProducts = {listId}/>
        </div>
    );
};

export default CompareProducts;