import React from 'react';
import './Blog.css'
import Breadcrumb from '../../components/Common/Breadcrumb/Breadcrumb';
import Meta from '../../components/Common/Meta/Meta';
import BlogCard from '../../components/Common/BlogCard/BlogCard';

const Blog = () => {
    return (
        <>
            <Meta title={"Blogs"}/>
            <Breadcrumb title={"Blogs"} />
            <div className="blog-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">
                            <div className="filter-card mb-3">
                                <h3 className="filter-tilte">Shop By Categories</h3>
                                <div>
                                    <ul>
                                        <li>Watch</li>
                                        <li>TV</li>
                                        <li>Camera</li>
                                        <li>Laptop</li>
                                    </ul>
                                </div>
                            </div>                     
                        </div>
                        <div className="col-9 d-flex flex-wrap gap-15">
                            <BlogCard grid={3}/>
                            <BlogCard grid={3}/>
                            <BlogCard grid={3}/>
                            <BlogCard grid={3}/>
                            <BlogCard grid={3}/>
                            <BlogCard grid={3}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blog;