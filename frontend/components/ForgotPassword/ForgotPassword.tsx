import Link from 'next/link';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from '../../styles/ForgotPassword.module.scss'
import authService from '@/redux/features/auth/authService';
import { IForgotPassword } from '@/redux/features/InterfaceReducer';
import Swal from 'sweetalert2'

const ForgotPassword = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Email không đúng!').required('Vui lòng nhập email'),
        }),
        onSubmit: values => {
            handleForgotPassword(values)
        },
    });

    const handleForgotPassword = async (values: IForgotPassword) => {
        setIsLoading(true)
        const res: { code?: string } = await authService.apiForgotPassword(values) || "";
        if (res.code === "1") {
            Swal.fire({
                title: 'Đã gửi email thành công!',
                text: 'Vui lòng vào email để đặt lại mật khẩu ',
                icon: 'success',
            })
        } else {
            Swal.fire({
                title: 'Đã gửi email không thành công!',
                text: 'Vui lòng thử lại',
                icon: 'error',
            })
        }
        setIsLoading(false)
    }


    return (
        <div className="forgot-password-wrapper py-5 home-wrapper-2">
            <div className="row">
                <div className="col-12">
                    <div className={styles.auth_card}>
                        <h3 className='text-center mb-4'>Quên mật khẩu</h3>

                        <>
                            <p className={styles.forgot_password_description}>Chúng tôi sẽ gửi mail cho bạn để đặt lại mật khẩu.</p>
                            <form action="" className='d-flex flex-column gap-1 mt-3' onSubmit={formik.handleSubmit}>
                                <div>
                                    <input type="email" name='email' placeholder='Nhập email' className={`${styles.form_control} form-control`} onChange={formik.handleChange} value={formik.values.email} />
                                </div>
                                <div className="error">
                                    {
                                        formik.touched.email && formik.errors.email ? (
                                            <div>{formik.errors.email}</div>
                                        ) : null
                                    }
                                </div>
                                <div className="mt-3 d-flex flex-column justify-content-center gap-15 align-items-center">
                                    <button type='submit' className={`${styles.button} ${styles.signup} button border-0`}>Xác nhận</button>
                                    <Link href='/reset-password' className='forgot'>Bỏ qua</Link>
                                </div>
                            </form>
                        </>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;