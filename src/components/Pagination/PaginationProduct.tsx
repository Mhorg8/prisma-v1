import Image from "next/image";
import {FaStar} from "react-icons/fa6";
import {FaShoppingBag} from "react-icons/fa";

export const PaginationProduct = () => {
    return (
        <div
            className="pagination__product">
            {/* product image container */}
            <div className="w-full h-2/3 relative group transition-all cursor-pointer duration-200 ">
                <Image src='/hero-1.jpg' alt="product-image" fill sizes="fill"
                       className="object-cover rounded-lg "/>

                <div
                    className="absolute inset-0 bg-zinc-100/80 rounded-lg group-hover:block hidden  p-2">
                    <p className="text-black  ">
                        lorem ipsum dolor sit amet, consectetur , lorem ipsum ,a
                        lorem ipsum dolor sit amet, consectetur , lorem ipsum ,a
                        lorem ipsum dolor sit amet, consectetur , lorem ipsum ,a
                        lorem ipsum dolor sit amet, consectetur , lorem ipsum ,a
                    </p>
                </div>
            </div>

            {/*  product info container  */}
            <div className="w-full h-1/3 flex flex-col items-end py-3 justify-between">
                <div className="w-full flex flex-col items-end gap-2 ">
                    <h2 className="text-xl font-semibold">Logo Keychain</h2>

                    <div className="flex items-center justify-between w-full text-sm">
                        <p>4 / 10</p>
                        <div className="flex items-center gap-x-1 text-base">
                            <FaStar color="FFD700"/>
                            <FaStar color="FFD700"/>
                            <FaStar color="FFD700"/>
                            <FaStar color="FFD700"/>
                        </div>
                    </div>
                </div>

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
            </div>
        </div>
    );
};

export  default  PaginationProduct
