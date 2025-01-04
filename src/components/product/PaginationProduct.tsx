import ProductPrice from "@/components/product/ProductPrice";
import ProductImage from "@/components/product/ProductImage";
import ProductInfo from "@/components/product/ProductInfo";


export const PaginationProduct = () => {
    return (
        <div
            className="pagination__product">
            {/* product image container */}
            <ProductImage/>
            {/*  product info container  */}
            <div className="w-full h-1/3 flex flex-col items-end py-3 justify-between">
               {/* product information's */}
               <ProductInfo />
                {/*    pagination product price*/}
                <ProductPrice/>
            </div>
        </div>
    );
};

export default PaginationProduct
