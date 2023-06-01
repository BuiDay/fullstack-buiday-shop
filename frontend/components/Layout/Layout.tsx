import React,{ReactNode, useCallback } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

type Props = {
    children: ReactNode;
}

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