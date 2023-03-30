import Breadcrumb from '@/components/Common/Breadcrumb/Breadcrumb';
import Meta from '@/components/Common/Meta/Meta';
import MobilePage from '@/components/MobilePage/MobilePage';
import React from 'react';

const mobile = () => {
    return (
        <div>
            <Meta title={"Điện thoại"} />
            <Breadcrumb title={"Điện thoại"} />
            <MobilePage />
        </div>
    );
};

export default mobile;