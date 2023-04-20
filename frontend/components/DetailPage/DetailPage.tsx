import React, { useEffect, useState } from 'react';
import styles from './DetailPage.module.scss'
import Slider from '../Common/Slider/Slider';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import { useAppSelector } from '@/redux/hook';
import { TbGitCompare } from 'react-icons/tb'
import { AiOutlineHeart } from 'react-icons/ai'
import StarRatings from 'react-star-ratings';

const DetailPage = ({data}:any) => {
    
    const [isShowDes, setIsShowDes] = useState(false)
    const [isNewRating, setIsNewRating] = useState<number>()
    const [isColor, setIsColor] = useState<string>()

    const handleColor =(color:string)=>{
        setIsColor(color)
    }

    const handlePrice = (price:number,discount:number) =>{
        if(price !==0 && discount !==0)
        return <>
                <p className="price fs-4 text-danger">{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(data?.discount)}</p>
                <del className="price fs-5">{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(data?.price)}</del>
            </>
        else if(price ===0 && discount !==0){
            return<>
                 <p className="price fs-4 text-danger">{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(data?.discount)}</p>
            </>
        }
        else
            return<>
                <p className={`price text-danger`}>Giá liên hệ</p>
            </> 
    }

    return (
        <div>
            <div className="main-product-wrapper py-5 home_wrapper_2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <div style={{

                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <div style={{
                                    borderRadius: "10px",
                                    maxWidth: '550px',
                                    width: "100%",
                                    backgroundColor: '#fff',
                                    padding: '20px'
                                }}>
                                    {data && <Slider images={data.images && data.images.images} slidesPerView={5} navigate={true} width={500} height={500}/>}
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className={styles.main_product_details}>
                                <div className={styles.border_bottom}>
                                    <h3 className='title'>
                                        {data?.title}
                                    </h3>
                                </div>
                                <div className={`${styles.border_bottom} py-3`}>
                                    <div className='d-flex gap-4 align-items-end'>
                                       {
                                        handlePrice(data.price,data.discount)
                                       }
                                    </div>
                                    <div className='d-flex gap-10 align-items-center'>
                                        <StarRatings
                                            rating={data?.totalRating && data?.totalRating}
                                            starDimension="15px"
                                            starRatedColor="#ffd700"
                                        />
                                        <p className='mb-0 t-review mt-2'>{`${data?.ratings ? data?.ratings?.length : 0} Đánh giá`}</p>
                                    </div>
                                    <a href="#review" className='t-review'>Write a Review</a>
                                </div>

                                {
                                   data?.color && data?.color.length !==0 ?
                                    <>
                                        <div className='d-flex gap-10 flex-column mt-3'>
                                        <h3 className={styles.product_heading}>Màu sắc:</h3>
                                            <div className='d-flex gap-3'>
                                                {
                                                    data?.color && data?.color.map((item:string,index:number)=>{
                                                        return(
                                                            <div key={index} className={`${isColor?.includes(item) ? styles.activeColor: ""} py-1 px-2`} style={{border:"1px solid rgba(0, 0, 0, 0.25)",borderRadius:"8px",cursor:"pointer"}} onClick={()=>handleColor(item)}>{item}</div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </> : ""
                                   
                                }

                                <div className={`${styles.border_bottom} mt-3`}>
                                    <div className='d-flex gap-10 align-items-center mb-3'>
                                        <h3 className={styles.product_heading}>Số lượng:</h3>
                                        <div>
                                            <input type="number"
                                                name=''
                                                defaultValue={1}
                                                min={1}
                                                max={10}
                                                className='form-control'
                                                style={{ width: "60px", height: "30px", textAlign: "center" }}
                                            />
                                        </div>

                                    </div>
                                </div>

                                <div className={`${styles.border_bottom} py-3`}>
                                    <div className='detail_technical' dangerouslySetInnerHTML={{ __html: `${data?.technicalInfo && data?.technicalInfo.technicalInfo}` }} />
                                </div>

                                <div className="d-flex gap-15 align-items-center py-3 ">
                                    <button className={`${styles.button} button border-0`}>Thêm vào giỏ hàng</button>
                                    <button className={`${styles.button} button border-0 ${styles.orange_color}`}>Mua ngay</button>
                                </div>

                                <div className='d-flex gap-15 align-items-center mb-4'>
                                    <div>
                                        <a href="">
                                            <TbGitCompare className='fs-5 me-2' />
                                            Add to Compare
                                        </a>
                                    </div>
                                    <div>
                                        <a href="">
                                            <AiOutlineHeart className='fs-5 me-2' />
                                            Add to Wishlist
                                        </a>
                                    </div>
                                </div>


                                {/* <div className="accordion accordion-flush" id="accordionFlushExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="flush-headingOne">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            Accordion Item #1
                                        </button>
                                        </h2>
                                        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="flush-headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                            Accordion Item #2
                                        </button>
                                        </h2>
                                        <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="flush-headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                            Accordion Item #3
                                        </button>
                                        </h2>
                                        <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                                        </div>
                                    </div>
                                    </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className='description-wrapper py-5 home_wrapper_2'>
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h4 className='mb-4'>Thông tin mô tả</h4>
                            <div className="bg-white p-4 " style={{ borderRadius: "10px" }}>
                                <div className='p-3 px-5' style={{ background: "#f2f2f2", borderRadius: "10px" }}>
                                    <p>
                                        <div className='text-center fw-bold mb-4' style={{ color: "#d70018", fontSize: "24px" }}>Đặc điểm nổi bật</div>
                                        <div dangerouslySetInnerHTML={{ __html: `${data?.description && data?.description.features_description}` }} />
                                    </p>
                                </div>

                                {isShowDes && <div className='mt-5 detail_description'>
                                    <div style={{ fontSize: "18px" }} dangerouslySetInnerHTML={{ __html: `${data?.description && data?.description.detail_description}` }} />
                                </div>}
                                {
                                    isShowDes ? (
                                        <div className='text-center mt-3' style={{cursor:"pointer",color:"blue"}} onClick={() => setIsShowDes(false)}>
                                            Ẩn mô tả
                                        </div>
                                    ) : (
                                        <div className='text-center mt-3' style={{cursor:"pointer",color:"blue"}} onClick={() => setIsShowDes(true)}>
                                            Xem thêm
                                        </div>
                                    )
                                }


                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`${styles.reviews_wrapper} py-5 home_wrapper_2`}>
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h4 className='mb-4'>Đánh giá và nhận xét {data?.title}</h4>
                            <div className={styles.review_inner_wrapper}>
                                <div className={`${styles.review_head} d-flex justify-content-between align-items-end`}>
                                    <div>
                                        <h3>Khách hàng đánh giá</h3>
                                        <div className='d-flex gap-10 align-items-center'>
                                            <StarRatings
                                                rating={data?.totalRating && data?.totalRating}
                                                starDimension="15px"
                                                starRatedColor="#ffd700"
                                            />
                                            <p className='mb-0 mt-2'>{`${data?.ratings ? data?.ratings?.length : 0} Đánh giá`}</p>
                                        </div>
                                    </div>
                                    {/* {
                                        orderedProduct && ( */}
                                    <div className="">
                                        <a className='text-dark text-decoration-underline' href="">Viết đánh giá</a>
                                    </div>
                                    {/* )
                                    } */}
                                </div>
                                {/* {
                                        !isSuccess ? ( */}
                                <div className={`${styles.review_form} py-4`} id="review">
                                    <h4>Write a review</h4>
                                    <form action="" className='d-flex flex-column gap-20'>
                                        <div>
                                            <StarRatings
                                                rating={isNewRating}
                                                starDimension="15px"
                                                starRatedColor="#ffd700"
                                                starHoverColor='#ffd700'
                                                changeRating={(e) => setIsNewRating(e)}
                                            />
                                        </div>
                                        <div>
                                            <textarea name="" id="" cols={30} rows={4} placeholder='Comments' className='w-100 form-control'></textarea>
                                        </div>
                                        <div className="mt-3 d-flex justify-content-end gap-15 align-items-center">
                                            <button className='button border-0'>Submit Review</button>
                                        </div>
                                    </form>
                                </div>
                                {/* ):""
                                    } */}


                                <div className={styles.reviews}>
                                    {data?.ratings && data?.ratings.map((item: any, index:number) => {
                                        return (<>
                                            <div className={`${styles.review} py-3`}>
                                                <div className="d-flex gap-10 align-items-center" key={index}>
                                                    <div className='w-100 d-flex align-items-center justify-content-between'>
                                                        <h6 className='mb-0'>{item.name}</h6>
                                                        <p>{item.date}</p>
                                                    </div>
                                                </div>
                                                <StarRatings
                                                    rating={item.rating}
                                                    starDimension="15px"
                                                    starRatedColor="#ffd700"
                                                />
                                                <p className='mt-2'>
                                                    {item.comment}
                                                </p>
                                            </div>
                                        </>
                                        )
                                    })}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section className='popular-wrapper py-5 home-wrapper-2'>
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className='section-heading'>Our Popular Products</h3>
                        </div>
                    </div>
                    <div className="row">
                        <ProductCards img={require('../../assets/images/watch-2.jpg')}/>
                        <ProductCards img={require('../../assets/images/watch-41-alum-silver.jpg')}/>
                        <ProductCards img={require('../../assets/images/watch-ultra.png')}/>
                        <ProductCards img={require('../../assets/images/watch-ultra-2.png')}/>
                        <ProductCards img={require('../../assets/images/samsung_2.jpg')}/>
                        <ProductCards img={require('../../assets/images/samsung_1.jpg')}/>
                    </div>
                </div>
            </section> */}
        </div>
    );
};

export default DetailPage;