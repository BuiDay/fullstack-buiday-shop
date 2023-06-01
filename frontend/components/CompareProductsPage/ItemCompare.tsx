import React, { useCallback, useEffect, useState } from 'react';
import styles from './CompareProductsPage.module.scss'
import Image from 'next/image';
import productService from '@/redux/features/products/productsService';
import {AiFillDelete} from 'react-icons/ai'
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { apiCompareProducts } from '@/redux/features/app/appSilce';
interface IProps {
    id: string
}

const ItemCompare: React.FC<IProps> = ({ id }) => {
    const dispatch = useAppDispatch();
    const [product, setProduct] = useState<any>();
    const {compare_products} = useAppSelector(state => state.app)
    useEffect(() => {
        handleGetProduct(id)
    }, [compare_products])

    console.log(1)

    const handleGetProduct = useCallback(async (id: string) =>{
        const res: { code?: number, data?: any } = await productService.getProductById({ id }) || ""
        if (res.code === 1) {
            setProduct(res.data)
        }
    },[]) 
    
    const handleDelete = (id:string) =>{
        dispatch(apiCompareProducts(id))
    }

    return (
        <div className="col-3">
            {
                product &&
                <div className={`${styles.compare_products_card}`}>
                    <div className={`${styles.compare_products_delete}`} onClick={()=>handleDelete(product?._id)}><AiFillDelete/></div>
                    <div className={`${styles.product_card_image} text-center mb-3`}>
                        <Image src={product.images.images[0] && product.images.images[0]} width={100} height={100} alt="" />
                    </div>
                    <div className={styles.compare_product_details}>
                        <h5 className={`${styles.compare_product_details_title}`}>
                            {product?.title}
                        </h5>
                        <h6 className={`${styles.compare_product_details_price} mb-4`}>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product?.discount)}</h6>
                        <div>
                            <div className={styles.product_detail}>
                                <h5>Hãng:</h5>
                                <p>{product.brand}</p>
                            </div>
                            <div className={styles.product_detail}>
                                <h5>Loại:</h5>
                                <p>{product?.category}</p>
                            </div>
                            <div className={styles.product_detail}>
                                <h5>Màu sắc:</h5>
                                {
                                    product?.color.map((item:string,index:number)=>{
                                        return(
                                            <span key={index}>{item}</span>
                                        )
                                    })
                                }
                            </div>
                            <div className={styles.product_detailTechnical}>
                                <h5>Thông số:</h5>
                                <div className=''>
                                    <div className='detail_technical' dangerouslySetInnerHTML={{ __html: `${product?.technicalInfo && product?.technicalInfo.technicalInfo}` }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default ItemCompare;