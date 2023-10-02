import Breadcrumb from '@/components/Common/Breadcrumb/Breadcrumb';
import Checkout from '@/components/Common/Checkout/Checkout';
import Meta from '@/components/Common/Meta/Meta';
import { useAppSelector } from '@/redux/hook';
import React from 'react';

const checkout = () => {
    const {currentData:{data}} = useAppSelector(state=>state.user)
    return (
        <div>
            <Meta title={"Thanh toán"} />
            <Breadcrumb title={"Thanh toán"} />
            <Checkout carts={data?.cartId}/>
        </div>
    );
};

export default checkout;