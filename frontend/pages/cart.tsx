import CartPage from '@/components/CartPage/CartPage';
import Breadcrumb from '@/components/Common/Breadcrumb/Breadcrumb';
import Meta from '@/components/Common/Meta/Meta';
import { useAppSelector } from '@/redux/hook';
import React from 'react';

const Cart = () => {
    const {carts} = useAppSelector(state=>state.user)
    return (
        <div>
            <Meta title={"Giỏ hàng"} />
            <Breadcrumb title={"Giỏ hàng"} />
            <CartPage carts={carts}/>
        </div>
    );
};

export default Cart;