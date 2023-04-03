import React from 'react';
import styles from './SideBar.module.scss'
import Link from 'next/link';

const SideBar = () => {
    return (
        <div className=''>
             <div className={`${styles.filter_card} mb-3`}>
                                <h3 className={styles.filter_tilte}>Lựa chọn theo tiêu chí</h3>
                                <div>
                                    <ul>
                                        <li><Link href="/mobile">All</Link></li>
                                        <li><Link href="/mobile?brand=Apple">Apple</Link></li>
                                        <li><Link href="/mobile?brand=Samsung">Samsung</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className={`${styles.filter_card} mb-3`}>
                                <h3 className={styles.filter_tilte}>Filter By</h3>
                                <div>
                                    <h5 className={styles.sub_title}>Brand</h5>
                                    <div>
                                    <ul>
                                        {/* <li><Link to="/ourstore?brand=Apple" onClick={()=>setParam("brand=Apple")}>Apple</Link></li>
                                        <li><Link to="/ourstore?brand=Dell" onClick={()=>setParam("brand=Dell")}>Dell</Link></li>
                                        <li><Link to="/ourstore?brand=Samsung" onClick={()=>setParam("brand=Samsung")}>Samsung</Link></li>
                                        <li><Link to="/ourstore?brand=Hp" onClick={()=>setParam("brand=Hp")}>Hp</Link></li> */}
                                    </ul>
                                </div>
                                    <h5 className={styles.sub_title}>Availablity</h5>
                                    <div>
                                        <div className={`${styles.form_check} d-flex align-items-center`}>
                                            <input type="checkbox" className={`${styles.form_check_input} form-check-input`}/>
                                            <label className={`${styles.form_check_label} form-check-label`}>
                                                In stock (1)
                                            </label>
                                        </div>
                                        <div className="form-check d-flex align-items-center">
                                            <input type="checkbox" className={`${styles.form_check_input} form-check-input`}/>
                                            <label className={`${styles.form_check_label} form-check-label`}>
                                                Out of stock (0)
                                            </label>
                                        </div>
                                    </div>
                                    <h5 className={styles.sub_title}>Price</h5>
                                    <div className='d-flex align-items-center gap-10' >
                                        <div className="form-floating">
                                            <label htmlFor="form-floating-input">From</label>
                                            <input type="email" className="form-control" id="form-floating-input"/>
                                        </div>
                                        <div className="form-floating">
                                            <label htmlFor="form-floating-input1">To</label>
                                            <input type="email" className="form-control" id="form-floating-input1"/>
                                        </div>
                                    </div>
                                    <h5 className='sub-title'>Colors</h5>
                                    <div>
                                        <ul className='colors ps-0'>
                                            <li style={{background:"yellow"}}></li>
                                            <li style={{background:"blue"}}></li>
                                            <li style={{background:"green"}}></li>
                                            <li style={{background:"gray"}}></li>
                                            <li style={{background:"purple"}}></li>
                                            <li style={{background:"black"}}></li>
                                            <li style={{background:"cyan"}}></li>
                                            <li></li>
                                        </ul>
                                    </div>
                                    <h5 className='sub-title'>Size</h5>
                                    <div>
                                        <div className="form-check d-flex align-items-center">
                                            <input type="checkbox" className='form-check-input' id=""/>
                                            <label className='form-check-label'>
                                                S (1)
                                            </label>
                                        </div>

                                        <div className="form-check d-flex align-items-center">
                                            <input type="checkbox" className='form-check-input' id=""/>
                                            <label className='form-check-label'>
                                                M (1)
                                            </label>
                                        </div>

                                        <div className="form-check d-flex align-items-center">
                                            <input type="checkbox" className='form-check-input' id=""/>
                                            <label className='form-check-label'>
                                                L (1)
                                            </label>
                                        </div>
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
    );
};

export default SideBar;