import React from 'react';
import ProductImageList from "@/components/singleProduct/ProductImageList";
import ProductInformationView from "@/components/singleProduct/ProductInformationView";

const ProductView = () => {
    return (
        <div className="container w-full grid grid-cols-12 gap-5 min-h-[200dvh] h-full  md:min-h-[calc(100dvh-100px)]">
            {/* Image container */}
            <div
                className="col-span-12 md:col-span-6  h-ful flex flex-col items-center justify-start py-3 md:py-7 gap-3 ">
                {/*  main image  */}
                <ProductImageList/>
            </div>
            {/* Product information */}
            <div className="col-span-12 md:col-span-6  h-full py-3 md:py-7 w-[85%]">
                <ProductInformationView/>
            </div>
        </div>
    );
};

export default ProductView;