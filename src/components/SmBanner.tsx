import React from 'react';
import Image from "next/image";

interface SmBannerProps {
    imageOne: string,
    imageTwo: string,
}

const SmBanner = ({imageOne, imageTwo}: SmBannerProps) => {
    return (
        <div className="h-[60dvh] w-full container mt-20 py-3">
            <div className="h-full flex flex-col md:flex-row items-center gap-5 ">
                <div className="w-full h-full relative ">
                    <Image src={imageOne} alt="smBanner image" fill sizes="fill"
                           className="object-cover object-center rounded-xl object-fit shadow-md"/>
                </div>
                <div className="w-full md:w-[400px] h-full relative ">
                    <Image src={imageTwo} alt="smBanner image" fill sizes="fill"
                           className="object-cover object-top rounded-xl shadow-md"/>
                </div>
            </div>
        </div>
    );
};

export default SmBanner;