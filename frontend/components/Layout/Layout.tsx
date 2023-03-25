import React,{ReactNode } from 'react';
import Header from '../Header/Header';

type Props = {
    children: ReactNode;
}

const Layout = ({children}:Props) => {
    return (
        <>
            <Header />
            <main>{children}</main>
        </>
    );
};

export default Layout;