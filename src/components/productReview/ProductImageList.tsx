"use client"
import React, {useState} from 'react';
import Image from "next/image";

const ProductImageList = () => {
    const [mainImage, setMainImage] = useState<number>(1);

    return (
        <>
            {/* main image*/}
            {/*TODO we should create functionality for changing main image*/}
            <div className="w-[350px] md:w-[80%] h-3/4 relative">
                <Image src='/hero-4.jpg' alt="" fill sizes="fill" className="product__image rounded-xl"/>
            </div>
            {/*  images showcase  */}
            {/*TODO we need fetch product and map over images*/}

            <div className="flex items-center justify-between gap-3 md:gap-5 h-1/4 w-[350px] md:w-[80%] ">
                <div className="w-1/3 h-full relative">
                    <Image src='/hero-3.jpg' sizes="fill" fill className="product__image" alt=""/>
                </div>
                <div className="w-1/3 h-full relative">
                    <Image src='/hero-2.jpg' sizes="fill" fill className="product__image" alt=""/>
                </div>
                <div className="w-1/3 h-full relative">
                    <Image src='/hero-1.jpg' sizes="fill" fill className="product__image" alt=""/>
                </div>
            </div>
        </>
    );
};

export default ProductImageList;