"use client"
import HeadingSection from "@/components/HeadingSection";
import {Swiper, SwiperSlide} from "swiper/react";
import {menuLinks} from "@/constants";
import 'swiper/css';
import {Autoplay} from 'swiper/modules';
import CategoryItemView from "@/components/CategoryItemView";

const ProductCategories = () => {

    const categories = menuLinks
        .map((link) => link.subLinks || [])
        .flat(); 

    return (
        <div className="container mt-20">
            <HeadingSection title="تنوع محصولات"/>
            <Swiper
                autoplay={{ // Only autoplay if not hovering
                    delay: 1000,
                    disableOnInteraction: true,
                    pauseOnMouseEnter: true,
                }}
                spaceBetween={10}
                breakpoints={{
                    320: {
                        slidesPerView: 3, // Small screens
                    },
                    768: {
                        slidesPerView: 6, // Medium screens
                    },
                    1024: {
                        slidesPerView: 8, // Large screens
                    },
                }}
                loop={true}
                className="mt-10 "
                modules={[Autoplay]}
            >
                {categories?.map((product, index: number) => (
                    <SwiperSlide key={product.title} className="cursor-pointer py-5">
                        <CategoryItemView index={index} productTitle={product.title} key={index}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ProductCategories;
