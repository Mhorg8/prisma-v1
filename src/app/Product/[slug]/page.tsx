import ProductView from "@/components/productReview/ProductView";
import Slider from "@/components/Slider";
import {tempProducts} from "@/constants";
import ProductReview from "@/components/productReview/ProductReview";

interface SingleItemProps {
    params: Promise<{ slug: string }>
}

export default async function SingleProduct({params}: SingleItemProps) {
    const {slug} = await params

    return (
        <div>
            <ProductView/>
            <Slider title="موارد مشابه" products={tempProducts}/>
            <ProductReview />
        </div>
    );
}
