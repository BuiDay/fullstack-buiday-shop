import Breadcrumb from '@/components/Common/Breadcrumb/Breadcrumb';
import Meta from '@/components/Common/Meta/Meta';
import ForgotPassword from '@/components/ForgotPassword/ForgotPassword';
import React from 'react';

const forgotPassword = () => {
    return (
        <>
            <Meta title={"Forgot Password"} />
            <Breadcrumb title={"Forgot Password"} />
            <ForgotPassword />
        </>
    );
};

export default forgotPassword;