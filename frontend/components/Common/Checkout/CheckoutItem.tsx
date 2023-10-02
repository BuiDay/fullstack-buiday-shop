import { ICart } from '@/redux/features/InterfaceReducer';
import productService from '@/redux/features/products/productsService';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface IProps {
    product?:any;
}

const CheckoutItem:React.FC<IProps> = ({product}) => {
    const [getProduct, setProduct] = useState<any>([]);

    const handleGetProduct = async (id: string) => {
        const res: { code?: number, data?: any } = await productService.getProductById({id}) || ""
        if (res.code === 1) {
            setProduct(res?.data)
        }
     }

     useEffect(()=>{
        handleGetProduct(product.product)
     },[])
    return (
        <div className='d-flex justify-content-between align-items-center pb-4'>
            <div className='w-75 d-flex gap-20'>
                <div className='w-25 border position-relative'>
                    <span style={{ top: "-10px", right: "-10px" }} className="badge bg-secondary text-white rounded-circle position-absolute p-2">{product?.count}</span>
                    {
                        getProduct.images && <img className='img-fluid' src={getProduct.images[0] && getProduct.images[0]} alt="" width={100} height={100} />
                    }
                
                </div>
                <div className='w-75'>
                    <p className='total'>{getProduct?.title}</p>
                    <p className='total-price'>Color: {product.color ? product.color : "Cơ bản"}</p>
                </div>
            </div>
            <div className='w-25 text-end'>
                <h5 className='total-price fw-bold text-danger'>
                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.count * product.price || 0)}
                </h5>
            </div>
        </div>
    );
};

export default CheckoutItem;