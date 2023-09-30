import React,{ReactNode, useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';

type Props = {
    children: ReactNode;
}
import dynamic from 'next/dynamic';
const Header = dynamic(()=>import("../Header/Header"),{
  ssr:false
})

const Footer = dynamic(()=>import("../Footer/Footer"),{
    ssr:false
})

const Layout = ({children}:Props) => {
    const getIsLogin:any = useCallback(()=>{
        if( localStorage.getItem("persist:auth"))
            return JSON.parse(localStorage.getItem("persist:auth")||"")?.isLoggedIn
        else
            return false
    },[])

    return (
        <>
            <Header isLoggedIn={getIsLogin}/>
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;