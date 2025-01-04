import React from 'react';
import useGenerateStar from "@/app/hooks/useGenerateStar";

const ProductInfo = () => {
    return (
        <div className="w-full flex flex-col items-end gap-2 ">
            <h2 className="text-xl font-semibold">Logo Keychain</h2>

            <div className="flex items-center justify-between w-full text-sm">
                <p>4 / 10</p>
                <div className="flex items-center gap-x-1 ">
                    {useGenerateStar(3, 5, 15)}
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;