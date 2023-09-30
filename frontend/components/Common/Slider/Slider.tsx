
import * as PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs } from 'swiper'
import { useState } from 'react'
import Image from 'next/image';

interface IProps{
    images:[]
    slidesPerView?:number,
    navigate?:boolean,
    width?:number,
    height?:number,
}

const Slider:React.FC<IProps> = ({images,slidesPerView,navigate,width,height}) => {
    
    const [activeThumb, setActiveThumb] = useState<any>(null)
    const handle = (e:any) =>{
        setActiveThumb(e)
    }
    return (
        <div>
             <Swiper
            loop={true}
            spaceBetween={10}
            navigation={navigate}
            modules={[Navigation, Thumbs]}
            grabCursor={true}
            thumbs={{ swiper: activeThumb && !activeThumb.destroyed ? activeThumb : null }}
            className='product-images-slider'
        >
            {
               images && images.map((item, index) => (
                    <SwiperSlide key={index}>                    
                    {
                        item &&   <Image src={item} alt="product images" className='' width={width} height={height} />
                    }
                    </SwiperSlide>
                ))
            }
        </Swiper>


        <Swiper
            onSwiper={(e)=>{handle((e))}}
            loop={true}
            spaceBetween={10}
            slidesPerView={slidesPerView}
            modules={[Navigation, Thumbs]}
            className='product-images-slider-thumbs'
        >
            {
             images && images.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="product-images-slider-thumbs-wrapper">
                            <Image src={item} alt="product images" width={100} height={100}/>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
        </div>
    );
};

export default Slider;