import Link from 'next/link';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from './ForgotPassword.module.scss'

const ForgotPassword = () => {
    const formik = useFormik({
        initialValues: {
          email: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Email is Required'),
          }),
        onSubmit: values => {
            // dispatch(forgotPassword(values))
            // dispatch(resetState())
        },
      });
    // const {isLoading, isError, isSuccess, message} = useSelector(state=>state.auth)
    const [isSuccess, setisSuccess] = useState(false)
    return (
        <div className="forgot-password-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <div className={styles.auth_card}>
                            <h3 className='text-center mb-4'>Reset Your Password</h3>
                            {
                                !isSuccess ? (
                                <>
                                <p className={styles.forgot_password_description}>We will send you an email to reset your password.</p>
                                <form action="" className='d-flex flex-column gap-1 mt-3' onSubmit={formik.handleSubmit}>
                                <div>
                                    <input type="email" name='email' placeholder='Email' className={`${styles.form_control} form-control`}  onChange={formik.handleChange} value={formik.values.email}/>
                                </div>
                                <div className="error">
                                {
                                    formik.touched.email && formik.errors.email ? (
                                        <div>{formik.errors.email}</div>
                                    ) : null
                                }
                                </div>
                                <div className="mt-3 d-flex flex-column justify-content-center gap-15 align-items-center">
                                    <button type='submit' className={`${styles.button} ${styles.signup} button border-0`}>Submit</button>
                                    <Link href='/reset-password' className='forgot'>Cancel</Link>
                                </div>
                            </form>
                                
                                </>    
                                ) : <p className={styles.forgot_password_description}>Check email to reset your password.</p>
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default ForgotPassword;