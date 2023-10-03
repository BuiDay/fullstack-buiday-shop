import Breadcrumb from '@/components/Common/Breadcrumb/Breadcrumb';
import CheckoutPage from '@/components/Common/CheckoutPage/CheckoutPage';
import Meta from '@/components/Common/Meta/Meta';
import userService from '@/redux/features/user/userService';
import { getCart } from '@/redux/features/user/userSilce';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import React, { useEffect } from 'react';

const Checkout = () => {
    const {carts} = useAppSelector(state=>state.user);
    const dispatch = useAppDispatch();
    useEffect(()=>{
        const getCarts = async () => {
            const res: { code?: number, data?: any } = await userService.apiGetCart() || ""
            if(res.code === 1)
            {
              dispatch(getCart(res.data))
            }
        }
        getCarts()
      },[])
    return (
        <div>
            <Meta title={"Thanh toán"} />
            <Breadcrumb title={"Thanh toán"} />
            <CheckoutPage carts={carts}/>
        </div>
    );
};

export default Checkout;