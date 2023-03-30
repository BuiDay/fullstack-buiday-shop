import React from 'react';
import SideBar from '../Common/SideBar/SideBar';
import styles from './MobilePage.module.scss'

const MobilePage = () => {
    return (
        <div className={`store-wrapper home_wrapper_2 py-4`}>
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">
                           <SideBar />                                           
                        </div>
                        <div className="col-9">
                            <div className="filter-sort-grid mb-4">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center gap-10">
                                        <p className='mb-0'>Sort by:</p>
                                        {/* <select name="" id="" className='form-control form-select' onChange={(e)=>handleParam(e.target.value)}> */}
                                        <select name="" id="" className='form-control form-select'>
                                            <option value="manual">Featured</option>
                                            <option value="best-selling">Best selling</option>
                                            <option value="sort=brand">Alphabetically: A-Z</option>
                                            <option value="sort=-brand">Alphabetically: Z-A</option>
                                            <option value="sort=price">Price: Low to High</option>
                                            <option value="sort=-price">Price: High to Low</option>
                                            <option value="created-ascending">Date: Old to New</option>
                                            <option value="created-descending">Date: New to Old</option>
                                        </select>
                                    </div>
                                    <div className="d-flex align-items-center gap-10">
                                        <p className="total-products">21 Products</p>
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
                                    // productsState?.map((item,index)=>{
                                    //     return(
                                    //         <ProductCard key={index} data={item} grid={grid}/>
                                    //     )
                                    // })
                              }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default MobilePage;