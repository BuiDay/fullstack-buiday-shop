import React, { useCallback, useEffect, useState } from 'react';
import { AiFillDelete } from 'react-icons/ai'
import { AiOutlinePlus } from 'react-icons/ai'
import { GrFormSubtract } from 'react-icons/gr'
import styles from '../../styles/CartPage.module.scss'
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import productService from '@/redux/features/products/productsService';
import Image from 'next/image';
import ModalConfirm from '../Common/ModalConfirm/ModalConfirm';
import { deleteCart, getAddCard } from '@/redux/features/user/userSilce';
import userService from '@/redux/features/user/userService';
import appService from '@/redux/features/app/appService';

const CartItem = ({ listCarts, view }: any) => {
    const { color, count, product, price } = listCarts;
    const dispatch = useAppDispatch();
    const [isShowModal, setIsShowModalConfirm] = useState(false);
    const [productId, setProductId] = useState("")
    const [itemProduct, setItemProduct] = useState<any>(undefined);
    const { carts } = useAppSelector(state => state.user)
    const { isLoggedIn } = useAppSelector((state) => state?.auth || {});

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

    const handleIncreaseCount = async (id?: string) => {
        const tempCart = { ...listCarts, count: listCarts.count + 1 }
        dispatch(getAddCard(tempCart));
    }

    const handleDecreaseCount = (id: string) => {
        setProductId(id)
        const tempCart = { ...listCarts, count: listCarts.count - 1 }
        dispatch(getAddCard(tempCart));
    }

    const handleDeleteCart = (id: string) => {
        if (isLoggedIn) {
            setIsShowModalConfirm(true);
            setProductId(id)
        } else {
            setIsShowModalConfirm(true);
            setProductId(listCarts)
        }

    }

    useEffect(() => {
        if (count < 1) {
            deleteProduct()
        }
    }, [count])

    const deleteProduct = async () => {
        if (isLoggedIn) {
            dispatch(deleteCart({ productId: productId }));
        } else {
            dispatch(deleteCart({ productId: listCarts.productId }));
        }

        setIsShowModalConfirm(false)
        let cartTotal = 0;
        let tempCart = [...carts.products]
        tempCart = tempCart.filter((item) => {
            return item.productId !== productId
        });
        tempCart.forEach(item => {
            cartTotal = cartTotal + item.price * item.count
        })
        if (isLoggedIn) {
            const res: { code?: number, data?: any } = await userService.apiAddCart(tempCart) || " "
            if (res.code === 1) {
                // console.log(res)
            }
        }
    }

    useEffect(() => {
        if (isLoggedIn) {
            setItemProduct(product)
        } else {
            const handleProductAPI = async () => {
                const res: any = await productService.getProductById({ id: listCarts.productId })
                if (res.code === 1) {
                    setItemProduct(res.data)
                }
            }
            handleProductAPI()
        }
    }, [])

    return (
        <>
            {
                view === 1
                    ?
                    <tr className={`${styles.cart_data}`}>
                        <td className='py-3'>
                            <div className='ps-3 d-flex gap-2 align-items-center'>
                                <div>
                                    {
                                        itemProduct?.images[0] && <Image src={itemProduct?.images[0]} height={70} width={70} alt='img-product' />
                                    }
                                </div>
                                <div>
                                    {itemProduct?.title}
                                </div>
                            </div>
                        </td>
                        <td className='py-3 text-center'>
                            <p>{color ? color : "Cơ bản"}</p>
                        </td>
                        <td className='text-center py-3'>
                            <h5 className={styles.cart_data_price}>{handlePrice(itemProduct?.price, itemProduct?.discount)}</h5>
                        </td>
                        <td className='py-3'>
                            <div className='d-flex align-items-center justify-content-center py-3 gap-3'>
                                <div className='d-flex align-items-center'>
                                    <AiOutlinePlus style={{ cursor: "pointer" }} onClick={() => handleIncreaseCount(itemProduct?._id)} />
                                    <input value={count} disabled type="text" className='form-control text-center' style={{ width: "60px" }} />
                                    <GrFormSubtract style={{ cursor: "pointer" }} onClick={() => handleDecreaseCount(itemProduct?._id)} />
                                </div>
                                <div className={styles.icon_del} onClick={() => handleDeleteCart(itemProduct?._id)}>
                                    <AiFillDelete />
                                </div>
                            </div>
                        </td>
                        <td className='text-center py-3'>
                            <h5 className={styles.cart_data_price}>{<p className={`${styles.price}`}>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price * count)}</p>}</h5>
                        </td>
                    </tr>
                    : <div className='align-items-center d-md-none d-flex border-bottom py-2'>
                        <div className='col-3'>
                            <div>
                                {
                                    itemProduct?.images[0] && <Image src={itemProduct?.images[0]} height={70} width={70} alt='img-product' />
                                }
                            </div>
                        </div>
                        <div className='col-9'>
                            <div style={{ fontSize: "14px" }}>
                                {itemProduct?.title}
                            </div>
                            <div className='d-flex align-items-center justify-content-between'>
                                <div className='d-flex align-items-center justify-content-center py-3 gap-3'>
                                    <div className='d-flex align-items-center'>
                                        <AiOutlinePlus style={{ cursor: "pointer" }} onClick={() => handleIncreaseCount(itemProduct?._id)} />
                                        <input value={count} disabled type="text" className='form-control text-center' style={{ width: "40px" }} />
                                        <GrFormSubtract style={{ cursor: "pointer" }} onClick={() => handleDecreaseCount(itemProduct?._id)} />
                                    </div>
                                    <div className={styles.icon_del} onClick={() => handleDeleteCart(itemProduct?._id)}>
                                        <AiFillDelete />
                                    </div>
                                </div>
                                <div>
                                    <h5 style={{ fontSize: "16px" }} className={styles.cart_data_price}>{<p className={`${styles.price}`}>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price * count)}</p>}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
            }
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