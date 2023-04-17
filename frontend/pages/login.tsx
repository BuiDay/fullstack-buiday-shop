import Breadcrumb from '@/components/Common/Breadcrumb/Breadcrumb';
import Meta from '@/components/Common/Meta/Meta';
import Login from '@/components/Login/Login';
import React, { useEffect, useState } from 'react';
import {useAppSelector } from "@/redux/hook";
import { RootState } from '@/redux';
import { useRouter } from 'next/router';

const login = () => {
    // const [isLoggedIn,setIsLoggedIn] = useState<boolean>(false)
    const router = useRouter()
    const {isLoading,status,isError,isLoggedIn} = useAppSelector(state=>state.auth)
    useEffect(()=>{
        let isLogged =window.localStorage.getItem('persist:auth') && JSON.parse(window.localStorage.getItem('persist:auth')  || 'Default Value')?.isLoggedIn 
        console.log(isLogged)
       
    },[isLoading])

    return (
        <div>
            <Meta title={"Đăng nhập"} />
            <Breadcrumb title={"Đăng nhập"} />
            <Login isLoggedIn={isLoggedIn} isLoading={isLoading} status={status} isError={isError}/>
        </div>
    );
};

export default login;