import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import Loading from '../Common/Loading/Loading';
import ItemWishlist from './ItemWishlist';
import { getUser } from '@/redux/features/user/userSilce';

interface IProps {
    wishlistId?: string[]
}

const WishlistPage: React.FC<IProps> = ({ wishlistId }) => {
    const dispatch = useAppDispatch();
    // useEffect(()=>{
    //     dispatch(getUser())
    // },[wishlistId])

    return (
        <>
            <div className="compare-products-wrapper home_wrapper_2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        {
                            <>   {
                                wishlistId && wishlistId.length > 0 ? wishlistId.map((item, index) => {
                                    return (
                                    <div className={`col-3`} key={index}>
                                        <ItemWishlist id={item} />
                                    </div>
                                    )
                                }) :
                                    <div className='text-center' style={{ height: "400px" }}>
                                        <span> Không có sản phẩm nào</span>
                                    </div>
                            }
                            </>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default WishlistPage;