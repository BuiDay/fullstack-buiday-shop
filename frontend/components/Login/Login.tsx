import React from 'react';
import Link from 'next/link';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from './Login.module.scss'

const Login = () => {
    const formik = useFormik({
        initialValues: {
          email: '',
          password:''
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Email is Required'),
            password:Yup.string().required('Password is Required'),
          }),
        onSubmit: values => {
            // dispatch(login(values))
        },
      });


    return (
        <div className="login-wrapper py-5 home-wrapper-2">
        <div className="row">
            <div className="col-12">
                <div className={styles.auth_card}>
                    <h3 className='text-center mb-4'>Login</h3>
                    <form action="" className='d-flex flex-column' onSubmit={formik.handleSubmit}>
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
                        <div className='mt-4'>
                            <input type="password" name='password' placeholder='Password' className={`${styles.form_control} form-control`}  onChange={formik.handleChange} value={formik.values.password}/>
                        </div>
                        <div className="error">
                        {
                            formik.touched.password && formik.errors.password ? (
                                <div>{formik.errors.password}</div>
                            ) : null
                        }
                        </div>
                        <div className='mt-4 text-end'>
                            <Link href='/forgot-password'>Forgot Password?</Link>
                        </div>
                        <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                            <button className={`${styles.button} button border-0`} type='submit'>Login</button>
                            <Link href='/register' className={`${styles.button} button ${styles.signup}`}>Register</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Login;