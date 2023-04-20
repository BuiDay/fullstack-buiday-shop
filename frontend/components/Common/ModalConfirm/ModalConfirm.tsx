import React from 'react';
// import { IEditPost } from '../../pages/system/ManagePost';
// import Button from '../Button/Button';
import styles from './ModalComfirm.module.scss'

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
                className='bg-white rounded-md relative p-5'
            >
                <h1 className='text-center text-lg'>{title}</h1>
                <div className='flex justify-center gap-5 mt-10'>
                    {/* <Button text="Có" bgColor='bg-secondary2' textColor="text-white" onClick={()=>handle()}></Button>
                    <Button text="Không" bgColor='bg-green-500' textColor="text-white" onClick={()=>handelShow()}></Button> */}
                </div>
            </div>
        </div>
    );
};

export default ModalConfirm;