import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import styles from './ResetPassword.module.scss'

const ResetPassword = () => {
       
    const formik = useFormik({
        initialValues: {
          password:'',
        },
        validationSchema: Yup.object({
            password:Yup.string().required('Password is Required'),
          }),
        onSubmit: values => {
            // console.log(values)
            // setParams({
            //     values,
            //     tokenn
            // })
        },
      });

    //   const param = () =>{
    //     dispatch(resetPassword(params))
    //   }

    return (
        <div className="reset-password-wrapper py-5 home-wrapper-2">
        <div className="row">
            <div className="col-12">
                <div className={styles.auth_card}>
                    <h3 className='text-center mb-4'>Comfirm Password</h3>
                    <form action="" className='d-flex flex-column gap-2' onSubmit={formik.handleSubmit}>
                        <div>
                            <input type="password" name='password' placeholder='Password' className={`${styles.form_control} form-control`} onChange={formik.handleChange} value={formik.values.password} />
                        </div>
                        <div className="error">
                        {
                            formik.touched.password && formik.errors.password ? (
                                <div>{formik.errors.password}</div>
                            ) : null
                        }
                        </div>
                        <div>
                            <input type="password" name='password' placeholder='Comfirm Password' className={`${styles.form_control} form-control`} />
                        </div>
                        <div className="mt-3 d-flex flex-column justify-content-center gap-15 align-items-center">
                            {/* <button className='button border-0' type='submit' onClick={()=>param()}>Submit</button> */}
                            <button type='submit' className={`${styles.button} button border-0`}>Submit</button>
                            <Link href='/login' className='forgot'>Cancel</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
};

export default ResetPassword;