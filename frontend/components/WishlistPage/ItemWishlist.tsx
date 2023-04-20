import React, { useEffect, useState } from 'react';
import ProductCards from '../ProductCards/ProductCards';
import productService from '@/redux/features/products/productsService';
import styles from './WishlistPage.module.scss'
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { Tooltip } from 'react-tooltip';
import { BsHeart, BsHeartFill } from 'react-icons/bs'
import Image from 'next/image';
import Prodcompare from '../../assets/images/prodcompare.svg'
import AddCart from '../../assets/images/add-cart.svg'
import Link from 'next/link';
import StarRatings from 'react-star-ratings';
import userService from '@/redux/features/user/userService';
import { getUser } from '@/redux/features/user/userSilce';
import { apiCompareProducts } from '@/redux/features/app/appSilce';

interface IProps {
    id: string
}
const ItemWishlist: React.FC<IProps> = ({ id }) => {
    const dispatch = useAppDispatch();
    const [product, setProduct] = useState<any>();
    const { wishlist } = useAppSelector(state => state.user)
    const { compare_products } = useAppSelector(state => state.app)

    useEffect(() => {
        handleGetProduct(id)
    }, [id])

    const handleGetProduct = async (id: string) => {
        const res: { code?: number, data?: any } = await productService.getProductById({ id }) || ""
        if (res.code === 1) {
            setProduct(res.data)
        }
    }

    const handlePrice = (price: number, discount: number) => {
        if (price !== 0 && discount !== 0)
            return <>
                <p className={`${styles.price} text-danger`}>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(discount)}</p>
                <del className={`${styles.price}`} style={{ fontSize: "14px" }}>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price)}</del>
            </>
        else if (price === 0 && discount !== 0) {
            return <>
                <p className={`${styles.price} text-danger`}>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(discount)}</p>
            </>
        }
        else
            return <>
                <div className='d-flex align-items-center gap-2'>
                    <div className='px-1 text-danger' style={{ background: "#feecf0", fontSize: "14px", textAlign: "center", borderRadius: "5px" }}>Hàng sắp về</div>
                    <p className={`${styles.price} text-danger`}>Giá liên hệ</p>
                </div>
            </>

    }

    const handleRemoveWishList = async (id: string) => {
        const res: { code?: number } = await userService.apiAddToWishlist({ proId: id }) || ""
    }

    const handleDisPercent = (price: number, discount: number) => {
        const percent = 100 - Math.floor((discount / price) * 100)
        return percent
    }

    const handleCompareProducts = (id: string) => {
        // console.log(compare_products.length)
        // if(compare_products.length < 5){ 
        dispatch(apiCompareProducts(id))
        // }
    }

    return (
        <>
            {
                product && <>
                        <div className={`${styles.product_item} mt-3`}>
                            <div className={`${styles.action_bar} position-absolute`}>
                                <div className="d-flex flex-column gap-10">
                                    <div className={`${styles.wishlist_icon} position-absolute`}>
                                        <div data-tooltip-id="wishs-tooltip"
                                            data-tooltip-content={wishlist && wishlist.includes(product?._id) ? "Hủy yêu thích" : "Yêu thích"}
                                            onClick={() => handleRemoveWishList(product?._id)}>
                                            {
                                                wishlist && wishlist.includes(product?._id) ? <BsHeartFill color='red' /> : <BsHeart color="black" />
                                            }
                                            {/* <Tooltip id="wishs-tooltip" /> */}
                                        </div>
                                    </div>
                                    <div className={`${styles.action_bar_item} ${compare_products && compare_products.includes(product?._id) ? styles.active : ""}`}
                                        onClick={() => handleCompareProducts(product?._id)}
                                        data-tooltip-id="compare-tooltip"
                                        data-tooltip-content={compare_products && compare_products.includes(product?._id) ? "Hủy so sánh" : "So sánh"}>
                                        <Image src={Prodcompare} alt="" />
                                        {/* <Tooltip id="compare-tooltip" /> */}
                                    </div>
                                    <div className={styles.action_bar_item}
                                        data-tooltip-id="addcard-tooltip"
                                        data-tooltip-content="Thêm vào giỏ hàng">
                                        <Image src={AddCart} alt="" />
                                        {/* <Tooltip id="addcard-tooltip" /> */}
                                    </div>
                                </div>
                            </div>
                            {
                                product?.price !== 0 &&
                                <div className={styles.discount_percent}>
                                    Giảm {handleDisPercent(product?.price, product?.discount)}%
                                </div>
                            }
                            <Link href={`/product/${product.slug}`} className={`${styles.product_card} position-relative`}>
                                <div className={`${styles.product_image} mb-3`}>
                                    <Image className='img-fluid' src={product.images.images[0] && product.images.images[0]} width={100} height={100} alt="" />
                                    <Image className='img-fluid' src={product.images.images[3] && product.images.images[3]} width={100} height={100} alt="" />
                                </div>
                                <div className={styles.product_details}>
                                    <h6 className='brand'>{product.brand}</h6>
                                    <h5 className={styles.product_title}>
                                        {product.title}
                                    </h5>
                                    <div className='d-flex gap-2 align-items-center'>
                                        <div className='' style={{ fontSize: "12px", background: "#e9ecef", padding: "2px 5px", borderRadius: "7px", color: "black" }}>
                                            {product.ram} GB
                                        </div>
                                        <div style={{ fontSize: "12px", background: "#e9ecef", padding: "2px 5px", borderRadius: "7px", color: "black" }}>
                                            {product.display} inch
                                        </div>
                                        <div style={{ fontSize: "12px", background: "#e9ecef", padding: "2px 5px", borderRadius: "7px", color: "black" }}>
                                            {product.storage} GB
                                        </div>
                                    </div>

                                    <StarRatings
                                        rating={Math.floor(product.totalRating)}
                                        // edit={false}
                                        starDimension="15px"
                                        starRatedColor="#ffd700"
                                    />
                                    <div className='d-flex gap-2 align-items-end'>
                                        {
                                            handlePrice(product?.price, product?.discount)
                                        }
                                    </div>
                                </div>
                            </Link>
                        </div>
                    
                </>
            }
        </>
    );
};

export default ItemWishlist;