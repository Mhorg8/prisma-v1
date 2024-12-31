"use client"
import {FaShoppingBag} from "react-icons/fa";

const ProductPrice = () => {
    return (
        <div className="flex items-center justify-between w-full mt-2">
            <button
                className="product__info-button">
                <span>افزودن</span>
                <FaShoppingBag size={18}/>
            </button>
            <div className="flex items-center gap-x-1 text-base">
                <h3 className="font-semibold">200,000</h3>
                <span>تومان</span>
            </div>
        </div>
    );
};

export default ProductPrice;