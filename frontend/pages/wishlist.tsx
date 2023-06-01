import Breadcrumb from '@/components/Common/Breadcrumb/Breadcrumb';
import Meta from '@/components/Common/Meta/Meta';
import React, { useEffect, useState } from 'react';
import {useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from '@/redux/store';
import { useRouter } from 'next/router';
import WishlistPage from '@/components/WishlistPage/WishlistPage';


const Wishlist = () => {
    const {wishlist} = useAppSelector((state: RootState) => state.user)  
    return (
        <div>
            <Meta title={"Yêu thích"} />
            <Breadcrumb title={"Yêu thích"} />
            <WishlistPage wishlistId={wishlist}/>
        </div>
    );
};

export default Wishlist;