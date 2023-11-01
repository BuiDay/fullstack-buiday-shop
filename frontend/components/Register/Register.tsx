import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import styles from '../../styles/Register.module.scss'
import authService from '@/redux/features/auth/authService';
import { IAuthRegister } from '@/redux/features/InterfaceReducer';
import Swal from 'sweetalert2'
import { useRouter } from 'next/router';


interface IResponseRegister {
    code?: string, status?: string
}
const Register = () => {
    const router = useRouter();
    const [isError, setIsError] = useState<string>("")
    const formik = useFormik({
        initialValues: {
            name: '',
            mobile: '',
            email: '',
            password: '',
            passwordConfirmation: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('name is Required'),
            mobile: Yup.string().required('mobile is Required'),
            email: Yup.string().email('Invalid email address').required('Email is Required'),
            password: Yup.string().required('Password is Required'),
            passwordConfirmation: Yup.string().oneOf([Yup.ref('password'), ""], 'Passwords must match')
        }),
        onSubmit: values => {
            handleRegister(values)
        },
    });

    const handleRegister = async (values: IAuthRegister) => {
        setIsError("")
        try {
            const res: IResponseRegister = await authService.apiRegister(values) || {};
            if (res.code === "1") {
                Swal.fire({
                    title: 'Bạn đã đăng kí thành công',
                    icon: 'success',
                }).then(() => {
                    router.push("/login")
                })
            }
            if (res.code === "-2") {
                setIsError("Số điện thoại đã được đăng kí")
            }
        } catch (err) {
            setIsError("Tài khoản đăng kí đã tồn tại")
        }
    }

    return (
        <div className="forgot-password-wrapper py-md-5 py-1 px-4 home_wrapper_2">
            <div className="row">
                <div className="col-12">
                    <div className={styles.auth_card}>
                        <h3 className='text-center mb-4'>Tạo tài khoản</h3>
                        <form action="" className='d-flex flex-column' onSubmit={formik.handleSubmit}>
                            <div>
                                <input type="text"
                                    name='name'
                                    placeholder='Name   '
                                    className={`${styles.form_control} form-control`}
                                    onChange={formik.handleChange}
                                    value={formik.values.name}
                                />
                            </div>
                            <div className="error">
                                {
                                    formik.touched.name && formik.errors.name ? (
                                        <div>{formik.errors.name}</div>
                                    ) : null
                                }
                            </div>
                            <div className='mt-3'>
                                <input type="text"
                                    name='mobile'
                                    placeholder='Số điện thoại'
                                    className={`${styles.form_control} form-control`}
                                    onChange={formik.handleChange}
                                    value={formik.values.mobile}
                                />
                            </div>
                            <div className="error">
                                {
                                    formik.touched.mobile && formik.errors.mobile ? (
                                        <div>{formik.errors.mobile}</div>
                                    ) : null
                                }
                            </div>
                            <div className='mt-3'>
                                <input type="email"
                                    name='email'
                                    placeholder='Email'
                                    className={`${styles.form_control} form-control`}
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                />
                            </div>
                            <div className="error">
                                {
                                    formik.touched.email && formik.errors.email ? (
                                        <div>{formik.errors.email}</div>
                                    ) : null
                                }
                            </div>

                            <div className='mt-3'>
                                <input type="password"
                                    name='password'
                                    placeholder='Mật khẩu'
                                    className={`${styles.form_control} form-control`}
                                    onChange={formik.handleChange("password")}
                                    value={formik.values.password}
                                />
                            </div>
                            <div className="error">
                                {
                                    formik.touched.password && formik.errors.password ? (
                                        <div>{formik.errors.password}</div>
                                    ) : null
                                }
                            </div>
                            <div className='mt-3'>
                                <input
                                    type="password"
                                    name='passwordConfirmation'
                                    placeholder='Xác nhận lại mật khẩu'
                                    className={`${styles.form_control} form-control`}
                                    onChange={formik.handleChange("passwordConfirmation")}
                                    value={formik.values.passwordConfirmation}
                                />
                            </div>
                            <div className="error">
                                {
                                    formik.touched.passwordConfirmation && formik.errors.passwordConfirmation ? (
                                        <div>{formik.errors.passwordConfirmation}</div>
                                    ) : null
                                }
                            </div>
                            <span className="error">
                                {isError}
                            </span>
                            <div className="mt-3 d-flex flex-column justify-content-center gap-15 align-items-center">
                                <button type='submit' className={`${styles.button} button border-0`}>Tạo</button>
                                <Link href='/login' className='forgot'>Bỏ qua</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;