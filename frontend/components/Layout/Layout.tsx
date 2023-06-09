import React,{ReactNode, useCallback, useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useRouter } from 'next/router';

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

    // const router = useRouter();
    // useEffect(() => {
    //   const handleStart = () => { console.log(1) };
    //   const handleComplete = () => { console.log(2) };
    //   router.events.on('routeChangeStart', handleStart);
    //   router.events.on('routeChangeComplete', handleComplete);
    //   router.events.on('routeChangeError', handleComplete);
    // }, [router]);

    // useEffect(() => {
    //     const handleStart = () => { console.log(1) };
    //     const handleComplete = () => { console.log(2) };
    //     router.events.on('routeChangeStart', handleStart);
    //     router.events.on('routeChangeComplete', handleComplete);
    //     router.events.on('routeChangeError', handleComplete);
    //   }, []);
    
    return (
        <>
            <Header isLoggedIn={getIsLogin}/>
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;