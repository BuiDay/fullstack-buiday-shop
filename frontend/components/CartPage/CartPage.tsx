import React from 'react';
import styles from './CartPage.module.scss'
import Breadcrumb from "../Common/Breadcrumb/Breadcrumb";
import Meta from "../Common/Meta/Meta";
import { AiFillDelete } from 'react-icons/ai'
import Link from 'next/link';
import { AiOutlinePlus } from 'react-icons/ai'
import { GrFormSubtract } from 'react-icons/gr'
import { useDispatch, useSelector } from 'react-redux';
// import { creCart,desCart,removeCart,addCartApi} from '../../features/cart/cartSlice';
import { useEffect } from 'react';
import { useState } from 'react';

interface IProps{
    carts?:{}[]
}

const Cart:React.FC<IProps> = ({carts}) => {
    console.log(carts)
    return (
        <>
            <div className="cart_wrapper home_wrapper_2 py-5">
                {carts && carts.length!==0 ? (
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <table className='w-100'>
                                <thead className={styles.cart_header}>
                                    <tr className={`text-center`}>
                                        <td className={`${styles.cart_col_4} pb-3`}><h4>Product</h4></td>
                                        <td className={`${styles.cart_col_2} pb-3`}></td>
                                        <td className={`${styles.cart_col_2} pb-3`}><h4>Price</h4></td>
                                        <td className={`${styles.cart_col_3} pb-3`}><h4>Quantity</h4></td>
                                        <td className={`${styles.cart_col_2} pb-3`}><h4>Total</h4></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        carts.map((item,index)=>{
                                            return(
                                                <tr className={styles.cart_data}>
                                                <td></td>
                                                <td className='py-3'>
                                                    <p>asfdsaf</p>
                                                    <p>Color:afdsdaf</p>
                                                </td>
                                                <td className='text-center py-3'>
                                                    <h5 className={styles.cart_data_price}>$ 100</h5>
                                                </td>
                                                <td className='d-flex align-items-center justify-content-center py-3 gap-3'>
                                                    <div className='d-flex align-items-center'>
                                                        <AiOutlinePlus style={{ cursor: "pointer" }} />
                                                        <input disabled type="text" className='form-control text-center' style={{ width: "60px" }} />
                                                        <GrFormSubtract style={{ cursor: "pointer" }} />
                                                    </div>
                                                    <div className={styles.icon_del}>
                                                        <AiFillDelete />
                                                    </div>
                                                </td>
                                                <td className='text-center py-3'>
                                                    <h5 className={styles.cart_data_price}>$ 100</h5>
                                                </td>
                                            </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                        <div className="col-12 py-4">
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