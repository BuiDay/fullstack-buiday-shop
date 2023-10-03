import { ICart } from "@/redux/features/InterfaceReducer";
import React from "react";
import { BiArrowBack } from "react-icons/bi";
import CheckoutItem from "./CheckoutItem";
import Link from "next/link";

interface IProps {
    carts?: {
        products?: ICart[];
        productsTotal?: number;
        cartTotal?: number;
    };
}

const Checkout: React.FC<IProps> = ({ carts }) => {
    return (
        <>
            <div className="checkout-wrapper py-4 home_wrapper_2">
                <div className="container-xxl">
                    <div className="row justify-content-between">
                        <div className="col-6">
                            <div className="checkout-left-data">
                                <h4 className="title">Thông tin liên lạc</h4>
                                {/* <p className='user-details'>buivanduynhat@gmail.com</p> */}
                                <form
                                    action=""
                                    className="d-flex flex-wrap gap-15 justify-content-between mt-4"
                                >
                                    <div className="flex-grow-1">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Tên người nhận"
                                        />
                                    </div>
                                    <div className="w-100">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Address"
                                        />
                                    </div>
                                    <div className="w-100">
                                        <select name="" className="form-control form-select" id="">
                                            <option value="">Select country</option>
                                        </select>
                                    </div>
                                    <div className="w-100">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Apartment"
                                        />
                                    </div>
                                    <div className="flex-grow-1">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="City"
                                        />
                                    </div>
                                    <div className="flex-grow-1">
                                        <select name="" className="form-control form-select" id="">
                                            <option value="">Select State</option>
                                        </select>
                                    </div>

                                    <div className="w-100 mt-3">
                                        <div className="d-flex justify-content-between">
                                            <Link href="/cart" className="text-dark">
                                                <BiArrowBack className="me-2" />
                                                Return to Cart
                                            </Link>
                                            <div className="button">Continue to Shipping</div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-5">
                            {carts?.products &&
                                carts.products.map((item: any, key) => {
                                    return <CheckoutItem product={item} key={item.productId}/>;
                                })}
                            <div className="d-flex py-4 border-top">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Mã giảm giá"
                                    style={{ padding: "5px 10px",width:"80%",outline:"none"}}
                                />
                                <div className="border text-center" style={{cursor:"pointer" ,padding: "5px 10px",width:"20%",borderTopRightRadius:"5px",borderBottomRightRadius:"5px",background:"var(--color-febd69)"}}>Apply</div>
                            </div>

                            <div className="d-flex justify-content-between align-items-center py-3 border-top">
                                <p className="total">Tạm tính</p>
                                <p className="total-price fw-bold" style={{fontSize:"20px"}}>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(carts?.cartTotal || 0)}</p>
                            </div>

                            <div className="d-flex justify-content-between align-items-center pb-3 border-bottom">
                                <p className="total">Giảm giá</p>
                                <p className="total-price">0</p>
                            </div>
                            <div className="d-flex justify-content-between align-items-center py-3">
                                <h4 className="total">Tổng tiền</h4>
                                <h5 className="total-price fw-bold" style={{fontSize:"24px"}}>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(carts?.cartTotal || 0)}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Checkout;
