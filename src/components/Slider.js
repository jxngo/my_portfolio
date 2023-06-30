import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/css';
import 'swiper/css/effect-coverflow'
import '../style/slider.css' 



import AVK from '../assets/project-cover/AVK.jpg';
import Sunbay from '../assets/project-cover/Sunbay.jpg';
import MTL from '../assets/project-cover/MTL.jpg';



export const Slider = () => {


    return (
            <Swiper    
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{clickable: true}}
                scrollbar={{clickable: true}}
            >
            <div>
                <SwiperSlide><img src={AVK} alt="AVK" style={{ width: "100%" }}></img></SwiperSlide>
                <SwiperSlide><img src={Sunbay} alt="AVK" style={{ width: "100%" }}></img></SwiperSlide>
                <SwiperSlide><img src={MTL} alt="AVK" style={{ width: "100%" }}></img></SwiperSlide> 
            </div>
                         
            </Swiper> 
           

    ) 
}

export default Slider