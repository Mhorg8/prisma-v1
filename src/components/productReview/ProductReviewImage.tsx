"use client"
import {motion} from 'framer-motion';
import Image from "next/image";

const ProductReviewImage = () => {
    return (
        <motion.button
            initial={{scale: 1}}
            whileHover={{scale: 1.1}}
            transition={{duration: 0.2}}
            className=" col-span-4 md:col-span-4 xl:col-span-4 rounded-lg bg-zinc-100 shadow-sm hover:shadow-md w-[100px] h-[100px] md:w-[100px] md:h-[100px] relative">
            {/* TODO active user profile should have border */}
            <Image src='/hero-3.jpg' alt='user profile image' sizes="fill" fill
                   className="object-cover  p-0.5 rounded-lg cursor-pointer"/>
        </motion.button>

    );
};

export default ProductReviewImage;