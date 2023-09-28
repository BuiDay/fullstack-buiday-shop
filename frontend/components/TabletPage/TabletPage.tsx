import React, { useEffect, useState } from 'react';
import styles from './TabletPage.module.scss'

import ProductCards from '../ProductCards/ProductCards';
import { useRouter } from 'next/router';
import Color from '../Common/Color/Color';
import Image from 'next/image';
import Pagination from '../Common/Pagination/Pagination';


interface IQuery {
    category?: string,
    brand?: string,
    sort?: string
}

interface IProps {
    data?: any,
}

const TabletPage: React.FC<IProps> = ({ data }) => {
    const products = data.data
    const router = useRouter()

    const handleSort = (value: string | number, title: string) => {
        if (value !== "All") {
            router.push(
                {
                    pathname: "/tablet",
                    query: {
                        ...router.query,
                        page: 1,
                        [title]: value,
                    }
                }
            )
        } else
            router.push(
                {
                    pathname: "/tablet",
                    query: {}
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
                                            <div onClick={() => handleSort("All", "All")}>Tất cả</div>
                                        </li>
                                        <li>
                                            <div onClick={() => handleSort("iPad", "brand")}>
                                                <Image alt='' width={60} height={25} src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:50/q:30/plain/https://cellphones.com.vn/media/tmp/catalog/product/i/p/ipad-logo-newww.png"></Image>
                                            </div>
                                        </li>
                                        <li>
                                            <div onClick={() => handleSort("Samsung", "brand")}>
                                                <Image alt='' width={60} height={25} src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:50/q:30/plain/https://cellphones.com.vn/media/tmp/catalog/product/f/r/frame_60.png"></Image>
                                            </div>
                                        </li>
                                        <li>
                                            <div onClick={() => handleSort("Xiaomi", "brand")}>
                                                <Image alt='' width={60} height={25} src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:50/q:30/plain/https://cellphones.com.vn/media/tmp/catalog/product/f/r/frame_61.png"></Image>
                                            </div>
                                        </li>
                                        <li>
                                            <div onClick={() => handleSort("Lenovo", "brand")}>
                                                <Image alt='' width={60} height={25} src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:50/q:30/plain/https://cellphones.com.vn/media/wysiwyg/Icon/brand_logo/Lenovo.png"></Image>
                                            </div>
                                        </li>
                                        <li>
                                            <div onClick={() => handleSort("OPPO", "brand")}>
                                                <Image alt='' width={60} height={25} src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:50/q:30/plain/https://cellphones.com.vn/media/tmp/catalog/product/f/r/frame_62.png"></Image>
                                            </div>
                                        </li>
                                        <li>
                                            <div onClick={() => handleSort("Máy đọc sách", "brand")}>
                                                <span>Máy đọc sách</span>
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
                                                <div onClick={() => handleSort(4, "ram")}>Dưới 4Gb</div>
                                            </li>
                                            <li>
                                                <div onClick={() => handleSort(5, "ram")}>4Gb-6Gb</div>
                                            </li>
                                            <li>
                                                <div onClick={() => handleSort(6, "ram")}>8Gb-12Gb</div>
                                            </li>
                                            <li>
                                                <div onClick={() => handleSort(12, "ram")}>Trên 12Gb</div>
                                            </li>
                                        </ul>
                                    </div>
                                    <h5 className={styles.sub_title}>Kích thước màn hình</h5>
                                    <div>
                                        <ul className={styles.sidebar_brands}>
                                            <li>
                                                <div onClick={() => handleSort(5, "display")}>Khoảng 7 inch - 8 inch</div>
                                            </li>
                                            <li>
                                                <div onClick={() => handleSort(7, "display")}>Khoảng 10 inch - 11 inch</div>
                                            </li>
                                            <li>
                                                <div onClick={() => handleSort(7, "display")}>Trên 12 inch</div>
                                            </li>
                                        </ul>
                                    </div>
                                    <h5 className={styles.sub_title}>Bộ nhớ trong</h5>
                                    <ul className={styles.sidebar_brands}>
                                        <li>
                                            <div >Dưới 32Gb</div>
                                        </li>
                                        <li>
                                            <div>32Gb-64Gb</div>
                                        </li>
                                        <li>
                                            <div >128Gb-256Gb</div>
                                        </li>
                                        <li>
                                            <div >Trên 512Gb</div>
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
                                    <h5 className={styles.sub_title}>Giá</h5>
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
                                    </div>
                                    <h5 className={styles.sub_title}>Màu sắc</h5>
                                    <div>
                                        <Color />
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
                                    <select name="" id="" className='form-control form-select' onChange={(e) => handleSort(e.target.value, "sort")}>
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
                                products?.length > 0 ? <>
                                {
                                    products && products?.map((item: any, index: any) => {
                                        return (
                                            <ProductCards key={index} data={item} grid={4} />
                                        )
                                    })
                                }
                                <Pagination data={products} total={data.total} />
                            </> : <div className='w-100 mt-5'>
                                <h3 className='text-center'>Không tìm thấy sản phẩm</h3>
                            </div> 
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default TabletPage;