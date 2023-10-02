import { ICart } from '@/redux/features/InterfaceReducer';
import React, { useState } from 'react';
import { BiArrowBack } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux';
import CheckoutItem from './CheckoutItem';

interface IProps {
    carts?: {
        products?: ICart[],
        productsTotal?: number,
        cartTotal?: number
    },
}

const Checkout: React.FC<IProps> = ({ carts }) => {
    const dispatch = useDispatch();
    const [discount, setDiscout] = useState("")
  
        // useEffect(() => {
        //     if (carts?.products) {
        //         carts.products.forEach((item: any) => {
        //             handleGetProduct(item.product)
        //         })
        //     }
        // }, [carts])
    return (
        <>
            <div className="checkout-wrapper py-4 home_wrapper_2">
                <div className="container-xxl">
                    <div className="row justify-content-between">
                        <div className="col-6">
                            <div className="checkout-left-data">
                                <h4 className='title'>Thông tin liên lạc</h4>
                                {/* <p className='user-details'>buivanduynhat@gmail.com</p> */}
                                <form action="" className='d-flex flex-wrap gap-15 justify-content-between mt-4'>
                                    <div className='flex-grow-1'>
                                        <input type="text" className='form-control' placeholder='Tên người nhận' />
                                    </div>
                                    <div className='w-100'>
                                        <input type="text" className='form-control' placeholder='Address' />
                                    </div>
                                    <div className='w-100'>
                                        <select
                                            name=""
                                            className='form-control form-select'
                                            id="">
                                            <option value="">
                                                Select country
                                            </option>
                                        </select>
                                    </div>
                                    <div className='w-100'>
                                        <input type="text" className='form-control' placeholder='Apartment' />
                                    </div>
                                    <div className='flex-grow-1'>
                                        <input type="text" className='form-control' placeholder='City' />
                                    </div>
                                    <div className='flex-grow-1'>
                                        <select
                                            name=""
                                            className='form-control form-select'
                                            id="">
                                            <option value="">
                                                Select State
                                            </option>
                                        </select>
                                    </div>
                                    <div className='w-75'>
                                        <input type="text" className='form-control' placeholder='ZipCode' />
                                    </div>
                                    <div className=''>
                                        <div className='button border-0'>Apply</div>
                                    </div>
                                    <div className="w-100 mt-3">
                                        {/* <div className="d-flex justify-content-between">
                                            <Link to="/cart" className='text-dark'>
                                                <BiArrowBack className='me-2' />
                                                Return to Cart
                                            </Link>
                                            <div className='button' onClick={()=>order()}>Continue to Shipping</div>
                                        </div> */}
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-5">
                            {
                                carts?.products && carts.products.map((item:any, key) => {
                                    return (
                                       <CheckoutItem product={item}/>
                                    )
                                })
                            }
                            <div className='d-flex justify-content-between align-items-center py-4 border-top'>
                                <p className='total'>Subtotal</p>
                                <p className='total-price'>getCartState</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center pb-4 border-bottom'>
                                <p className='total'>Discount</p>
                                <p className='total-price'>getCartState</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-cente py-3'>
                                <h4 className='total'>Total</h4>
                                <h5 className='total-price'>getCartState</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Checkout;