import React, { useEffect, useState } from 'react';
import SideBar from '../Common/SideBar/SideBar';
import styles from '../../styles/HeadphonePage.module.scss'

import ProductCards from '../ProductCards/ProductCards';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Color from '../Common/Color/Color';
import Image from 'next/image';
import Pagination from '../Common/Pagination/Pagination';


interface IQuery {
    category?: string,
    brand?: string,
    sort?: string
}

interface IProps{
    data?:any,
}

const HeadphonePage:React.FC<IProps> = ({data}) => {
    const products = data.data
    const router = useRouter()
    
    const handleSort = (value:string | number,title:string) =>{
        if(value !== "All"){
            router.push(
                {
                    pathname:"/laptop",
                    query:{
                        ...router.query,
                        page:1,
                        [title]:value,
                    }
                }
            )
        }else
        router.push(
            {
                pathname:"/laptop",
                query:{}
            }
        )
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
                                    <ul className={styles.sidebar_brands}>
                                        <li>
                                            <div onClick={()=>handleSort("All","All")}>Tất cả</div>
                                        </li>
                                        <li>
                                            <div onClick={()=>handleSort("Mac","brand")}>
                                                <Image alt='' width={60} height={25} src="https://cellphones.com.vn/media/wysiwyg/Icon/brand_logo/macbook.png"></Image>
                                            </div>
                                        </li>
                                        <li>
                                            <div onClick={()=>handleSort("ASUS","brand")}>
                                            <Image alt='' width={60} height={30} src="https://cellphones.com.vn/media/wysiwyg/Icon/brand_logo/Asus.png"></Image>
                                            </div>
                                        </li>
                                        <li>
                                            <div onClick={()=>handleSort("Lenovo","brand")}>
                                            <Image alt='' width={60} height={25} src="https://cellphones.com.vn/media/wysiwyg/Icon/brand_logo/Lenovo.png"></Image>
                                            </div>
                                        </li>
                                        <li>
                                            <div onClick={()=>handleSort("HP","brand")}>
                                            <Image alt='' width={60} height={25} src="https://cellphones.com.vn/media/wysiwyg/Icon/brand_logo/HP.png"></Image>
                                            </div>
                                        </li>
                                        <li>
                                            <div onClick={()=>handleSort("Acer","brand")}>
                                            <Image alt='' width={60} height={25} src="https://cellphones.com.vn/media/wysiwyg/Icon/brand_logo/acer.png"></Image>
                                            </div>
                                        </li>
                                        <li>
                                            <div onClick={()=>handleSort("Dell","brand")}>
                                            <Image alt='' width={60} height={25} src="https://cellphones.com.vn/media/wysiwyg/Icon/brand_logo/Dell.png"></Image>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className={`${styles.filter_card} mb-3`}>
                                <h3 className={styles.filter_tilte}>Filter By</h3>
                                <div>
                                    <h5 className={styles.sub_title}>Ram</h5>
                                    <div>
                                        <ul className={styles.sidebar_brands}>
                                            <li>
                                                <div onClick={()=>handleSort(4,"ram")}>4GB</div>
                                            </li>
                                            <li>
                                                <div onClick={()=>handleSort(5,"ram")}>8GB</div>
                                            </li>
                                            <li>
                                                <div onClick={()=>handleSort(6,"ram")}>16GB</div>
                                            </li>
                                            <li>
                                                <div onClick={()=>handleSort(12,"ram")}>32GB</div>
                                            </li>
                                        </ul>
                                    </div>
                                    <h5 className={styles.sub_title}>Kích thước màn hình</h5>
                                    <div>
                                        <ul className={styles.sidebar_brands}>
                                            <li>
                                                <div onClick={()=>handleSort(5,"display")}>Khoảng 13 inch</div>
                                            </li>
                                            <li>
                                                <div onClick={()=>handleSort(7,"display")}>Khoảng 14 inch</div>
                                            </li>
                                            <li>
                                                <div onClick={()=>handleSort(7,"display")}>Trên 15 inch</div>
                                            </li>
                                        </ul>
                                    </div>
                                    <h5 className={styles.sub_title}>Card đồ họa</h5>
                                    <div>
                                        <ul className={styles.sidebar_brands}>
                                            <li>
                                                <div onClick={()=>handleSort(60,"display")}>Onboard</div>
                                            </li>
                                            <li>
                                                <div>NVIDIA Geforce Series</div>
                                            </li>
                                            <li>
                                                <div>AMD Readon Series</div>
                                            </li>
                                        </ul>
                                    </div>
                                    <h5 className={styles.sub_title}>CPU</h5>
                                    <div>
                                        <ul className={styles.sidebar_brands}>
                                            <li>
                                                <div onClick={()=>handleSort(60,"display")}>Intel Core i3</div>
                                            </li>
                                            <li>
                                                <div>Intel Core i5</div>
                                            </li>
                                            <li>
                                                <div>Intel Core i7</div>
                                            </li>
                                            <li>
                                                <div>Intel Core i9</div>
                                            </li>
                                            <li>
                                                <div>AMD Ryzen 3</div>
                                            </li>
                                            <li>
                                                <div>AMD Ryzen 5</div>
                                            </li>
                                            <li>
                                                <div>AMD Ryzen 7</div>
                                            </li>
                                            <li>
                                                <div>Intel Celeron / Pentinum</div>
                                            </li>
                                        </ul>
                                    </div>
                                    <h5 className={styles.sub_title}>Ổ cứng</h5>
                                    <ul className={styles.sidebar_brands}>
                                        <li>
                                            <div >256GB</div>
                                        </li>
                                        <li>
                                            <div>512GB</div>
                                        </li>
                                        <li>
                                            <div >1TB</div>
                                        </li>
                                    </ul>

                                    <h5 className={styles.sub_title}>Mặt hàng</h5>
                                    <div>
                                        <div className={`${styles.form_check} d-flex align-items-center`}>
                                            <input
                                                type="checkbox"
                                                className={`${styles.form_check_input} form-check-input`}
                                            />
                                            <label className={`${styles.form_check_label} form-check-label`}>
                                                Có sẵn
                                            </label>
                                        </div>
                                        <div className="form-check d-flex align-items-center">
                                            <input
                                                type="checkbox"
                                                className={`${styles.form_check_input} form-check-input`}
                                            />
                                            <label className={`${styles.form_check_label} form-check-label`}>
                                                Chưa có sẵn
                                            </label>
                                        </div>
                                    </div>
                                    {/* <h5 className={styles.sub_title}>Giá</h5>
                                    <div className="d-flex align-items-center gap-10">
                                        <div className="form-floating">
                                            <input
                                                type="range"

                                                id="form-floating-input"
                                            />
                                        </div>
                                        <div className="form-floating">
                                            <input
                                                type="range"

                                                id="form-floating-input1"
                                            />
                                        </div>
                                    </div> */}
                                    <h5 className={styles.sub_title}>Màu sắc</h5>
                                    <div>
                                        <Color handleSort={handleSort}/>
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
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="filter-sort-grid mb-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center gap-10">
                                    <p className='mb-0' style={{ whiteSpace: "nowrap" }}>Xếp xếp theo:</p>
                                    <select name="" id="" className='form-control form-select' onChange={(e)=>handleSort(e.target.value,"sort")}>
                                        <option value="All">Mặc định</option>
                                        <option value="-totalRating">Nổi bật</option>
                                        <option value="best-selling">Mua nhiều</option>
                                        <option value="discount">Giá: Thấp-Cao</option>
                                        <option value="-discount">Giá: Cao-Thấp</option>
                                    </select>
                                </div>
                                <div className="d-flex align-items-center gap-10">
                                    <p className="total-products">{data?.total} sản phẩm</p>
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
                                products && products?.map((item:any, index:any) => {
                                    return (
                                        <ProductCards key={index} data={item} grid={4} />
                                    )
                                })
                            }
                            <Pagination data={products} total={data.total}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default HeadphonePage;