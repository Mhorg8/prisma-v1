"use client"
import HeadingSection from "@/components/HeadingSection";
import {Swiper, SwiperSlide} from "swiper/react";
import {menuLinks} from "@/constants";
import 'swiper/css'
import {Autoplay} from 'swiper/modules';
import {motion} from "framer-motion"
const ProductCategories = () => {
    const productsCategories = menuLinks[0].subLinks;

    const fadeInVariants = {
        hidden: {opacity: 0},
        visible: (index: number) => ({
            opacity: 1,
            transition: {
                delay: index * 0.1,
                duration: 0.3,
            },
        }),
    };
    return (
        <div className="container mt-20">
            <HeadingSection title="تنوع محصولات"/>
            <Swiper
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}
                spaceBetween={20}
                breakpoints={{
                    320: {
                        slidesPerView: 3, // Small screens
                    },
                    768: {
                        slidesPerView: 5, // Medium screens
                    },
                    1024: {
                        slidesPerView: 7, // Large screens
                    },
                }}

                slidesPerView={7}
                loop={true}
                className="mt-10"
                modules={[Autoplay]}
            >
                {productsCategories?.map((product, index: number) => (
                    <SwiperSlide key={product.title} className="cursor-pointer">
                        <motion.div
                            custom={index}
                            variants={fadeInVariants}
                            initial="hidden"
                            whileInView="visible"
                            className="w-[100px] py-2 bg-cream rounded-full flex items-center justify-center">
                            <p className="text-sm font-semibold text-black">{product.title}</p>
                        </motion.div>
                    </SwiperSlide>
                ))}

            </Swiper>
        </div>
    );
};

export default ProductCategories;