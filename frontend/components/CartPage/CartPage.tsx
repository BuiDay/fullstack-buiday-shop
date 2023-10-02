import React from 'react';
import styles from './CartPage.module.scss'
import Link from 'next/link';
import { ICart } from '@/redux/features/InterfaceReducer';
import dynamic from 'next/dynamic';
import { useAppSelector } from '@/redux/hook';

const CartItem = dynamic(()=>import("./CartItem"), {
    loading: () => <p>Loading...</p>,
})


interface IProps {
    carts: {
        products: ICart[],
        productsTotal?: number,
        cartTotal?:number
    },
    getCart ?: {
        cartTotal:number,
        orderby:string,
        products:ICart[],
        productsTotal:number
    }
}

const Cart: React.FC<IProps> = ({ carts,getCart }) => {
    const {currentData:{data}} = useAppSelector(state=>state.user)
    const { products } = carts
    console.log(carts)
    return (
        <>
            <div className="cart_wrapper home_wrapper_2 py-5">
                {products.length > 0 ? (
                    <div className="container-xxl">
                        <div className="row">
                            <div className="col-12">
                                <table className='w-100'>
                                    <thead className={styles.cart_header}>
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
                                            products.length > 0 && products.map((item, index) => {
                                                return (
                                                    <CartItem listCarts={item} key={item.id} />
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                            <div className="col-12 py-5 ">
                                <div className=''>
                                    <Link href="/ourstore" className='button border-0'>Continue to shopping</Link>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className='d-flex justify-content-between align-items-baseline'>
                                    <p>Order special instructions</p>
                                    <div className='d-flex flex-column gap-15 align-items-end'>
                                        <h4 className='mb-0'>Tổng cộng:  
                                            <span className='fw-bold text-danger'> {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(carts.cartTotal || 0)}</span>
                                        </h4>
                                        <p>Thuế và phí ship sẽ được tính ở phần thanh toán</p>
                                        <Link href="/checkout" className='button'>Thanh toán</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) :
                    <div className='text-center' style={{ height: "300px" }}><h5>Không có sản phẩm nào</h5></div>
                }
            </div>
        </>
    );
};

export default Cart;