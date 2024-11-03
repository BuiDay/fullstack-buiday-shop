import React from 'react';
import NewsLetter from "../../assets/images/newsletter.png"
import {BsSearch} from 'react-icons/bs'
import  Link from 'next/link';
import { BsLinkedin,BsInstagram,BsGithub,BsYoutube } from 'react-icons/bs';
import Image from 'next/image';
import Logo from "../../assets/images/logo.png";
import LogoFooter from "../../assets/images/13-1.png";

const Footer = () => {
    return (
        <>
            <footer className='py-3 d-md-block d-none' style={{background:"#ea55e0"}}>
                <div className="container-xxl">
                    <div className="row align-items-center">
                        <div className="col-5">
                            <div className="footer-top-data d-flex gap-2 align-items-center">
                                <div style={{width:"70px"}} >
                                    <Image src={Logo} alt="NewsLetter" style={{ width: "100%", height: "100%" }}/>
                                </div>
                                <h2 className='text-white' style={{fontSize:"18px",fontWeight:"600"}}>TAO YAI TAO YOU</h2>
                            </div>
                        </div>
                        <div className="col-7">
                            <div className="input-group py-2">
                                <input  type="text" 
                                        className="form-control" 
                                        placeholder='Nhập số điện thoại'
                                />
                                <span className='input-group-text py-2' style={{background:"#633bd4",color:"white"}}>
                                    Đăng kí tư vấn
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className='py-4' style={{background:"#ea55e0"}}>
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-md-4 col-12 text-white">
                            <h4 className='mb-4' style={{fontSize:"20px",fontWeight:"600",color:"#633bd4",textTransform:"uppercase"}}>
                               <span style={{border:"solid 1px white",background:"white",padding:"5px 10px",borderRadius:"15px"}}> Liên hệ</span>
                            </h4>
                            <div className='footer-links d-flex flex-column' style={{fontSize:"16px",fontWeight:"500"}}>
                                <address>
                                    741 Hung Vuong, thi tran Di Linh, tinh Lam Dong
                                </address>
                                <Link href="#" className='text-black my-2 text-white'>09 3380 4785</Link>
                                <div className='social-icons d-flex align-items-center gap-30 mb-3 '>
                                    <Link href="#"  className='text-black fs-4' aria-label="Read more about Seminole tax hike">
                                        <BsLinkedin color='white'/>
                                    </Link>
                                    <Link href="#" className='text-black fs-4' aria-label="Read more about Seminole tax hike">
                                        <BsInstagram color='white'/>
                                    </Link>
                                    <Link href="#" className='text-black fs-4' aria-label="Read more about Seminole tax hike">
                                        <BsGithub color='white'/>
                                    </Link>
                                    <Link href="#" className='text-black fs-4' aria-label="Read more about Seminole tax hike">
                                        <BsYoutube color='white'/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-12 text-white">
                            <h4 className='mb-4' style={{fontSize:"20px",fontWeight:"700",color:"#633bd4",textTransform:"uppercase"}}>
                               <span style={{border:"solid 1px white",background:"white",padding:"5px 10px",borderRadius:"15px"}}> Dịch vụ khách hàng</span>
                            </h4>
                            <div className='footer-links d-flex flex-column' style={{fontSize:"16px",fontWeight:"500"}}>
                                <Link href="/privacy-policy" className='  text-white py-2 mb-1'>Hướng dẫn mua hàng</Link>
                                <Link href="/refund-policy" className=' text-white py-2 mb-1'>Quy định đổi hàng</Link>
                                <Link href="/shipping-policy" className=' text-white py-2 mb-1'>Ưu đãi khách hàng</Link>
                                <Link href="/conditions" className=' text-white py-2 mb-1'>Điều khoản sử dụng</Link>
                                <Link href="/blogs" className=' text-white py-2 mb-1'>Chính sách bảo hành</Link>
                                <Link href="/blogs" className=' text-white py-2 mb-1'>Chính sách thanh toán</Link>
                                <Link href="/blogs" className=' text-white py-2 mb-1'>Chính sách giao hàng</Link>
                            </div>
                        </div>
                        <div className="col-md-2 col-12 text-white" style={{fontSize:"16px",fontWeight:"500"}}>
                            <h4 className='mb-4' style={{fontSize:"20px",fontWeight:"700",color:"#633bd4"}}>
                             <span style={{border:"solid 1px white",background:"white",padding:"5px 10px",borderRadius:"15px"}}>DANH MỤC</span> 
                            </h4>
                            <div className='footer-links d-flex flex-column'>
                                <Link href="#" className=' text-white py-2 mb-1'>Xu hướng </Link>
                                <Link href="#" className=' text-white py-2 mb-1'>Tin tức</Link>
                                <Link href="#" className=' text-white py-2 mb-1'>Liên hệ</Link>
                            </div>
                        </div>
                        <div className="col-md-3 col-12 text-black">
                           <div  style={{width:"300px"}} >
                                <Image src={LogoFooter} alt='logo' style={{ width: "100%", height: "100%" }}/>
                           </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* <footer className='py-4'>
                <div className='container-xxl'>
                    <div className="row">
                        <div className="col-12">
                            <p className='text-center mb-0 text-white'>
                            Copyright {new Date().getFullYear()} © by Nhat Bui
                            </p>
                        </div>
                    </div>
                </div>
            </footer> */}
        </>
    );
};

export default Footer;