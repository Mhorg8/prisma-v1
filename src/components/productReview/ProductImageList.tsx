"use client";
import Image from "next/image";


const ProductImageList = () => {


    return (
        <div className="relative w-full h-full flex flex-col items-center justify-start gap-4">
            {/* تصویر اصلی */}
            <div
                className="w-[350px] md:w-[80%] h-3/4 relative"
            >
                <Image
                    src="/hero-4.jpg"
                    alt="Main Product Image"
                    fill
                    sizes="fill"
                    className="product__image rounded-xl"
                />
            </div>

            {/* نمایش تصاویر دیگر */}
            <div className="flex items-center justify-between gap-3 md:gap-5 h-1/4 w-[350px] md:w-[80%]">
                <div className="w-1/3 h-full relative">
                    <Image
                        src="/hero-3.jpg"
                        sizes="fill"
                        fill
                        className="product__image"
                        alt="Thumbnail 1"
                    />
                </div>
                <div className="w-1/3 h-full relative">
                    <Image
                        src="/hero-2.jpg"
                        sizes="fill"
                        fill
                        className="product__image"
                        alt="Thumbnail 2"
                    />
                </div>
                <div className="w-1/3 h-full relative">
                    <Image
                        src="/hero-1.jpg"
                        sizes="fill"
                        fill
                        className="product__image"
                        alt="Thumbnail 3"
                    />
                </div>
            </div>


        </div>
    );
};

export default ProductImageList;
