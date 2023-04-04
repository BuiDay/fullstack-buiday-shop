
import * as PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs } from 'swiper'
import { useState } from 'react'
import Image from 'next/image';

interface IProps{
    images:[]
}

const Slider:React.FC<IProps> = ({images}) => {
    
    const [activeThumb, setActiveThumb] = useState<any>(null)
    const handle = (e:any) =>{
        setActiveThumb(e)
    }
    return (
        <div>
             <Swiper
            loop={true}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation, Thumbs]}
            grabCursor={true}
            thumbs={{ swiper: activeThumb && !activeThumb.destroyed ? activeThumb : null }}
            className='product-images-slider'
        >
            {
               images && images.map((item, index) => (
                    <SwiperSlide key={index}>                    
                        <Image src={item} alt="product images" className='border' width={500} height={500} />
                    </SwiperSlide>
                ))
            }
        </Swiper>


        <Swiper
            onSwiper={(e)=>{handle((e))}}
            loop={true}
            spaceBetween={10}
            slidesPerView={5}
            modules={[Navigation, Thumbs]}
            className='product-images-slider-thumbs'
        >
            {
             images && images.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="product-images-slider-thumbs-wrapper">
                            <img src={item} alt="product images" />
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
        </div>
    );
};

export default Slider;