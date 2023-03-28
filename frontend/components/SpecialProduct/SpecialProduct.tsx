import React from 'react';
import styles from './SpecialProduct.module.scss'
import StarRatings from 'react-star-ratings';
import Link from 'next/link';
import CountdownTimer from '../Common/Countdown/CountdownTimer';
import Image from 'next/image';

interface IProps{
    timer?:number,
}

const SpecialProduct:React.FC<IProps> = (props) => {
    return (
        <div className='col-4'>
            <div className={`${styles.special_product_card}`}>
                <div className="d-flex justify-content-between">
                    <div>
                        <Image className='img-fluid' src={require('../../assets/images/watch.jpg')} alt="" />
                        <div className={`${styles.other_product} d-flex justify-content-between gap-15`}>
                            <div><Image className='img-fluid' src={require('../../assets/images/watch-ultra-2.png')} alt="" /></div>
                            <div><Image className='img-fluid' src={require('../../assets/images/watch-ultra.png')} alt="" /></div>
                        </div>
                    </div>
                    <div className={`${styles.special_product_content}`}>
                        <h5 className={styles.brand}>Sony</h5>
                        <h6 className={styles.title}>Lorem ipsum dolor sit amet consectetur</h6>
                        <StarRatings
                            rating={2.5}
                            // edit={false}
                            starDimension="20px"
                            starRatedColor="#ffd700"
                        />
                        <p className="price mt-2">
                            <span className="text-danger">$100</span> &nbsp;
                            {/* <strike>$200</strike> */}
                        </p>
                        <div className={`${styles.discount_till} d-flex align-items-center gap-2`}>
                            <CountdownTimer targetDate={props.timer} />
                        </div>
                        <div className='prod-count mt-3'>
                            <p>Products: 5</p>
                            <div className='progress mt-3'>
                                <div className={`${styles.progress_bar} w-75`} role="progressbar" aria-valuenow={"75"} aria-valuemin={"0"} aria-valuemax={"100"}></div>
                            </div>
                        </div>
                        <Link href="#" className='button py-2 px-3 mt-3'>Option</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialProduct;