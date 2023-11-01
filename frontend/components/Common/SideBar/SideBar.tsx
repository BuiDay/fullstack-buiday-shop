import React, { useState } from "react";
import Link from 'next/link';
import Color from '../Color/Color';
import Image from 'next/image';
import styles from '../../../styles/SideBar.module.scss'
import { useRouter } from 'next/router';

const SideBar = () => {
    const router = useRouter()
    const handleSort = (value: string | number, title: string) => {
        if (value !== "All") {
            router.push(
                {
                    pathname: "/mobile",
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
                    pathname: "/mobile",
                    query: {}
                }
            )
    }

    return (
        <>
            <div className={`${styles.filter_card} mb-3`}>
                <h3 className={styles.filter_tilte}>Lựa chọn theo tiêu chí</h3>
                <div>
                    <ul className={styles.sidebar_brands}>
                        <li>
                            <div onClick={() => handleSort("All", "All")}>Tất cả</div>
                        </li>
                        <li>
                            <div onClick={() => handleSort("Apple", "brand")}>
                                <Image
                                    alt=""
                                    width={60}
                                    height={25}
                                    src="https://cdn2.cellphones.com.vn/x50,webp,q30/media/tmp/catalog/product/t/_/t_i_xu_ng_71_.png"
                                ></Image>
                            </div>
                        </li>
                        <li>
                            <div onClick={() => handleSort("Samsung", "brand")}>
                                <Image
                                    alt=""
                                    width={60}
                                    height={25}
                                    src="https://cdn2.cellphones.com.vn/x50,webp,q30/media/tmp/catalog/product/t/_/t_i_xu_ng_72_.png"
                                ></Image>
                            </div>
                        </li>
                        <li>
                            <div onClick={() => handleSort("Xiaomi", "brand")}>
                                <Image
                                    alt=""
                                    width={60}
                                    height={25}
                                    src="	https://cdn2.cellphones.com.vn/x50,webp,q30/media/tmp/catalog/product/t/_/t_i_xu_ng_73_.png"
                                ></Image>
                            </div>
                        </li>
                        <li>
                            <div onClick={() => handleSort("OPPO", "brand")}>
                                <Image
                                    alt=""
                                    width={60}
                                    height={25}
                                    src="https://cdn2.cellphones.com.vn/x50,webp,q30/media/tmp/catalog/product/t/_/t_i_xu_ng_74_.png"
                                ></Image>
                            </div>
                        </li>
                        <li>
                            <div onClick={() => handleSort("ASUS", "brand")}>
                                <Image
                                    alt=""
                                    width={60}
                                    height={25}
                                    src="https://cdn2.cellphones.com.vn/x50,webp,q30/media/tmp/catalog/product/t/_/t_i_xu_ng_77_.png"
                                ></Image>
                            </div>
                        </li>
                        <li>
                            <div onClick={() => handleSort("realme", "brand")}>
                                <Image
                                    alt=""
                                    width={60}
                                    height={25}
                                    src="	https://cdn2.cellphones.com.vn/x50,webp,q30/media/tmp/catalog/product/t/_/t_i_xu_ng_76_.png"
                                ></Image>
                            </div>
                        </li>
                        <li>
                            <div onClick={() => handleSort("Nokia", "brand")}>
                                <Image
                                    alt=""
                                    width={60}
                                    height={25}
                                    src="https://cdn2.cellphones.com.vn/x50,webp,q30/media/tmp/catalog/product/t/_/t_i_xu_ng_75_.png"
                                ></Image>
                            </div>
                        </li>
                        <li>
                            <div onClick={() => handleSort("vivo", "brand")}>
                                <Image
                                    alt=""
                                    width={60}
                                    height={25}
                                    src="https://cdn2.cellphones.com.vn/x50,webp,q30/media/tmp/catalog/product/t/_/t_i_xu_ng_67_.png"
                                ></Image>
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
                                <div onClick={() => handleSort(5, "display")}>Dưới 6 inch</div>
                            </li>
                            <li>
                                <div onClick={() => handleSort(7, "display")}>Trên 6 inch</div>
                            </li>
                        </ul>
                    </div>
                    <h5 className={styles.sub_title}>Bộ nhớ trong</h5>
                    <ul className={styles.sidebar_brands}>
                        <li onClick={() => handleSort("32", "storage")}>
                            <div>Dưới 32Gb</div>
                        </li>
                        <li onClick={() => handleSort("64", "storage")}>
                            <div>32Gb-64Gb</div>
                        </li>
                        <li onClick={() => handleSort("128", "storage")}>
                            <div>128Gb-256Gb</div>
                        </li>
                        <li onClick={() => handleSort("512", "storage")} >
                            <div>Trên 512Gb</div>
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
                                max='100'
                                min='0'
                                step='1'
                                type="range"
                                value={persent1}
                                className='w-full appearance-none pointer-events-none absolute top-0 bottom-0'
                                // onChange={(e) => {
                                //     setPersent1(+e.target.value)
                                //     activedEl && setActivedEl('')
                                // }}
                            />
                            <input
                                max='100'
                                min='0'
                                step='1'
                                type="range"
                                value={persent2}
                                className='w-full appearance-none pointer-events-none absolute top-0 bottom-0'
                                // onChange={(e) => {
                                //     setPersent2(+e.target.value)
                                //     activedEl && setActivedEl('')
                                // }}
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
        </>
    );
};

export default SideBar;
