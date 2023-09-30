import React from 'react';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';

const MarqueeBrands = () => {
    return (
        <section className='marquee-wrapper py-5'>
        <div className="container-xxl">
            <div className="row">
                <div className="col-12">
                    <div className="marquee-inner-wrapper card-wrapper">
                        <Marquee gradient={false} className='d-flex'>
                            <div className='mx-4 w-25'>
                                <Image src={require('../../assets/images/brand-01.png')} alt="brand" />
                            </div>
                            <div className='mx-4 w-25'>
                                <Image src={require('../../assets/images/brand-02.png')} alt="brand" />
                            </div>
                            <div className='mx-4 w-25'>
                                <Image src={require('../../assets/images/brand-03.png')} alt="brand" />
                            </div>
                            <div className='mx-4 w-25'>
                                <Image src={require('../../assets/images/brand-04.png')} alt="brand" />
                            </div>
                            <div className='mx-4 w-25'>
                                <Image src={require('../../assets/images/brand-05.png')} alt="brand" />
                            </div>
                            <div className='mx-4 w-25'>
                                <Image src={require('../../assets/images/brand-06.png')} alt="brand" />
                            </div>
                            <div className='mx-4 w-25'>
                                <Image src={require('../../assets/images/brand-07.png')} alt="brand" />
                            </div>
                            <div className='mx-4 w-25'>
                                <Image src={require('../../assets/images/brand-08.png')} alt="brand" />
                            </div>
                        </Marquee>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default MarqueeBrands;