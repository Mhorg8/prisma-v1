import React from 'react';
import SecondaryButton from "@/components/SecondaryButton";

const ProductOverlay = () => {
    return (
        <div
            className="absolute inset-0 bg-zinc-100/80 rounded-lg group-hover:block hidden  p-2 space-y-3">
            <p className="text-black  ">
                lorem ipsum dolor sit amet, consectetur , lorem ipsum ,a
                lorem ipsum dolor sit amet, consectetur , lorem ipsum ,a
                lorem ipsum dolor sit amet, consectetur , lorem ipsum ,a
                lorem ipsum dolor sit amet, consectetur , lorem ipsum ,a
            </p>
            <SecondaryButton text=" بررسی" path="/product/21312312"/>
        </div>
    );
};

export default ProductOverlay;