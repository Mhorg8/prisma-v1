"use client"
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import Image from "next/image";
import SecondaryButton from "@/components/SecondaryButton";
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export const HeroSlider = () => {
    return (
        <div className="h-full w-full ">
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                className="h-full w-full"
                loop={true}
                grabCursor={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
            >
                <SwiperSlide>
                    <div className="w-full h-full relative">
                        <Image src={'/hero-3.jpg'} alt="hero" fill sizes="fill" className="object-cover select-none"/>
                    </div>
                    {/*    text content*/
                    }
                    <div className="absolute bottom-[20%] right-[10%] text-start ">
                        <h1 className="text-5xl font-bold leading-relaxed select-none text-cream">دیگ بازار نرو !!</h1>
                        <p className="text-white">ما با بیشترین تنوع در اینترنت این امکان رو برای شما فراهم کردیم که
                            راحتر انتخاب کنید.</p>
                        <SecondaryButton text="اطلاعات بیشتر" path="/" bgColor="" customStyle="w-fit mt-4  text-sm"/>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="w-full h-full relative">
                        <Image src={'/hero-2.jpg'} alt="hero" fill sizes="fill" className="object-cover"/>
                    </div>
                    {/*    text content*/
                    }
                    <div className="absolute bottom-[20%] right-[10%] text-start ">
                        <h1 className="text-5xl font-bold leading-relaxed select-none text-white">بهترین ها همه
                            اینجان.</h1>
                        <p className="text-white">جدیدتریم محصولات از بهترین برندها همشون اینجا جمع شدن تا بتونی راحتر
                            انتخاب کنی</p>
                        <SecondaryButton text="اطلاعات بیشتر" path="/" bgColor="" customStyle="w-fit mt-4  text-sm"/>

                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="w-full h-full relative">
                        <Image src={'/hero-1.jpg'} alt="hero" fill sizes="fill" className="object-cover"/>
                    </div>
                    {/*    text content*/
                    }
                    <div className="absolute bottom-[10%] right-[10%] text-start ">
                        <h1 className="text-5xl font-bold leading-relaxed select-none text-Sky-blue">ترندترین آیتم
                            ها.</h1>
                        <p className="text-black font-semibold bg-white/50 py-1 px-2">ترندترین آتیم ها در سراسر اینترنت را برای شما فراهم
                            کردیم</p>
                        <SecondaryButton text="اطلاعات بیشتر" path="/" bgColor="" customStyle="w-fit mt-4  text-sm"/>

                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};
