import React, { useEffect, useState } from 'react';
import styles from '../../styles/CartPage.module.scss'
import Link from 'next/link';
import { ICart } from '@/redux/features/InterfaceReducer';
import dynamic from 'next/dynamic';
import { useAppSelector } from '@/redux/hook';
import userService from '@/redux/features/user/userService';
import ModalConfirm from '../Common/ModalConfirm/ModalConfirm';
import { useRouter } from 'next/navigation';

const CartItem = dynamic(() => import("./CartItem"), {
    loading: () => <p>Loading...</p>,
})


interface IProps {
    carts: {
        products: ICart[],
        productsTotal?: number,
        cartTotal?: number
    },
    getCart?: {
        cartTotal: number,
        orderby: string,
        products: ICart[],
        productsTotal: number
    }
}

const Cart: React.FC<IProps> = ({ carts }) => {
    const [isShowModalConfirm, setIsShowModalConfirm] = useState<boolean>(false)
    const { isLoggedIn } = useAppSelector((state) => state?.auth || {});
    const router = useRouter()
    useEffect(() => {
        if (isLoggedIn) {
            handleAddCartApi();
        }
    }, [carts])

    const handleAddCartApi = () => {
        if (carts.products.length > 0) {
            const getCarts = async () => {
                const res: { code?: number, data?: any } = await userService.apiAddCart(carts.products) || ""
                if (res.code === 1) {
                    console.log(res)
                }
            }
            getCarts()
        }
    }

    const handleCheckout = () => {
        if (isLoggedIn) {
            setIsShowModalConfirm(false)
            router.push('/checkout')
        } else {
            setIsShowModalConfirm(true)
        }
    }

    return (
        <>
            <div className="cart_wrapper home_wrapper_2 py-5">
                {carts && carts?.products.length > 0 ? (
                    <div className="container-xxl">
                        <div className="row">
                            <div className="col-12 d-md-block d-none">
                                <table className='w-100'>
                                    <thead className={`${styles.cart_header}`}>
                                        <tr className={`text-center`}>
                                            <td className={`${styles.cart_col_4} pb-3`}><h4>Sản phẩm</h4></td>
                                            <td className={`${styles.cart_col_2} pb-3`}><h4>Màu sắc</h4></td>
                                            <td className={`${styles.cart_col_2} pb-3`}><h4>Giá</h4></td>
                                            <td className={`${styles.cart_col_3} pb-3`}><h4>Số lượng</h4></td>
                                            <td className={`${styles.cart_col_3} pb-3`}><h4>Tổng cộng</h4></td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            carts?.products.length > 0 && carts?.products.map((item, index) => {
                                                return (
                                                    <CartItem listCarts={item} key={index} view={1}/>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                {
                                    carts?.products.length > 0 && carts?.products.map((item, index) => {
                                        return (
                                            <CartItem listCarts={item} key={index} />
                                        )
                                    })
                                }
                            </div>
                            <div className="col-12 py-5 ">
                                <div className=''>
                                    <span className='button border-0' onClick={() => window.history.back()}>Tiếp tục mua sắm</span>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className='d-flex justify-content-between align-items-baseline'>
                                    <p></p>
                                    <div className='d-flex flex-column gap-15 align-items-end'>
                                        <h4 className='mb-0 text-end'>Tổng cộng:
                                            <span className='fw-bold text-danger'> {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(carts.cartTotal || 0)}</span>
                                        </h4>
                                        {/* <p>Thuế và phí ship sẽ được tính ở phần thanh toán</p> */}
                                        <div className='button' onClick={handleCheckout}>Thanh toán</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                ) :
                    <div className='text-center' style={{ height: "300px" }}><h5>Không có sản phẩm nào</h5></div>
                }

                {isShowModalConfirm && <ModalConfirm
                    setIsShowModalConfirm={setIsShowModalConfirm}
                    titleBtn='Đăng nhập'
                    link="/login"
                    // postEdit = {postEdit} 
                    // handle = {handleDelete}
                    title='Bạn cần phải đăng nhập để thanh toán?'
                />}
            </div>
        </>
    );
};

export default Cart;