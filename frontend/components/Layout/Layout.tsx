import React,{ReactNode } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

type Props = {
    children: ReactNode;
}

const Layout = ({children}:Props) => {
    const getIsLogin= localStorage.getItem("persist:auth")
        ? JSON.parse(localStorage.getItem("persist:auth")||"")?.isLoggedIn  : null
    return (
        <>
            <Header isLoggedIn={getIsLogin}/>
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;