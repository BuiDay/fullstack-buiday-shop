import Breadcrumb from '@/components/Common/Breadcrumb/Breadcrumb';
import Meta from '@/components/Common/Meta/Meta';
import LoginPage from '@/components/Login/Login';
import React, { useEffect, useState } from 'react';
import {useAppSelector } from "@/redux/hook";
import { RootState } from '@/redux';
import { useRouter } from 'next/router';

const Login = () => {
    const router = useRouter()
    const {isLoading,status,isError,isLoggedIn} = useAppSelector(state=>state.auth)
    return (
        <div>
            <Meta title={"Đăng nhập"} />
            <Breadcrumb title={"Đăng nhập"} />
            <LoginPage isLoggedIn={isLoggedIn} isLoading={isLoading} status={status} isError={isError}/>
        </div>
    );
};

export default Login;