import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from './Login.module.scss'
import { useAppDispatch } from '@/redux/hook';
import { login } from '@/redux/features/auth/authSilce';
import { useRouter } from 'next/router';

interface Iprops{
    isLoggedIn?:boolean,
    isLoading?:boolean,
    status?:string,
    isError?:boolean,
}

const Login:React.FC<Iprops> = ({isLoggedIn,status}) => {
    const dispatch = useAppDispatch();
    const router = useRouter()
    const [isStatus, setIsStatus] = useState<string>("")
    const formik = useFormik({
        initialValues: {
          email: '',
          password:''
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Vui lòng nhập email !'),
            password:Yup.string().required('Vui lòng nhập mật khẩu !'),
          }),
        onSubmit: values => {
            dispatch(login(values))
        },
      });

      useEffect(()=>{
        setIsStatus("")
        if(status==="Password was wrong"){
            setIsStatus("Mật khẩu không đúng")
        }else if(status === "Not found user"){
            setIsStatus("Tài khoản không tồn tại")
        }
      },[status])

    //   useEffect(()=>{
    //     if(isLoggedIn){
    //         router.push("/")
    //     }
    //   },[isLoggedIn])

    return (
        <div className="login-wrapper py-5 home_wrapper_2">
        <div className="row">
            <div className="col-12">
                <div className={styles.auth_card}>
                    <h3 className='text-center mb-4'>Đăng nhập</h3>
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
                            <input type="password" name='password' placeholder='Mật khẩu' className={`${styles.form_control} form-control`}  onChange={formik.handleChange} value={formik.values.password}/>
                        </div>
                        <div className="error">
                        {
                            formik.touched.password && formik.errors.password ? (
                                <div>{formik.errors.password}</div>
                            ) : null
                        }
                        </div>
                        <div className='mt-4 text-end'>
                            <Link href='/forgot-password'>Quên mật khẩu ?</Link>
                        </div>
                        <div className={`error ${styles.showTransiton}`}>
                            <span>{isStatus}</span>
                        </div>
                        <div className={`mt-3 d-flex justify-content-center gap-15 align-items-center`}>
                            <button className={`${styles.button} button border-0`} type='submit'>Đăng nhập</button>
                            <Link href='/register' className={`${styles.button} button ${styles.signup}`}>Đăng kí</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Login;