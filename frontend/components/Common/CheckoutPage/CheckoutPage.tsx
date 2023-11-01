import { ICart } from "@/redux/features/InterfaceReducer";
import React, { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import CheckoutItem from "./CheckoutItem";
import Link from "next/link";
import userService from "@/redux/features/user/userService";
import { useRouter } from "next/router";
import appService from "@/redux/features/app/appService";
import { useFormik } from "formik";
import * as Yup from 'yup';

interface IProps {
    carts?: {
        products?: ICart[];
        productsTotal?: number;
        cartTotal?: number;
    };
}

const Checkout: React.FC<IProps> = ({ carts }) => {
    const router = useRouter()

    const formik = useFormik({
        initialValues: {
            name: '',
            mobile: '',
            // province: '',
            // district: '',
            // ward: '',
            // street: ''
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Name is Required'),
            mobile: Yup.string().required('mobile is Required'),
            // province: Yup.string().required('province is Required'),
            // district: Yup.string().required('district is Required'),
            // ward: Yup.string().required('ward is Required'),
            // street: Yup.string().required('street is Required')
        }),
        onSubmit: values => {
            handlerOrder()
        },
    });

    const handlerOrder = async () => {
        const params = {
            amount: carts?.cartTotal || 0,
            bankCode: "",
            language: "vn"
        }
        const res = await userService.apiCreateUrlVnPay(params);
        if (res) {
            router.push(res)
        }
    }
    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);

    const [address, setAddress] = useState({
        province: "",
        district: "",
        ward: "",
        street: ""
    })

    useEffect(() => {
        const getProvince = async () => {
            const res: any = await appService.apiGetPublicProvinces();
            if (res.status === 200) {
                setProvinces(res.data.results)
            }
        }
        getProvince()
    }, [])

    const getDistrict = async (value: string) => {
        const res: any = await appService.apiGetPublicDistrict(value);
        if (res.status === 200) {
            setDistricts(res.data.results)
        }
        if (value !== "0") {
            const province: any = provinces.find((item: any) => item.province_id === value)
            setAddress({
                province: province.province_name,
                district: "",
                ward: "",
                street: ""
            })
        } else {
            setAddress({
                province: "",
                district: "",
                ward: "",
                street: ""
            })
            setDistricts([])
            setWards([])
        }
    }

    const getWard = async (value: string) => {
        const res: any = await appService.apiGetPublicWard(value);
        if (res.status === 200) {
            setWards(res.data.results)
        }
        if (value !== "0") {
            const district: any = districts.find((item: any) => item.district_id === value)
            setAddress(
                {
                    ...address,
                    district: `${district.district_name},`,
                    ward: "",
                    street: ""
                }
            )
        } else {
            setAddress({
                ...address,
                district: "",
                ward: "",
                street: ""
            })
            setWards([])
        }
    }

    const handleAddress = (value: string) => {
        if (value) {
            const ward: any = wards.find((item: any) => item.ward_id === value)
            setAddress(
                {
                    ...address,
                    ward: `${ward.ward_name},`,
                    street: ""
                }
            )
        } else {
            // setAddress("")
            setDistricts([])
            setWards([])
        }
    }


    const handleFinalAddress = (value: string) => {
        if (value) {
            setAddress(
                {
                    ...address,
                    street: `${value},`
                }
            )
        }
    }

    return (
        <>
            <div className="checkout-wrapper py-4 home_wrapper_2">
                <div className="container-xxl">
                    <div className="row justify-content-between flex-md-row flex-column-reverse">
                        <div className="col-md-6 col-12  mt-2">
                            <div className="checkout-left-data">
                                <h4 className="title">Thông tin liên lạc</h4>
                                {/* <p className='user-details'>buivanduynhat@gmail.com</p> */}
                                <form
                                    onSubmit={formik.handleSubmit}
                                    action=""
                                    className="d-flex flex-wrap gap-15 justify-content-between mt-4"
                                >
                                    <div className="w-100">
                                        <input
                                            type="text"
                                            name='name'
                                            className="form-control"
                                            placeholder="Tên người nhận"
                                            onChange={formik.handleChange}
                                            value={formik.values.name}
                                        />
                                        <div className="error">
                                            {
                                                formik.touched.name && formik.errors.name ? (
                                                    <div>{formik.errors.name}</div>
                                                ) : null
                                            }
                                        </div>
                                    </div>
                                    <div className="w-100">
                                        <input
                                            type="text"
                                            name='mobile'
                                            className="form-control"
                                            placeholder="Số điện thoại"
                                            onChange={formik.handleChange}
                                            value={formik.values.mobile}
                                        />
                                          <div className="error">
                                            {
                                                formik.touched.mobile && formik.errors.mobile ? (
                                                    <div>{formik.errors.mobile}</div>
                                                ) : null
                                            }
                                        </div>
                                    </div>

                                    <div className="flex-grow-1">
                                        <select className="form-control form-select" id="" onChange={(e) => { getDistrict(e.target.value)}}>
                                            <option value="0">Chọn thành phố, tỉnh</option>
                                            {provinces.length > 0 && provinces.map((item: any) => {
                                                return (
                                                    <option key={item.province_id} value={item.province_id}>{item.province_name}</option>
                                                )
                                            })}

                                        </select>
                                    </div>
                                    <div>

                                    </div>
                                    <div className="flex-grow-1">
                                        <select name="" className="form-control form-select" id="" onChange={(e) => { getWard(e.target.value) }}>
                                            <option value="0">Chọn phường, huyện</option>
                                            {
                                                districts && districts.map((item: any) => {
                                                    return (
                                                        <option key={item.district_id} value={item.district_id}>{item.district_name}</option>
                                                    )
                                                })
                                            }

                                        </select>
                                    </div>
                                    <div className="w-100 d-flex gap-4">
                                        <div className="flex-grow-1">
                                            <select name="" className="form-control form-select" id="" onChange={(e) => { handleAddress(e.target.value) }}>
                                                <option value="">Chọn xã</option>
                                                {
                                                    wards && wards.map((item: any) => {
                                                        return (
                                                            <option key={item.ward_id} value={item.ward_id}>{item.ward_name}</option>
                                                        )
                                                    })
                                                }

                                            </select>
                                        </div>
                                        <div className="flex-grow-1">
                                            <input
                                                onChange={(e) => handleFinalAddress(e.target.value)}
                                                type="text"
                                                className="form-control"
                                                placeholder="Số nhà, Đường"
                                            />
                                        </div>
                                    </div>

                                    <div className="w-100">
                                        <input
                                            value={`${address.street} ${address.ward} ${address.district} ${address.province}`}
                                            type="text"
                                            disabled
                                            className="form-control"
                                            placeholder="Địa chỉ"
                                        />
                                    </div>

                                    <div className="w-100 mt-3">
                                        <div className="d-flex justify-content-between">
                                            <Link href="/cart" className="text-dark">
                                                <BiArrowBack className="me-2" />
                                                Return to Cart
                                            </Link>
                                            <button className="button" type='submit' style={{ outline: "none", border: "none" }}>Thanh toán</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-5 col-12">
                            {carts?.products &&
                                carts.products.map((item: any, key) => {
                                    return <CheckoutItem product={item} key={item.productId} />;
                                })}
                            <div className="d-flex py-4 border-top">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Mã giảm giá"
                                    style={{ padding: "5px 10px", width: "80%", outline: "none" }}
                                />
                                <div className="border text-center" style={{ cursor: "pointer", padding: "5px 10px", width: "20%", borderTopRightRadius: "5px", borderBottomRightRadius: "5px", background: "var(--color-febd69)" }}>Apply</div>
                            </div>

                            <div className="d-flex justify-content-between align-items-center py-3 border-top">
                                <p className="total">Tạm tính</p>
                                <p className="total-price fw-bold" style={{ fontSize: "20px" }}>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(carts?.cartTotal || 0)}</p>
                            </div>

                            <div className="d-flex justify-content-between align-items-center pb-3 border-bottom">
                                <p className="total">Giảm giá</p>
                                <p className="total-price">0</p>
                            </div>
                            <div className="d-flex justify-content-between align-items-center py-3">
                                <h4 className="total">Tổng tiền</h4>
                                <h5 className="total-price fw-bold" style={{ fontSize: "24px" }}>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(carts?.cartTotal || 0)}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Checkout;
