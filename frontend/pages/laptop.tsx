import Breadcrumb from '@/components/Common/Breadcrumb/Breadcrumb';
import Meta from '@/components/Common/Meta/Meta';
import LaptopPage from '@/components/LaptopPage/LaptopPage';
import React from 'react';

const mobile = () => {
    return (
        <div>
            <Meta title={"Điện thoại"} />
            <Breadcrumb title={"Điện thoại"} />
            <LaptopPage />
        </div>
    );
};

export default mobile;