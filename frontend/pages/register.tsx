import Breadcrumb from '@/components/Common/Breadcrumb/Breadcrumb';
import Meta from '@/components/Common/Meta/Meta';
import Register from '@/components/Register/Register';
import React from 'react';

const register = () => {
    return (
        <div>
            <Meta title={"Register"} />
            <Breadcrumb title={"Register"} />
            <Register />
        </div>
    );
};

export default register;