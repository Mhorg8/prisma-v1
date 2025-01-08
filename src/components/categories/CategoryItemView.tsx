import React from 'react';
import {motion} from "framer-motion";


const fadeInVariants = {
    hidden: {opacity: 0, backgroundColor: "#fff"},
    visible: (index: number) => ({
        opacity: 1,
        backgroundColor: "#a7c957",
        transition: {
            delay: index * 0.1,
            duration: 0.3,
        },
    }),
    hover: {
        scale: 1.3,
    },
};


interface Props {
    index: number;
    productTitle: string
}

const CategoryItemView = ({index, productTitle}: Props) => {
    return (
        <motion.div
            custom={index}
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            className="w-[80px] h-[80px] rounded-full flex items-center justify-center shadow-lg"
        >
            <p className="text-sm font-medium text-white">{productTitle}</p>
        </motion.div>
    );
};

export default CategoryItemView;