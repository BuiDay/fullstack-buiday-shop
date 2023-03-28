import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import styles from './Register.module.scss'

const Register = () => {
    const formik = useFormik({
        initialValues: {
          firstName:'',
          lastName:'',
          mobile:'',
          email: '',
          password:'',
          passwordConfirmation:'',
        },
        validationSchema: Yup.object({
            firstName:Yup.string().required('firstName is Required'),
            lastName:Yup.string().required('lastName is Required'),
            mobile:Yup.string().required('mobile is Required'),
            email: Yup.string().email('Invalid email address').required('Email is Required'),
            password:Yup.string().required('Password is Required'),
            passwordConfirmation: Yup.string().oneOf([Yup.ref('password'), ""], 'Passwords must match')
            }),
        onSubmit: values => {
            // dispatch(registerUser(values))
        },
      });
    return (
        <div className="forgot-password-wrapper py-5 home-wrapper-2">
        <div className="row">
            <div className="col-12">
                <div className={styles.auth_card}>
                    <h3 className='text-center mb-4'>Create Account</h3>
                    <form action="" className='d-flex flex-column' onSubmit={formik.handleSubmit}>
                        <div>
                            <input type="text"  
                                    name='firstName' 
                                    placeholder='First Name' 
                                    className={`${styles.form_control} form-control`} 
                                    onChange={formik.handleChange} 
                                    value={formik.values.firstName}
                            />
                        </div>
                        <div className="error">
                        {
                            formik.touched.firstName && formik.errors.firstName ? (
                                <div>{formik.errors.firstName}</div>
                            ) : null
                        }
                        </div>
                        <div className='mt-3'>
                            <input type="text"  
                                    name='lastName' 
                                    placeholder='Last Name' 
                                    className={`${styles.form_control} form-control`} 
                                    onChange={formik.handleChange} 
                                    value={formik.values.lastName}
                            />
                        </div>
                        <div className="error">
                        {
                            formik.touched.lastName && formik.errors.lastName ? (
                                <div>{formik.errors.lastName}</div>
                            ) : null
                        }
                        </div>
                        <div className='mt-3'>
                            <input type="text" 
                                    name='mobile' 
                                    placeholder='Mobile' 
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
                                    placeholder='Password' 
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
                                name='comfirmPassword' 
                                placeholder='Comfirm Password' 
                                className={`${styles.form_control} form-control`} 
                                onChange={formik.handleChange} 
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
                        <div className="mt-3 d-flex flex-column justify-content-center gap-15 align-items-center">
                            <button type='submit' className={`${styles.button} button border-0`}>Create</button>
                            <Link href='/login' className='forgot'>Cancel</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Register;