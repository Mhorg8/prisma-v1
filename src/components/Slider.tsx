"use client"
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

interface  SliderProps {
    products ?: any ,
}

const Slider = ({products} :SliderProps) => {
    return (
        <div className="mt-20 container h-full">
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                loop={true}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;