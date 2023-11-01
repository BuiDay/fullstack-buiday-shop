import React, { useState } from 'react';
import styles from '../../styles/SpecialProduct.module.scss'
import StarRatings from 'react-star-ratings';
import Link from 'next/link';
import CountdownTimer from '../Common/Countdown/CountdownTimer';
import Image from 'next/image';
import Slider from '../Common/Slider/Slider';
import ModalConfirm from '../Common/ModalConfirm/ModalConfirm';
import ModalAddCart from '../Common/ModalAddCart/ModalAddCart';

interface IProps{
    timer?:number,
    data?:any,
}

const SpecialProduct:React.FC<IProps> = ({timer,data}) => {
    const [isShowModalConfirm, setIsShowModalConfirm] = useState<boolean>(false)
    const [isShowModalAddCart, setIsShowModalAddCart] = useState<boolean>(false)
    return (
        <div className=''>
            <div className={`${styles.special_product_card}`} style={{minHeight:"350px",height:"100%"}}>
                <Link href={`/product/${data.slug}`} className="d-flex text-dark">
                    <div>
                            <div style={{

                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <div style={{
                                    borderRadius: "10px",
                                    maxWidth: '200px',
                                    width: "100%",
                                    backgroundColor: '#fff',
                                    padding: '0px 10px'
                                }}>
                                    {data && <Slider images={data.images && data.images} slidesPerView={2} navigate={false} width={200} height={180}/>}
                                </div>
                            </div>
                    </div>
                    <div className={`${styles.special_product_content}`}>
                        <h5 className={styles.brand}>{data?.brand}</h5>
                        <h6 className={styles.title}>{data?.title}</h6>
                        <StarRatings
                            rating={Math.floor(data.totalRating)}
                            // edit={false}
                            starDimension="15px"
                            starRatedColor="#ffd700"
                        />
                        <div className="price mt-2 d-lg-flex d-block">
                            <p style={{fontSize:"18px"}} className="text-danger">{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(data?.discount)}</p>
                            <del style={{fontSize:"14px"}} className="text-drak ms-2">{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(data?.price)}</del>
                            {/* <strike>$200</strike> */}
                        </div>
                        <div className={`${styles.discount_till} d-flex align-items-center gap-2 mt-2`}>
                            <CountdownTimer targetDate={timer} />
                        </div>
                        <div className='prod-count mt-3'>
                            <p>Sản phẩm còn lại: 5</p>
                            <div className='progress w-75 mt-3'>
                                <div className={`${styles.progress_bar} w-75`} role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}></div>
                            </div>
                        </div>
  
                    </div>
                </Link>
                <div className='w-100 text-end'>
                    <button className='button py-2 px-3 mt-3 ' onClick={() => { setIsShowModalAddCart(true) }}>Mua ngay</button>
                </div>
            </div>
            {isShowModalConfirm && <ModalConfirm
                setIsShowModalConfirm={setIsShowModalConfirm}
                titleBtn='Đăng nhập'
                link="/login"
                // postEdit = {postEdit} 
                // handle = {handleDelete}
                title='Bạn cần phải đăng nhập ?'
            />}
            {
                isShowModalAddCart && <ModalAddCart setIsShowModalConfirm={setIsShowModalAddCart} titleBtn='Thêm' data={data} />
            }
        </div>
    );
};

export default SpecialProduct;