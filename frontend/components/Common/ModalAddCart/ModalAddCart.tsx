import React, { useState } from 'react';
// import { IEditPost } from '../../pages/system/ManagePost';
// import Button from '../Button/Button';
import styles from '../../../styles/ModalAddCart.module.scss'
import Button from '../Button/Button';
import Slider from '../../Common/Slider/Slider';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import StarRatings from 'react-star-ratings';
import { AiFillCloseCircle } from 'react-icons/ai'
import { AiOutlinePlus } from 'react-icons/ai'
import { GrFormSubtract } from 'react-icons/gr'
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { getAddCard } from '@/redux/features/user/userSilce';
import ReactDOM from 'react-dom';
import userService from '@/redux/features/user/userService';
import toast from 'react-hot-toast';

interface IProps {
    setIsShowModalConfirm?: any,
    // postEdit?:IEditPost,
    title?: string,
    onClick?: any,
    titleBtn?: string
    link?: string
    data?: any
}

const ModalAddCart: React.FC<IProps> = ({ setIsShowModalConfirm, title, onClick, titleBtn, link, data }) => {
    const { isLoggedIn, } = useAppSelector((state) => state?.auth || {});
    const dispatch = useAppDispatch();
    const [isCount, setCount] = useState(1)
    const [isColor, setIsColor] = useState<string>()
    const { carts } = useAppSelector(state => state.user)
    const handleColor = (color: string) => {
        setIsColor(color)
    }

    const handlePrice = (price: number, discount: number) => {
        if (price !== 0 && discount !== 0)
            return <>
                <p className="price fs-4 text-danger">{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(data?.discount)}</p>
                <del className="price fs-5">{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(data?.price)}</del>
            </>
        else if (price === 0 && discount !== 0) {
            return <>
                <p className="price fs-4 text-danger">{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(data?.discount)}</p>
            </>
        }
        else
            return <>
                <p className={`price text-danger`}>Giá liên hệ</p>
            </>
    }

    const handleMinusCount = () => {
        if (isCount > 1) {
            setCount((pre) => pre - 1)
        } else {
            setCount(1);
        }
    }

    const handleAddCount = () => {
            setCount((pre) => pre + 1)
    }

    const handleAddCart = async () => {
        const temp = {
            productId: data._id,
            color: isColor,
            count: isCount,
            price: data.discount ? data.discount : data.price
        }
        setIsShowModalConfirm(false)
        dispatch(getAddCard({
            productId: data._id,
            color: isColor,
            count: isCount,
            price: data.discount ? data.discount : data.price
        }));
        handleAddCartApi(temp);
    }
  const handleAddCartApi = (temp:any) => {
    if (isLoggedIn) {
        const getCarts = async () => {
          const res: { code?: number, data?: any } = await userService.apiAddCart([...carts.products,temp]) || ""
          if (res.code === 1) {
                toast.success('Thêm vào giỏ hàng thành công')
          }
        }
        getCarts()
      }
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
                className='bg-white rounded-4 position-relative p-4 content_modal'
            >
                <div onClick={() => setIsShowModalConfirm(false)} className={`text-end fs-4 position-absolute ${styles.modal_addCart__close}`} style={{ top: "0px", right: "10px" }}><AiFillCloseCircle /></div>
                <div className='d-flex justify-content-center gap-2'>
                    <div>
                        <div className="container-xxl">
                            <div className="row">
                                <div className="col-md-6 col-12 mb-md-0 mb-4">
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <div style={{
                                            borderRadius: "10px",
                                            maxWidth: '300px',
                                            width: "100%",
                                            backgroundColor: '#fff',
                                        }}>
                                            {data.images && <Slider images={data.images && data.images} slidesPerView={data.images.length} navigate={true} width={270} height={270} />}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-12">
                                    <div className={styles.main_product_details}>
                                        <div className={styles.border_bottom}>
                                            <h5 className='title'>
                                                {data?.title}
                                            </h5>
                                        </div>
                                        <div className={`${styles.border_bottom}`}>
                                            <div className='d-flex gap-4 align-items-center'>
                                                {
                                                    handlePrice(data.price, data.discount)
                                                }
                                            </div>
                                            <div className='d-flex mt-2 gap-10 align-items-center'>
                                                <StarRatings
                                                    rating={data?.totalRating && data?.totalRating}
                                                    starDimension="15px"
                                                    starRatedColor="#ffd700"
                                                />
                                                <p className='mb-0 t-review mt-1'>{`${data?.ratings ? data?.ratings?.length : 0} Đánh giá`}</p>
                                            </div>
                                        </div>

                                        {
                                            data?.color && data?.color.length !== 0 ?
                                                <>
                                                    <div className='d-flex gap-10 flex-column mt-3'>
                                                        <h6 className={styles.product_heading}>Màu sắc:</h6>
                                                        <div className='d-flex gap-2'>
                                                            {
                                                                data?.color && data?.color.map((item: string, index: number) => {
                                                                    return (
                                                                        <div key={index} className={`${isColor?.includes(item) ? styles.activeColor : ""} py-1 px-2`} style={{ border: "1px solid rgba(0, 0, 0, 0.25)", borderRadius: "8px", cursor: "pointer" }} onClick={() => handleColor(item)}>{item}</div>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                    </div>
                                                </> : ""

                                        }

                                        <div className={`${styles.border_bottom} mt-3`}>
                                            <div className='d-flex gap-20 align-items-center mb-3'>
                                                <h6 className={styles.product_heading} style={{ margin: "0" }}>Số lượng:</h6>
                                                <div className='d-flex align-items-center border-bottom border-top'>
                                                    <div className={styles.btn_input} onClick={() => handleAddCount()}>
                                                        <AiOutlinePlus />
                                                    </div>
                                                    <input
                                                        name=''
                                                        onChange={(e) => setCount(Number(e.target.value))}
                                                        value={isCount}
                                                        min={1}
                                                        max={10}
                                                        className='form-control'
                                                        style={{ width: "35px", height: "35px", fontSize: "18px", textAlign: "center", padding: "0", border: "none" }}
                                                    />
                                                    <div className={styles.btn_input} onClick={() => handleMinusCount()}>
                                                        <GrFormSubtract />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <div className='text-end'>
                                                <span style={{ fontSize: "14px", color: "gray" }}>{`${data?.quantity} Sản phẩm sẵn có`}</span>
                                            </div> */}
                                        </div>
                                    </div>

                                    <div className="d-flex gap-15 align-items-center justify-content-end py-3">
                                        <button className={`${styles.button} button border-0`} onClick={() => handleAddCart()}>Thêm vào giỏ hàng</button>
                                        <button className={`${styles.button} button border-0 ${styles.orange_color}`}>Mua ngay</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>,
        document.body,
    )
};

export default ModalAddCart;

