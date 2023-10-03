import { ICart } from '@/redux/features/InterfaceReducer';
import productService from '@/redux/features/products/productsService';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface IProps {
    product?:any;
}

const CheckoutItem:React.FC<IProps> = ({product}) => {
    console.log(product.product)
    return (
        <div className='d-flex justify-content-between align-items-center pb-4'>
            <div className='w-75 d-flex gap-20'>
                <div className='border position-relative'>
                    <span style={{ top: "-10px", right: "-10px" }} className="badge bg-secondary text-white rounded-circle position-absolute p-2">{product?.count}</span>
                    {
                        product?.product.images && <Image className='img-fluid' src={product?.product.images[0] && product?.product.images[0]} alt="" width={70} height={70} />
                    }
                
                </div>
                <div className='w-75'>
                    <p className='total fw-bold' style={{fontSize:"14px"}}>{product?.product?.title}</p>
                    <p className='total ' style={{fontSize:"14px"}}>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price || 0)}</p>
                    <p className='total-price' style={{fontSize:"14px"}}>Color: {product.color ? product.color : "Cơ bản"}</p>
                </div>
            </div>
            <div className='w-25 text-end'>
                <h5 className='total-price fw-bold text-danger' style={{fontSize:"18px"}}>
                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.count * product.price || 0)}
                </h5>
            </div>
        </div>
    );
};

export default CheckoutItem;