import ReviewList from "@/components/singleProduct/ReviewList";

const ProductReview = () => {
    return (
        <div className="mt-20 container w-full h-full">
          <div className="w-full flex items-center justify-center">
             <h2 className="text-2xl font-semibold text-black">نظرات کاربران در باره ای این محصول</h2>
          </div>
            <ReviewList/>
        </div>
    );
};

export default ProductReview;