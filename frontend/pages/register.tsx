import Breadcrumb from '@/components/Common/Breadcrumb/Breadcrumb';
import Meta from '@/components/Common/Meta/Meta';
import RegisterPage from '@/components/Register/Register';
import React from 'react';

const Register = () => {
    return (
        <div>
            <Meta title={"Đăng kí"} />
            <Breadcrumb title={"Đăng kí"} />
            <RegisterPage />
        </div>
    );
};

export default Register;