import Image from "next/image";
import ProductOverlay from "@/components/product/ProductOverlay";

const ProductImage = () => {
    return (
        <div className="w-full h-2/3 relative group transition-all cursor-pointer duration-200 ">
            <Image src='/hero-1.jpg' alt="product-image" fill sizes="fill"
                   className="object-cover rounded-lg "/>
            {/* product image overflow */}
            <ProductOverlay />
        </div>
    );
};

export default ProductImage;