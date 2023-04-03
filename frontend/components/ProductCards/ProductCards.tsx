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

interface IProps{
    img?:string;
    grid?:number;
    data?:any
}

const ProductCards:React.FC<IProps> = (props) => {
    const location = useRouter();
    const dispatch = useAppDispatch();
    const {grid,img,data} = props
   
    const handleFetchDetail = (id:string) =>{
        dispatch(getProductById(id))
    }

    return (
        // <div className={`${location.pathname=="/ourstore" ? `gr-${grid}`:"col-2"}`}>
        <div className={`gr-${grid}`}>
            <Link href={data.slug} className={`${styles.product_card} position-relative`} onClick={()=>{handleFetchDetail(data._id)}}>
                <div className={`${styles.wishlist_icon} position-absolute`}>
                    <Link href="#">
                        <Image src={Wish} alt="" />
                    </Link>
                </div>
                <div className={`${styles.product_image} mb-3`}>
                    <Image className='img-fluid' src={data.images.images[0] && data.images.images[0]} width={200} height={200} alt="" />
                    <Image className='img-fluid' src={data.images.images[3] && data.images.images[3]} width={200} height={200} alt="" />
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
                    
                    <StarRatings
                        rating={Math.floor(data.totalRating)}
                        // edit={false}
                        starDimension="20px"
                        starRatedColor="#ffd700"
                    />
                    <p className={`${styles.price} mt-2`}>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(data?.price)}</p>
                </div>
                <div className={`${styles.action_bar} position-absolute`}>
                    <div className="d-flex flex-column gap-15">
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
            </Link>
        </div>
    );
};

export default ProductCards;