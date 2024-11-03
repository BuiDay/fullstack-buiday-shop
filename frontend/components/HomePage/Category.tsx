import React from 'react';
import Image from 'next/image';
import styles from '../../styles/HomePage.module.scss'

import Camera from '../../assets/images/camera.jpg'
import Headphone from '../../assets/images/headphone.jpg'
import Speaker from '../../assets/images/speaker.jpg'
import Laptop from '../../assets/images/laptop.jpg'

const Category = () => {
    return (
        <section className={`py-5 d-md-block d-none`}>
        <div className="container-xxl">
            <div className="row">
                <div className="col-12">
                    <div className={`${styles.categories} d-flex flex-wrap align-items-center`}>
                        <div className='d-flex gap-lg-30 gap-10 justify-content-evenly align-items-center'>
                            <div>
                                <h6>Camera</h6>
                                <p>12 Items</p>
                            </div>
                            <Image src={Camera} alt="Camera" />
                        </div>

                        <div className='d-flex gap-lg-30 gap-10 justify-content-evenly align-items-center'>
                            <div>
                                <h6>Headphone</h6>
                                <p>20 Items</p>
                            </div>
                            <Image src={Headphone} alt="Headphone" />
                        </div>

                        <div className='d-flex gap-lg-30 gap-10 justify-content-evenly align-items-center'>
                            <div>
                                <h6>Speaker</h6>
                                <p>4 Items</p>
                            </div>
                            <Image src={Speaker} alt="Speaker" />
                        </div>

                        <div className='d-flex gap-lg-30 gap-10 justify-content-evenly align-items-center'>
                            <div>
                                <h6>Laptop</h6>
                                <p>16 Items</p>
                            </div>
                            <Image src={Laptop} alt="Laptop" />
                        </div>

                        <div className='d-flex gap-lg-30 gap-10 justify-content-evenly align-items-center'>
                            <div>
                                <h6>Phone</h6>
                                <p>5 Items</p>
                            </div>
                            <Image src={require("../../assets/images/tab.jpg")} width={110} alt="tab" />
                        </div>

                        <div className='d-flex gap-lg-30 gap-10 justify-content-evenly align-items-center'>
                            <div>
                             
                                <h6>Home App</h6>
                                <p>17 Items</p>
                            </div>
                            <Image src={require("../../assets/images/homeapp.jpg")} alt="homeapp" />
                        </div>

                        <div className='d-flex gap-lg-30 gap-10 justify-content-evenly align-items-center'>
                            <div>
                                <h6>TV</h6>
                                <p>4 Items</p>
                            </div>
                            <Image src={require("../../assets/images/tv.jpg")} alt="tv" />
                        </div>

                        <div className='d-flex gap-30 justify-content-evenly align-items-center'>
                            <div>
                                <h6>Watch</h6>
                                <p>14 Items</p>
                            </div>
                            <Image className='img-fluid' src={require("../../assets/images/watch-2.jpg")} alt="watch" width={80} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Category;