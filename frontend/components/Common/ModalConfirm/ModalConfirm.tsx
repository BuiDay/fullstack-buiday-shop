import React from 'react';
// import { IEditPost } from '../../pages/system/ManagePost';
// import Button from '../Button/Button';
import styles from '../../../styles/ModalComfirm.module.scss'
import Button from '../Button/Button';
import ReactDOM from 'react-dom';

interface IProps{
    setIsShowModalConfirm?:any,
    // postEdit?:IEditPost,
    title?:string,
    onClick?:any,
    titleBtn?:string
    link?:string
}

const ModalConfirm:React.FC<IProps> = ({setIsShowModalConfirm,title,onClick,titleBtn,link}) => {
    const handelShow = ():void =>{
        setIsShowModalConfirm(false)
    }

    return ReactDOM.createPortal(
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
                <div className='d-flex justify-content-center gap-2 mt-5'>
                    <Button btnId="btn_1" text={titleBtn} bgColor='#febd69' textColor="#fff" px='px-3' py='py-2' fontSize="18px" link={link} onClick={onClick}></Button>
                    <Button btnId="btn_2" text="Không" bgColor='#232f3e' textColor="#fff" px='px-3' fontSize="18px" onClick={()=>handelShow()}></Button>
                </div>
            </div>
        </div>,document.body
    );
};

export default ModalConfirm;