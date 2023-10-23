import Breadcrumb from '@/components/Common/Breadcrumb/Breadcrumb';
import Meta from '@/components/Common/Meta/Meta';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import React, { useEffect } from 'react';
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/router';
import userService from '@/redux/features/user/userService';
const Order = () => {
    const dispatch = useAppDispatch();
    const router = useRouter();
 
    useEffect(()=>{
        if(router.query){
            const handleGetVnPay = async () => {
                const res = await userService.apiGetVnPay(router.query);
                console.log(res)
            }
            handleGetVnPay()
        }
    },[router])
    return (
        <div className=''>
            <Meta title={"Thanh toán"} />
            <Breadcrumb title={"Thanh toán"} />
            <div style={{height:"500px",background:"white"}}>
                <h1 className='text-center'>
                    Huy Giao dich thanh cong
                </h1>
            </div>
        </div>
    );
};

export default Order;