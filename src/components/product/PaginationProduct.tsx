import Image from "next/image";
import {FaShoppingBag} from "react-icons/fa";
import useGenerateStar from "@/app/hooks/useGenerateStar";
import ProductPrice from "@/components/Pagination/ProductPrice";

export const PaginationProduct = () => {
    return (
        <div
            className="pagination__product">
            {/* product image container */}
            <ProductImage />

            {/*  product info container  */}
            <div className="w-full h-1/3 flex flex-col items-end py-3 justify-between">
                <div className="w-full flex flex-col items-end gap-2 ">
                    <h2 className="text-xl font-semibold">Logo Keychain</h2>

                    <div className="flex items-center justify-between w-full text-sm">
                        <p>4 / 10</p>
                        <div className="flex items-center gap-x-1 ">
                            {useGenerateStar(3, 5, 15)}
                        </div>
                    </div>
                </div>

            {/*    pagination product price*/}
                <ProductPrice  />
            </div>
        </div>
    );
};

export default PaginationProduct
