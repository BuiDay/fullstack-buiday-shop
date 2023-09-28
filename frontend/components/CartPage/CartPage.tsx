import React from 'react';
import styles from './CartPage.module.scss'

import Link from 'next/link';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
import { ICart } from '@/redux/features/InterfaceReducer';
import CartItem from './CartItem';

interface IProps{
    carts:{
        ProductsCarts:ICart[],
        productsTotal?:number,        
      },
}

const Cart:React.FC<IProps> = ({carts}) => {
    const {ProductsCarts} = carts
    return (
        <>
            <div className="cart_wrapper home_wrapper_2 py-5">
                {carts  ? (
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <table className='w-100'>
                                <thead className={styles.cart_header}>
                                    <tr className={`text-center`}>
                                        <td className={`${styles.cart_col_4} pb-3`}><h4>Sản phẩm</h4></td>
                                        <td className={`${styles.cart_col_2} pb-3`}></td>
                                        <td className={`${styles.cart_col_2} pb-3`}><h4>Giá</h4></td>
                                        <td className={`${styles.cart_col_3} pb-3`}><h4>Số lượng</h4></td>
                                        <td className={`${styles.cart_col_2} pb-3`}><h4>Tổng cộng</h4></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        ProductsCarts && ProductsCarts.map((item,index)=>{
                                            return(
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
                                    {/* <h4 className='mb-0'>Sub Total: {cartState.cartTotalAmount}</h4> */}
                                    <h4 className='mb-0'>Sub Total: 4</h4>
                                    <p>Taxes and shipping calculated at checkout</p>
                                    {/* <Link to="/checkout" className='button' onClick={()=>{addCart()}}>Checkout</Link> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                ):
                <div className='text-center' style={{height:"300px"}}><h5>Không có sản phẩm nào</h5></div>
                } 

            </div>
        </>
    );
};

export default Cart;