import React, { useCallback, useEffect, useState } from 'react';
import { AiFillDelete } from 'react-icons/ai'
import { AiOutlinePlus } from 'react-icons/ai'
import { GrFormSubtract } from 'react-icons/gr'
import styles from './CartPage.module.scss'
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import productService from '@/redux/features/products/productsService';
import Image from 'next/image';
import ModalConfirm from '../Common/ModalConfirm/ModalConfirm';
import { deleteCart, getAddCard } from '@/redux/features/user/userSilce';
import userService from '@/redux/features/user/userService';

const CartItem = ({ listCarts }: any) => {
    const { color, count, product, price } = listCarts;
    const dispatch = useAppDispatch();
    const [isShowModal, setIsShowModalConfirm] = useState(false);
    const [productId, setProductId] = useState("")
    const { carts } = useAppSelector(state => state.user)

    const handlePrice = (price: number, discount: number) => {
        if (price !== 0 && discount !== 0)
            return <>
                <p className={`${styles.price} text-danger`}>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(discount)}</p>
                <del className={`${styles.price}`} style={{ fontSize: "14px" }}>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price)}</del>
            </>
        else if (price === 0 && discount !== 0) {
            return <>
                <p className={`${styles.price} text-danger`}>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(discount)}</p>
            </>
        }
        else
            return <>
                <div className='d-flex align-items-center justify-content-center'>
                    <p className={`${styles.price} text-danger`}>Giá liên hệ</p>
                </div>
            </>
    }

    const handleIncreaseCount = async (id?:string) => {
        const tempCart = {...listCarts,count:listCarts.count + 1}
        dispatch(getAddCard(tempCart));
    }

    const handleDecreaseCount = (id:string) => {
        setProductId(id)
        const tempCart = {...listCarts,count:listCarts.count - 1}
        dispatch(getAddCard(tempCart));
    }

    const handleDeleteCart = (id: string) => {
        setIsShowModalConfirm(true);
        setProductId(id)
    }

    useEffect(()=>{
        if(count < 1){
            deleteProduct()
        }
    },[count])

    const deleteProduct = async () => {
        dispatch(deleteCart({ productId: productId }));
        setIsShowModalConfirm(false)
        let cartTotal = 0;
        let tempCart = [ ...carts.products]
        tempCart = tempCart.filter((item)=>{
            return item.productId !== productId
        });
        tempCart.forEach(item=>{
            cartTotal = cartTotal + item.price * item.count
        })
        const res:{ code?: number, data?: any } = await userService.apiAddCart(tempCart) || " "
        if(res.code === 1){
            // console.log(res)
        }
      
    }

    return (
        <>
            <tr className={styles.cart_data}>
                <td className='py-3'>
                    <div className='ps-3 d-flex gap-2 align-items-center'>
                        <div>
                            {
                                product?.images[0] && <Image src={product?.images[0]} height={70} width={70} alt='img-product' />
                            }
                        </div>
                        <div>
                            {product?.title}
                        </div>
                    </div>
                </td>
                <td className='py-3 text-center'>
                    <p>{color ? color : "Cơ bản"}</p>
                </td>
                <td className='text-center py-3'>
                    <h5 className={styles.cart_data_price}>{handlePrice(product?.price, product?.discount)}</h5>
                </td>
                <td className='py-3'>
                    <div className='d-flex align-items-center justify-content-center py-3 gap-3'>
                        <div className='d-flex align-items-center'>
                            <AiOutlinePlus style={{ cursor: "pointer" }} onClick={()=>handleIncreaseCount(product?._id)}/>
                            <input value={count} disabled type="text" className='form-control text-center' style={{ width: "60px" }} />
                            <GrFormSubtract style={{ cursor: "pointer" }} onClick={()=>handleDecreaseCount(product?._id)} />
                        </div>
                        <div className={styles.icon_del} onClick={() => handleDeleteCart(product?._id)}>
                            <AiFillDelete />
                        </div>
                    </div>
                </td>
                <td className='text-center py-3'>
                    <h5 className={styles.cart_data_price}>{<p className={`${styles.price}`}>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price * count)}</p>}</h5>
                </td>
            </tr>
            {
                isShowModal &&
                <ModalConfirm setIsShowModalConfirm={setIsShowModalConfirm}
                    onClick={deleteProduct}
                    title='Bạn có muốn xoá sản phẩm này khỏi giỏ hàng ?'
                    titleBtn="Xoá" />
            }
        </>
    );
};

export default CartItem;