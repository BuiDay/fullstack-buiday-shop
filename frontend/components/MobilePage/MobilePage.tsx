import React, { useEffect, useState } from 'react';
import SideBar from '../Common/SideBar/SideBar';
import styles from './MobilePage.module.scss'
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { RootState } from '@/redux';
import {getMobileProducts } from '@/redux/features/products/productsSilce';
import ProductCards from '../ProductCards/ProductCards';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { object } from 'yup';
import { Value } from 'sass';


interface IQuery {
    category?: string,
    brand?: string,
    sort?: string
}

const MobilePage = () => {

    const dispatch = useAppDispatch();
    const products = useAppSelector((state: RootState) => state.products.mobile)
    const router = useRouter()
    const [isParams, setIsParams] = useState({})

    console.log(isParams)

    useEffect(() => {
        dispatch(getMobileProducts())
    },[])

    useEffect(() => {
        router.push({
            query: isParams
        })
        dispatch(getMobileProducts(isParams))
    },[isParams])

    const handleParams = (value:string,title:string) =>{
        let temp = {...isParams}
        if(value){
            const params = {...temp,[title]:value}
            setIsParams(params)
        }else{
            delete temp[title as keyof typeof isParams]
            setIsParams(temp)
        }
    }

    return (
        <div className={`store-wrapper home_wrapper_2 py-4`}>
            <div className="container-xxl">
                <div className="row">
                    <div className="col-3">
                        <div className="">
                            <div className={`${styles.filter_card} mb-3`}>
                                <h3 className={styles.filter_tilte}>Lựa chọn theo tiêu chí</h3>
                                <div>
                                    <ul>
                                        <li>
                                            <div onClick={()=>handleParams("","brand")}>Tất cả</div>
                                        </li>
                                        <li>
                                            <div onClick={()=>handleParams("Apple","brand")}>Apple</div>
                                        </li>
                                        <li>
                                            <div onClick={()=>handleParams("Samsung","brand")}>Samsung</div>
                                        </li>
                                        <li>
                                            <div onClick={()=>handleParams("Xiaomi","brand")}>Xiaomi</div>
                                        </li>
                                        <li>
                                            <div onClick={()=>handleParams("Asus","brand")}>Asus</div>
                                        </li>
                                        <li>
                                            <div onClick={()=>handleParams("Realme","brand")}>Realme</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className={`${styles.filter_card} mb-3`}>
                                <h3 className={styles.filter_tilte}>Filter By</h3>
                                <div>
                                    <h5 className={styles.sub_title}>Ram</h5>
                                    <div>
                                        <ul>
                                            <li>
                                                <div onClick={()=>handleParams(`4`,"ram")}>Dưới 4Gb</div>
                                            </li>
                                            <li>
                                                <div onClick={()=>handleParams(`5`,"ram")}>4Gb - 6Gb</div>
                                            </li>
                                            <li>
                                                <div onClick={()=>handleParams(`6`,"ram")}>8Gb - 12Gb</div>
                                            </li>
                                            <li>
                                                <div onClick={()=>handleParams(`12`,"ram")}>Trên 12Gb</div>
                                            </li>
                                        </ul>
                                    </div>
                                    <h5 className={styles.sub_title}>Tần số quét</h5>
                                    <div>
                                        <ul>
                                            <li>
                                                <Link href="/ourstore?brand=Apple">60Hz</Link>
                                            </li>
                                            <li>
                                                <Link href="/ourstore?brand=Dell">90Hz</Link>
                                            </li>
                                            <li>
                                                <Link href="/ourstore?brand=Samsung">120Hz</Link>
                                            </li>
                                            <li>
                                                <Link href="/ourstore?brand=Hp">Trên 140Hz</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <h5 className={styles.sub_title}>Bộ nhớ trong</h5>
                                    <ul>
                                        <li>
                                            <Link href="/ourstore?brand=Apple">Dưới 32Gb</Link>
                                        </li>
                                        <li>
                                            <Link href="/ourstore?brand=Dell">32Gb-64Gb</Link>
                                        </li>
                                        <li>
                                            <Link href="/ourstore?brand=Samsung">128Gb-256Gb</Link>
                                        </li>
                                        <li>
                                            <Link href="/ourstore?brand=Hp">Trên 512Gb</Link>
                                        </li>
                                    </ul>

                                    <h5 className={styles.sub_title}>Availablity</h5>
                                    <div>
                                        <div className={`${styles.form_check} d-flex align-items-center`}>
                                            <input
                                                type="checkbox"
                                                className={`${styles.form_check_input} form-check-input`}
                                            />
                                            <label className={`${styles.form_check_label} form-check-label`}>
                                                In stock (1)
                                            </label>
                                        </div>
                                        <div className="form-check d-flex align-items-center">
                                            <input
                                                type="checkbox"
                                                className={`${styles.form_check_input} form-check-input`}
                                            />
                                            <label className={`${styles.form_check_label} form-check-label`}>
                                                Out of stock (0)
                                            </label>
                                        </div>
                                    </div>
                                    <h5 className={styles.sub_title}>Price</h5>
                                    <div className="d-flex align-items-center gap-10">
                                        <div className="form-floating">
                                            <label htmlFor="form-floating-input">From</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="form-floating-input"
                                            />
                                        </div>
                                        <div className="form-floating">
                                            <label htmlFor="form-floating-input1">To</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="form-floating-input1"
                                            />
                                        </div>
                                    </div>
                                    <h5 className="sub-title">Màu sắc</h5>
                                    <div>
                                        <ul className="colors ps-0">
                                            <li style={{ background: "yellow" }}></li>
                                            <li style={{ background: "blue" }}></li>
                                            <li style={{ background: "green" }}></li>
                                            <li style={{ background: "gray" }}></li>
                                            <li style={{ background: "purple" }}></li>
                                            <li style={{ background: "black" }}></li>
                                            <li style={{ background: "cyan" }}></li>
                                            <li></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="filter-card mb-3">
                                <h3 className="filter-tilte">Product Tags</h3>
                                <div>
                                    <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                                        <span className="badge bg-light text-secondary rounded-3 p-2">
                                            Headphone
                                        </span>
                                        <span className="badge bg-light text-secondary rounded-3 p-2">
                                            Laptop
                                        </span>
                                        <span className="badge bg-light text-secondary rounded-3 p-2">
                                            Wire
                                        </span>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="filter-card mb-3">
                                <h3 className="filter-tilte">Random Product</h3>
                                <div>
                                    <div className="random-products mb-3 d-flex">
                                        <div className="random-products-left">
                                            <img className='img-fluid' src={require("../../assets/images/watch.jpg")} alt="" />
                                        </div>
                                        <div className="random-products-right d-flex flex-column justify-content-center">
                                            <h5>Lorem ipsum dolor sit amet</h5>
                                            <StarRatings
                                                rating={2.5}
                                                edit={false}
                                                starDimension="14px"
                                                starRatedColor="#ffd700"
                                            />
                                            <b className='mt-1'>$ 300</b>
                                        </div>
                                        
                                    </div>

                                    <div className="random-products mb-2 pb-2 d-flex">
                                        <div className="random-products-left">
                                            <img className='img-fluid' src={require("../../assets/images/watch.jpg")} alt="" />
                                        </div>
                                        <div className="random-products-right d-flex flex-column justify-content-center">
                                            <h5>Lorem ipsum dolor sit amet</h5>
                                            <StarRatings
                                                rating={2.5}
                                                edit={false}
                                                starDimension="16px"
                                                starRatedColor="#ffd700"
                                            />
                                            <b className='mt-1'>$ 300</b>
                                        </div>
                                    </div>
                                </div>       
                            </div>    */}
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="filter-sort-grid mb-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center gap-10">
                                    <p className='mb-0' style={{ whiteSpace: "nowrap" }}>Xếp xếp theo:</p>
                                    <select name="" id="" className='form-control form-select' onChange={(e) => handleParams(e.target.value,"sort")}>
                                    {/* <select name="" id="" className='form-control form-select'> */}
                                        <option value="">Mặc định</option>
                                        <option value="-totalRating">Nổi bật</option>
                                        <option value="best-selling">Mua nhiều</option>
                                        <option value="price">Giá: Thấp-Cao</option>
                                        <option value="-price">Giá: Cao-Thấp</option>
                                    </select>
                                </div>
                                <div className="d-flex align-items-center gap-10">
                                    <p className="total-products">{products?.length} sản phẩm</p>
                                    <div className="d-flex gap-10 align-items-center grid">
                                        {/* <img className='img-fluid active' src={Gr4} alt="" onClick={()=>getGrid(4)} />
                                            <img className='img-fluid' src={Gr3} alt="" onClick={()=>getGrid(3)}/>
                                            <img className='img-fluid' src={Gr2} alt="" onClick={()=>getGrid(6)}/>
                                            <img className='img-fluid' src={Gr} alt="" onClick={()=>getGrid(12)}/> */}
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="products-list pb-5 d-flex flex-wrap gap-10">
                            {
                                products && products?.map((item, index) => {
                                    return (
                                        <ProductCards key={index} data={item} grid={4} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default MobilePage;