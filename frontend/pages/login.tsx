import Breadcrumb from '@/components/Common/Breadcrumb/Breadcrumb';
import Meta from '@/components/Common/Meta/Meta';
import Login from '@/components/Login/Login';
import React from 'react';

const login = () => {
    return (
        <div>
            <Meta title={"Login"} />
            <Breadcrumb title={"Login"} />
            <Login />
        </div>
    );
};

export default login;