import Breadcrumb from '@/components/Common/Breadcrumb/Breadcrumb';
import Meta from '@/components/Common/Meta/Meta';
import ForgotPassword from '@/components/ForgotPassword/ForgotPassword';
import React from 'react';

const forgotPassword = () => {
    return (
        <>
            <Meta title={"Quên mật khẩu"} />
            <Breadcrumb title={"Quên mật khẩu"} />
            <ForgotPassword />
        </>
    );
};

export default forgotPassword;