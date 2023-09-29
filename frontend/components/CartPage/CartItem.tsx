import React, { useCallback, useEffect, useState } from 'react';
import { AiFillDelete } from 'react-icons/ai'
import { AiOutlinePlus } from 'react-icons/ai'
import { GrFormSubtract } from 'react-icons/gr'
import styles from './CartPage.module.scss'
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import productService from '@/redux/features/products/productsService';
import Image from 'next/image';
import ModalConfirm from '../Common/ModalConfirm/ModalConfirm';
import { deleteCart } from '@/redux/features/user/userSilce';

const CartItem = ({ listCarts }: any) => {
    const { id, color, count } = listCarts;
    const dispatch = useAppDispatch();
    const [isCount, setCount] = useState(Number(count))
    const [product, setProduct] = useState<any>();
    const { cart } = useAppSelector(state => state.app)
    const [isShowModal, setIsShowModalConfirm] = useState(false);
    const [productId, setProductId] = useState("")

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

    const handleMinusCount = (id:string) => {
        setProductId(id)
        if (isCount > 0) {
            setCount((pre) => pre - 1)
        }else{
            setCount(0);
        }
    }

    const handleAddCount = () => {
        setCount((pre) => pre + 1)
    }

    useEffect(() => {
        handleGetProduct(id)
    }, [cart])

    useEffect(()=>{
        if(isCount === 0){
            dispatch(deleteCart({ id: productId }))
        }
    },[isCount])

    const handleGetProduct = useCallback(async (id: string) => {
        const res: { code?: number, data?: any } = await productService.getProductById({ id }) || ""
        if (res.code === 1) {
            setProduct(res.data)
        }
    }, [])

    const handleTotalProduct = (price: number, discount: number) => {
        let tempPrice = 0
        if (discount !== 0) {
            tempPrice = discount * isCount
        } else {
            tempPrice = price * isCount
        }
        return <>
            <p className={`${styles.price}`}>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(tempPrice)}</p>
        </>
    }

    const handleDeleteCart = (id: string) => {
        setIsShowModalConfirm(true);
        setProductId(id)
    }

    const deleteProduct = () => {
        dispatch(deleteCart({ id: productId }))
        setIsShowModalConfirm(false)
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
                            <AiOutlinePlus style={{ cursor: "pointer" }} onClick={()=>handleAddCount()} />
                            <input value={isCount} disabled type="text" className='form-control text-center' style={{ width: "60px" }} />
                            <GrFormSubtract style={{ cursor: "pointer" }} onClick={()=>handleMinusCount(product?._id)} />
                        </div>
                        <div className={styles.icon_del} onClick={() => handleDeleteCart(product?._id)}>
                            <AiFillDelete />
                        </div>
                    </div>
                </td>
                <td className='text-center py-3'>
                    <h5 className={styles.cart_data_price}>{handleTotalProduct(product?.price, product?.discount)}</h5>
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