import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import styles from '../../styles/ResetPassword.module.scss'
import authService from '@/redux/features/auth/authService';
import Swal from 'sweetalert2'
import { useRouter } from 'next/router';

interface IProps{
    token?:string,
}

const ResetPassword:React.FC<IProps> = ({token}) => {
    const router = useRouter()
    const formik = useFormik({
        initialValues: {
          password:'',
          passwordConfirmation:""
        },
        validationSchema: Yup.object({
            password:Yup.string().required('Vui lòng nhập mật khẩu'),
            passwordConfirmation: Yup.string().oneOf([Yup.ref('password'), ""], 'Mật khẩu không trùng khớp')
          }),
        onSubmit: values => {
            let params = {
                token,
                values
            }
            handleResetPassword(params)
        },
      });

      const handleResetPassword = async (params:{token?:string,values:{password:string,passwordConfirmation: string}})=>{
        const res:any = await authService.apiResetPassword(params)
            if (res.code === "1") {
                Swal.fire({
                    title: 'Đổi mật thành công!',
                    icon: 'success',
                }).then(()=>{
                    router.push("/login")
                })
            } 
            if (res.code === "-1") {
                Swal.fire({
                    title: 'Đổi mật khẩu không thành công!',
                    text: 'Vui lòng thử lại',
                    icon: 'error',
                })
            }
    
      }

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
                            <input type="password" name='passwordConfirmation' placeholder='Comfirm Password' className={`${styles.form_control} form-control`} onChange={formik.handleChange} value={formik.values.passwordConfirmation}/>
                        </div>
                        <div className="error">
                        {
                            formik.touched.passwordConfirmation && formik.errors.passwordConfirmation ? (
                                <div>{formik.errors.passwordConfirmation}</div>
                            ) : null
                        }
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