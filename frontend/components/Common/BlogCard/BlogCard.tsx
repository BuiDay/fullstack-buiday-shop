import React from 'react';
import styles from'../../../styles/BlogCard.module.scss'
import Link from 'next/link';
import Image from 'next/image';

const BlogCard = (props:any) => {
    const {grid} = props
    return (
        <div className={` ${grid===3 ? `gr-6` : 'col-3'}`}>
            <Link href="/blog/12" className={styles.blog_card}>
                <div className={styles.car_image}>
                    <Image className='img-fluid w-100' src={require('../../../assets/images/blog-1.jpg')} alt="" />
                </div>
                <div className={styles.blog_content}>
                    <p className={styles.date}>1 Dec, 2022</p>
                    <h5 className={styles.title}>
                        A beautiful sunday morning renaissance
                    </h5>
                    <p className={styles.desc}>
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ullam laudantium asperiores tempore dolores blanditiis.
                    </p>
                    <Link href='/blog/12' className={`button ${styles.blog_btn}`}>
                        Read More
                    </Link>
                </div>
            </Link>
        </div>
    );
};

export default BlogCard;