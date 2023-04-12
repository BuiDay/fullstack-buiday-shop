import React from 'react';
import styles from './ProductCards.module.scss'
import StarRatings from 'react-star-ratings';
import Link from "next/link"
import {useRouter} from 'next/router';
import Prodcompare from '../../assets/images/prodcompare.svg'
import AddCart from '../../assets/images/add-cart.svg'
import View from '../../assets/images/view.svg'
import Wish from '../../assets/images/wish.svg'
import Image from 'next/image';
import { useAppDispatch} from '@/redux/hook';
import { getProductById } from '@/redux/features/products/productsSilce';
import Dis from '../../assets/images/dis.svg'

interface IProps{
    img?:string;
    grid?:number;
    data?:any
}

const ProductCards:React.FC<IProps> = (props) => {
    const {grid,img,data} = props
   
 
    const handlePrice = (price:number,discount:number) =>{
        if(price !==0 && discount !==0)
        return <>
                <p className={`${styles.price} text-danger`}>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(discount)}</p>
                <del className={`${styles.price}`} style={{fontSize:"14px"}}>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price)}</del>
            </>
        else if(price ===0 && discount !==0){
            return<>
                <p className={`${styles.price} text-danger`}>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(data?.discount)}</p>
            </>
        }
        else
            return<>
                <p className={`${styles.price} text-danger`}>Giá liên hệ</p>
            </> 
    }

    const handleDisPercent=(price:number,discount:number)=>{
        const percent =100 - Math.floor((discount / price) * 100)
        return percent
    }

    return (
        // <div className={`${location.pathname=="/ourstore" ? `gr-${grid}`:"col-2"}`}>
        <div className={`gr-${grid}`}>
            <Link href={data.slug} className={`${styles.product_card} position-relative`}>
                <div className={`${styles.wishlist_icon} position-absolute`}>
                    <Link href="#">
                        <Image src={Wish} alt="" />
                    </Link>
                </div>
                <div className={`${styles.product_image} mb-3`}>
                    <Image className='img-fluid' src={data.images.images[0] && data.images.images[0]} width={100} height={100} alt="" />
                    <Image className='img-fluid' src={data.images.images[3] && data.images.images[3]} width={100} height={100} alt="" />
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
                        <div className='' style={{fontSize:"12px", background:"#e9ecef",padding:"2px 5px",borderRadius:"7px",color:"black"}}>
                            {data.ram} GB
                        </div>
                        <div style={{fontSize:"12px", background:"#e9ecef",padding:"2px 5px",borderRadius:"7px",color:"black"}}>
                            {data.display} inch
                        </div>
                        <div style={{fontSize:"12px", background:"#e9ecef",padding:"2px 5px",borderRadius:"7px",color:"black"}}>
                            {data.storage} GB
                        </div>
                    </div>
                    
                    <StarRatings
                        rating={Math.floor(data.totalRating)}
                        // edit={false}
                        starDimension="15px"
                        starRatedColor="#ffd700"
                    />
                    <div className='d-flex gap-2 align-items-end'>
                        {
                            handlePrice(data?.price,data?.discount)
                        }
                    </div>
                   
                    
                </div>
                <div className={`${styles.action_bar} position-absolute`}>
                    <div className="d-flex flex-column gap-10">
                        <Link href="#">
                            <Image src={Prodcompare} alt="" />
                        </Link>
                        <Link href="#">
                            <Image src={View} alt="" />
                        </Link>
                        <Link href="#">
                            <Image src={AddCart} alt="" />
                        </Link>
                    </div>
                </div>

                    {
                        data?.price !==0 &&
                        <div className={styles.discount_percent}>
                            Giảm {handleDisPercent(data?.price,data?.discount)}%
                        </div>
                    }
                
            </Link>
        </div>
    );
};

export default ProductCards;