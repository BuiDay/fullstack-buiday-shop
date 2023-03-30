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

interface IProps{
    img:string;
    grid?:number;
}

const ProductCards:React.FC<IProps> = (props) => {
    const location = useRouter();
    const {grid,img} = props
    return (
        <div className={`${location.pathname=="/ourstore" ? `gr-${grid}`:"col-2"}`}>
            <Link href='/product/123' className={`${styles.product_card} position-relative`}>
                <div className={`${styles.wishlist_icon} position-absolute`}>
                    <Link href="#">
                        <Image src={Wish} alt="" />
                    </Link>
                </div>
                <div className={`${styles.product_image} mb-3`}>
                    <Image className='img-fluid' src={img} alt="" />
                    <Image className='img-fluid' src={require('../../assets/images/watch-ultra.png')} alt="" />
                </div>
                <div className={styles.product_details}>
                    <h6 className='brand'>Sony</h6>
                    <h5 className={styles.product_title}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, distinctio.
                    </h5>
                    {
                        grid === 12 ? 
                        (<p className='description'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque id earum, quae ipsam minima deleniti.
                        </p>) : ""
                    }
                    
                    <StarRatings
                        rating={2.5}
                        // edit={false}
                        starDimension="20px"
                        starRatedColor="#ffd700"
                    />
                    <p className={`${styles.price} mt-2`}>100$</p>
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