import Breadcrumb from '@/components/Common/Breadcrumb/Breadcrumb';
import Meta from '@/components/Common/Meta/Meta';
import ResetPassword from '@/components/ResetPassword/ResetPassword';
import React from 'react';

const resetPassword = () => {
    return (
        <div>
            <Meta title={"Reset Password"} />
            <Breadcrumb title={"Reset Password"} />
            <ResetPassword />
        </div>
    );
};

export default resetPassword;