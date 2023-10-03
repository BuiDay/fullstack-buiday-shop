import CartPage from '@/components/CartPage/CartPage';
import Breadcrumb from '@/components/Common/Breadcrumb/Breadcrumb';
import Meta from '@/components/Common/Meta/Meta';
import userService from '@/redux/features/user/userService';
import { getCart } from '@/redux/features/user/userSilce';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import React, { useEffect, useState } from 'react';

const Cart = () => {
    const { isLoggedIn } = useAppSelector((state) => state?.auth || {});
    const {carts} = useAppSelector(state=>state.user)
    const dispatch = useAppDispatch();
    useEffect(()=>{
        if(isLoggedIn){
            const getCarts = async () => {
                const res: { code?: number, data?: any } = await userService.apiGetCart() || ""
                if(res.code === 1)
                {
                  dispatch(getCart(res.data))
                }
            }
            getCarts()
        }
      },[])
    
    return (
        <div>
            <Meta title={"Giỏ hàng"} />
            <Breadcrumb title={"Giỏ hàng"} />
            <CartPage carts={carts}/>
        </div>
    );
};

export default Cart;