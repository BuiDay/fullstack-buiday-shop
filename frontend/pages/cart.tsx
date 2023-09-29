import CartPage from '@/components/CartPage/CartPage';
import Breadcrumb from '@/components/Common/Breadcrumb/Breadcrumb';
import Meta from '@/components/Common/Meta/Meta';
import Modal from '@/components/Common/Modal/Modal';
import { useAppSelector } from '@/redux/hook';
import { wrapper } from '@/redux/store';
import { GetServerSideProps } from 'next';
import React from 'react';

const Cart = () => {
    const {wishlist,carts} = useAppSelector(state=>state.user)
    console.log(carts)
    return (
        <div>
            <Meta title={"Giỏ hàng"} />
            <Breadcrumb title={"Giỏ hàng"} />
            <CartPage carts={carts}/>
        </div>
    );
};

export default Cart;