"use client"
import PrimaryButton from "@/components/PrimaryButton";
import {motion} from "framer-motion";
import Image from "next/image";
import React from "react";

interface Props {
    image: string,
    buttonText: string,
    title: string | React.ReactNode,
    subtitle: string,
    bgColor?: string,
    titleColor?: string,
    subtitleColor?: string,
    imageStyle?: string
}

const SecondaryHeroBanner = ({
                                 image,
                                 imageStyle,
                                 buttonText,
                                 title,
                                 subtitle,
                                 subtitleColor,
                                 titleColor,
                                 bgColor
                             }: Props) => {
    const ImageContainerVariants = {
        initial: {
            opacity: 0,
            x: -200
        },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.3,
            }
        }
    }


    return (
        <div
            className={`${bgColor ? bgColor : 'bg-zinc-200'} w-full h-full flex md:flex-row flex-col items-center  rounded-xl gap-3 `}>
            {/*text container*/}
            <motion.div
                variants={ImageContainerVariants}
                initial={{opacity: 0, x: 200}}
                animate="animate"
                className="w-full md:w-1/2 h-full flex flex-col items-center justify-center text-center py-3 px-5 gap-3">
                <h2 className={`${titleColor ? titleColor : "text-black"} text-3xl font-bold`}>{title}</h2>
                <p className={`${subtitleColor ? subtitleColor : "text-black"} w-[80%] text-sm `}>{subtitle}</p>
                <PrimaryButton type="button" text={buttonText}
                               customStyle="py-3 px-10 w-fit hover:bg-success shadow-lg rounded-xl" bgColor="bg-white"/>
            </motion.div>
            {/* image container*/}
            <div className="w-full md:w-1/2 h-full flex items-center justify-center py-3">
                <motion.div
                    variants={ImageContainerVariants}
                    initial='initial'
                    animate="animate"
                    className="w-[280px] md:w-[350px] h-[280px] md:h-[350px] bg-white overflow-x-hidden rounded-full relative  shadow-lg">
                    <motion.div
                        initial={{opacity: 0, x: -200}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 0.2, delay: 0.5}}
                        className="relative h-full w-full">
                        <Image src={image} priority fill sizes="fill" className={`${imageStyle} select-none absolute z-20`}
                               alt=""/>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default SecondaryHeroBanner;