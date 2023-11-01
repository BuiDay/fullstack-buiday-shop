import React, { useEffect, useState } from 'react';
import styles from '../../styles/ProductCards.module.scss'
import StarRatings from 'react-star-ratings';
import Link from "next/link"
import Prodcompare from '../../assets/images/prodcompare.svg'
import AddCart from '../../assets/images/add-cart.svg'
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { Tooltip } from 'react-tooltip'
import { BsHeart, BsHeartFill } from 'react-icons/bs'
import userService from '@/redux/features/user/userService';
import { getCompareProducts } from '@/redux/features/app/appSilce';
import { RootState } from '@/redux/store';
import { addWishlist} from "@/redux/features/user/userSilce";

import dynamic from 'next/dynamic';
import toast from 'react-hot-toast';

const ModalAddCart = dynamic(() => import('../Common/ModalAddCart/ModalAddCart'),{ssr:false});
const ModalConfirm = dynamic(() => import('../Common/ModalConfirm/ModalConfirm'),{ssr:false});

interface IProps {
    img?: string;
    grid?: number;
    data?: any
}

const ProductCards: React.FC<IProps> = ({ grid, img, data }) => {
    const dispatch = useAppDispatch();
    const { compare_products } = useAppSelector((state: RootState) => state.app)
    const { isLoggedIn } = useAppSelector(state => state.auth)
    const { wishlist, carts } = useAppSelector(state => state.user)
    const [isShowModalConfirm, setIsShowModalConfirm] = useState<boolean>(false)
    const [isShowModalAddCart, setIsShowModalAddCart] = useState<boolean>(false)

    const handlePrice = (price: number, discount: number) => {
        if (price !== 0 && discount !== 0)
            return <div className='d-md-flex d-block'>
                <p className={`${styles.price} text-danger`}>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(discount)}</p>
                <del className={`${styles.price}`} style={{ fontSize: "14px" }}>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price)}</del>
            </div>
        else if (price === 0 && discount !== 0) {
            return <>
                <p className={`${styles.price} text-danger`}>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(data?.discount)}</p>
            </>
        }
        else
            return <>
                <div className='d-md-flex d-block align-items-center gap-2'>
                    <div className='px-1 text-danger' style={{ background: "#feecf0", fontSize: "14px", textAlign: "center", borderRadius: "5px" }}>Hàng sắp về</div>
                    <p className={`${styles.price} text-danger`}>Giá liên hệ</p>
                </div>

            </>
    }

    const handleDisPercent = (price: number, discount: number) => {
        const percent = 100 - Math.floor((discount / price) * 100)
        return percent
    }
    const handleCompareProducts = (id: string) => {
        // console.log(compare_products.total)
        // if (compare_products.total < 4) {
        dispatch(getCompareProducts(id))
        // }
    }

    const handleAddWishList = async (id: string) => {
       
        if (isLoggedIn) {
            const res:any = await userService.apiAddToWishlist({ proId: id }) || ""
            if (res.code === 1) {
                dispatch(addWishlist(res.data.wishlist))
                if(wishlist?.includes(data?._id)){
                    toast.success('Xóa vào danh sách yêu thích thành công!')
                }else{
                    toast.success('Thêm vào danh sách yêu thích thành công!')
                }
                
            }
        } else {
            setIsShowModalConfirm(true)
        }
    }

    const handleActiveAddCart = (id: string): boolean => {
        const productsId = carts?.products.map(item => {
            return item.productId;
        })
        if (productsId?.includes(id))
            return true;
        else
            return false
    }

    return (
        // <div className={`${location.pathname=="/ourstore" ? `gr-${grid}`:"col-2"}`}>
        <>
            <div className={`gr-${grid} ${grid ? "" : "h-100"}`}>
                <div className={`${styles.product_hover}`}>
                    <div className={`${styles.product_item}`}>
                        <div className={`${styles.action_bar}`}>
                            <div className="d-flex flex-column gap-10">
                                <div className={`${styles.wishlist_icon} position-absolute`}>
                                    <div data-tooltip-id="wishs-tooltip"
                                        data-tooltip-content={wishlist && wishlist.includes(data?._id) ? "Hủy yêu thích" : "Yêu thích"}
                                        onClick={() => handleAddWishList(data?._id)}>
                                        {
                                            wishlist && wishlist.includes(data?._id) ? <BsHeartFill color='red' /> : <BsHeart color="black" />
                                        }
                                        {/* <Tooltip id="wishs-tooltip" /> */}
                                    </div>
                                </div>
                                <div className={`${styles.action_bar_item} ${compare_products.id && compare_products.id.includes(data?._id) ? styles.active : ""}`}
                                    onClick={() => handleCompareProducts(data?._id)}
                                    data-tooltip-id="compare-tooltip"
                                    data-tooltip-content={compare_products.id && compare_products.id.includes(data?._id) ? "Hủy so sánh" : "So sánh"}
                                    >
                                    <Image src={Prodcompare} alt="" />
                                    {/* <Tooltip id="compare-tooltip" /> */}
                                </div>
                                <button className={`${styles.action_bar_item} ${handleActiveAddCart(data?._id) ? styles.active : ""}`}
                                    disabled={handleActiveAddCart(data?._id)}
                                    onClick={() => { setIsShowModalAddCart(true) }}
                                    // data-tooltip-id="addcard-tooltip"
                                    // data-tooltip-content="Thêm vào giỏ hàng"
                                    // aria-label="AddCart"
                                    >
                                    <Image src={AddCart} alt="" />
                                    {/* <Tooltip id="addcard-tooltip" /> */}
                                </button>
                            </div>
                        </div>
                        {
                            data?.price !== 0 &&
                            <div className={styles.discount_percent}>
                                Giảm {handleDisPercent(data?.price, data?.discount)}%
                            </div>
                        }
                        <Link href={`/product/${data.slug}`} className={`${styles.product_card}`}>
                            <div className={`${styles.product_image} mb-3`}>
                                {
                                    data.images[0] && <Image className='img-fluid' src={data.images[0]} width={500} height={500} alt="" />
                                }

                                {/* <Image className='img-fluid' src={data.images[3] ? data.images[3] ? data.images[2] : data.images[2] : data.images[0]} width={500} height={500} alt="" /> */}
                            </div>
                            <div className={styles.product_details}>
                                <h6 className='brand'>{data.brand}</h6>
                                <h5 className={styles.product_title}>
                                    {data.title}
                                </h5>
                                {
                                    grid === 12 ?
                                        (<p className='description'>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque id earum, quae ipsam minima deleniti.
                                        </p>) : ""
                                }
                                <div className='d-flex gap-2 align-items-center'>
                                    {
                                        data.ram !== 0 && (
                                            <div className='' style={{ fontSize: "12px", background: "#e9ecef", padding: "2px 5px", borderRadius: "7px", color: "black",whiteSpace:"nowrap" }}>
                                                {data.ram} GB
                                            </div>
                                        )
                                    }

                                    {
                                        data.display !== 0 && (
                                            <div style={{ fontSize: "12px", background: "#e9ecef", padding: "2px 5px", borderRadius: "7px", color: "black" ,whiteSpace:"nowrap"}}>
                                                {data.display} inch
                                            </div>
                                        )
                                    }

                                    {
                                        data.storage !== 0 && (
                                            <div style={{ fontSize: "12px", background: "#e9ecef", padding: "2px 5px", borderRadius: "7px", color: "black" ,whiteSpace:"nowrap"}}>
                                                {data.storage} GB
                                            </div>
                                        )
                                    }
                                </div>
                                <StarRatings
                                    rating={Math.floor(data.totalRating)}
                                    // edit={false}
                                    starDimension="15px"
                                    starRatedColor="#ffd700"
                                />
                                <div className='d-flex gap-2 align-items-end'>
                                    {
                                        handlePrice(data?.price, data?.discount)
                                    }
                                </div>
                            </div>
                        </Link>
                    </div>
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
        </>
    );
};

export default (ProductCards);