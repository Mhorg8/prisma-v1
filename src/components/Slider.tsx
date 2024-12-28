"use client"
import 'swiper/css';
import {motion} from 'framer-motion';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Product} from "@/types";
import SliderProduct from "@/components/SliderProduct";
import HeadingSection from "@/components/HeadingSection";

interface SliderProps {
    products?: Product[] | null,
}

const Slider = ({products}: SliderProps) => {

    if (!products) {
        return <div className="w-full h-full flex items-center justify-center">
            <h1>Loading....</h1>
        </div>
    }
    ;

    return (
        <div className="mt-20 container h-full space-y-5">
            <HeadingSection title="پر فورش ها"/>

            <motion.div
                initial={{opacity: 0, y: -20}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.2, delay: 0.5}}>


                <Swiper
                    spaceBetween={20}
                    loop={true}
                    breakpoints={{
                        368: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                        1280: {
                            slidesPerView: 4,
                        },
                    }}
                >

                    {products.map(product => (
                        <SwiperSlide key={product.id}>
                            <SliderProduct product={product}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </motion.div>
        </div>
    );
};

export default Slider;