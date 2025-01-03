import React from 'react';
import Image from "next/image";

const ProductReviewImage = () => {
    return (
        <div
            className="col-span-6 md:col-span-3 xl:col-span-4 rounded-lg bg-zinc-100 border-2 border-blue-500 w-12 h-12 md:w-[100px] md:h-[100px] relative">
            <Image src='/hero-3.jpg' alt='user profile image' sizes="fill" fill className="object-cover  p-0.5 rounded-lg" />
        </div>

    );
};

export default ProductReviewImage;