import React from 'react';
import NewsLetter from "../../assets/images/newsletter.png"
import {BsSearch} from 'react-icons/bs'
import  Link from 'next/link';
import { BsLinkedin,BsInstagram,BsGithub,BsYoutube } from 'react-icons/bs';
import Image from 'next/image';

const Footer = () => {
    return (
        <>
            <footer className='py-4 d-md-block d-none'>
                <div className="container-xxl">
                    <div className="row align-items-center">
                        <div className="col-5">
                            <div className="footer-top-data d-flex gap-30 align-items-center">
                                <Image src={NewsLetter} alt="NewsLetter" />
                                <h2 className='text-white'>Sign up for NewsLetter</h2>
                            </div>
                        </div>
                        <div className="col-7">
                            <div className="input-group py-2">
                                <input  type="text" 
                                        className="form-control" 
                                        placeholder='Input your email...'
                                />
                                <span className='input-group-text py-2 text-white'>
                                    Subscribe
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className='py-4'>
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-md-4 col-12 text-white">
                            <h4 className='mb-4'>Contact Us</h4>
                            <div className='footer-links d-flex flex-column'>
                                <address>
                                    741 Hung Vuong, thi tran Di Linh, tinh Lam Dong
                                </address>
                                <Link href="#" className='text-white my-2'>09 3380 4785</Link>
                                <Link href="#" className='text-white mt-3 mb-3'>buivanduynhat@gmail.com</Link>
                                <div className='social-icons d-flex align-items-center gap-30 mb-3 '>
                                    <Link href="#"  className='text-white fs-4' aria-label="Read more about Seminole tax hike">
                                        <BsLinkedin/>
                                    </Link>
                                    <Link href="#" className='text-white fs-4' aria-label="Read more about Seminole tax hike">
                                        <BsInstagram />
                                    </Link>
                                    <Link href="#" className='text-white fs-4' aria-label="Read more about Seminole tax hike">
                                        <BsGithub />
                                    </Link>
                                    <Link href="#" className='text-white fs-4' aria-label="Read more about Seminole tax hike">
                                        <BsYoutube />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-12 text-white">
                            <h4 className='mb-4'>Information</h4>
                            <div className='footer-links d-flex flex-column'>
                                <Link href="/privacy-policy" className='text-white py-2 mb-1'>Privacy Policy</Link>
                                <Link href="/refund-policy" className='text-white py-2 mb-1'>Refund Policy</Link>
                                <Link href="/shipping-policy" className='text-white py-2 mb-1'>Shipping Policy</Link>
                                <Link href="/conditions" className='text-white py-2 mb-1'>Term & Conditions</Link>
                                <Link href="/blogs" className='text-white py-2 mb-1'>Blogs</Link>
                            </div>
                        </div>
                        <div className="col-md-3 col-12 text-white">
                            <h4 className='mb-4'>Account</h4>
                            <div className='footer-links d-flex flex-column'>
                                <Link href="#" className='text-white py-2 mb-1'>About Us</Link>
                                <Link href="#" className='text-white py-2 mb-1'>Faq</Link>
                                <Link href="#" className='text-white py-2 mb-1'>Contact</Link>
                            </div>
                        </div>
                        <div className="col-md-2 col-12 text-white">
                            <h4 className='mb-4'>Quick Links</h4>
                            <div className='footer-links d-flex flex-column'>
                                <Link href="#"  className='text-white py-2 mb-1'>Laptops</Link>
                                <Link href="#"  className='text-white py-2 mb-1'>Headphones</Link>
                                <Link href="#"  className='text-white py-2 mb-1'>Tablets</Link>
                                <Link href="#"  className='text-white py-2 mb-1'>Watch</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className='py-4'>
                <div className='container-xxl'>
                    <div className="row">
                        <div className="col-12">
                            <p className='text-center mb-0 text-white'>
                            Copyright {new Date().getFullYear()} © by Nhat Bui
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;