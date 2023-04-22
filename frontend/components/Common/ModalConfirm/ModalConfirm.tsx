import React from 'react';
// import { IEditPost } from '../../pages/system/ManagePost';
// import Button from '../Button/Button';
import styles from './ModalComfirm.module.scss'
import Button from '../Button/Button';

interface IProps{
    setIsShowModalConfirm?:any,
    // postEdit?:IEditPost,
    title?:string,
    handle?:any,
}

const ModalConfirm:React.FC<IProps> = ({setIsShowModalConfirm,title,handle}) => {
    const handelShow = ():void =>{
        setIsShowModalConfirm(false)
    }

    return (
        <div 
        className={styles.body_modal}
        onClick={() => { setIsShowModalConfirm(false) }}
        >
            <div
                onClick={(e) => {
                    e.stopPropagation()
                }}
                className='bg-white rounded-4 relative p-4'
            >
                <h1 className='text-center fs-2 fw-normal'>{title}</h1>
                <div className='d-flex justify-content-center gap-2 mt-3'>
                    <Button btnId="btn_1" text="Đăng nhập" bgColor='#febd69' textColor="#fff" px='px-3' py='py-2' fontSize="18px" link='/login'></Button>
                    <Button btnId="btn_2" text="Không" bgColor='#232f3e' textColor="#fff" px='px-3' fontSize="18px" onClick={()=>handelShow()}></Button>
                </div>
            </div>
        </div>
    );
};

export default ModalConfirm;