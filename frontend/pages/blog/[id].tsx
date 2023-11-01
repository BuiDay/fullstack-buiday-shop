import React from 'react';
import styles from '../../styles/SingleBlog.module.scss'
import Breadcrumb from "../../components/Common/Breadcrumb/Breadcrumb";
import Meta from "../../components/Common/Meta/Meta";
import { HiOutlineArrowLeft } from 'react-icons/hi'
import Link from 'next/link';
import Image from 'next/image';

const SingleBlog = () => {
    return (
        <>
            <Meta title={"Blog"} />
            <Breadcrumb title={"Blog"} />
            <div className="blog-wrapper home_wrapper_2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <Link href='/blogs'>
                                <HiOutlineArrowLeft className='me-3' />
                                Go back to Blogs
                            </Link>
                            <div className={styles.single_blog_card}>

                                <div className="elementor-element elementor-element-5bf379a8 elementor-widget elementor-widget-theme-post-title elementor-page-title elementor-widget-heading" data-id="5bf379a8" data-element_type="widget" data-widget_type="theme-post-title.default">
                                    <div className="elementor-widget-container elementor-widget-container-title_post">
                                        <h1 className=" elementor-size-default elementor-heading-title-post pt-20">Hướng dẫn cách cập nhật One UI 6.0 cho điện thoại Samsung</h1>
                                    </div>
                                </div>
                                <div className="elementor-element elementor-widget elementor-widget-jnews_post_meta_elementor" data-element_type="widget" data-widget_type="jnews_post_meta_elementor.default">
                                    <div className="elementor-widget-container elementor-widget-container-author_post">
                                        <div className="jeg_post_meta jeg_custom_meta_wrapper">
                                            <div className="meta_left">
                                                <div className="jeg_meta_author">
                                                    {/* <Image alt="Thư Hoàng" src="https://secure.gravatar.com/avatar/33948c67ba80599c57a4f49cfe6007cb?s=96&amp;d=mm&amp;r=g" className="avatar avatar-80 photo lazy" > */}
                                                        <a href="https://cellphones.com.vn/sforum/author/thanhthu" data-wpel-link="exclude">Thư Hoàng</a>
                                                </div>
                                                <div className="jeg_meta_date jeg_meta_date-detail_post jeg_meta_date-detail_post_author">
                                                    <a href="https://cellphones.com.vn/sforum/cap-nhat-one-ui-6-0">01/11/2023</a>
                                                </div>
                                            </div>
                                            <div className="meta_right"></div>
                                        </div>
                                    </div>
                                </div>
                                <Image className='img-fluid my-4' src={require('../../assets/images/blog-1.jpg')} alt="" height={100} width={100}/>
                                <p style={{textAlign: "justify"}}><strong>Khi sử dụng các thiết bị điện tử, đặc biết là <a title="điện thoại" href="https://cellphones.com.vn/mobile.html">điện thoại</a>, việc cập nhật hệ điều hành và phần mềm là một phần không thể thiếu để đảm bảo trải nghiệm luôn tốt nhất và an toàn. Điện thoại <a title="Samsung" href="https://cellphones.com.vn/mobile/samsung.html">Samsung</a>, với giao diện One UI, không ngừng được cải tiến và nâng cấp để mang lại những tính năng mới và tối ưu hóa hiệu suất. Gần đây, Samsung đã chính thức công bố phiên bản cập nhật One UI 6.0 thêm nhiều tính năng mới và ấn tượng.</strong></p>
                                <p style={{textAlign: "justify"}}>Trong bài viết này, Sforum sẽ hướng dẫn bạn từng bước chi tiết cách để cập nhật One UI 6.0 cho điện thoại Samsung của mình, giúp bạn tận hưởng những tính năng mới nhất và tối ưu hóa hiệu suất thiết bị.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleBlog;