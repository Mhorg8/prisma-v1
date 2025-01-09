import React from 'react';
import ProductReviewImage from "@/components/productReview/ProductReviewImage";
import useGenerateStar from "@/app/hooks/useGenerateStar";

const ReviewList = () => {
    return (
        <div className="w-full h-full flex flex-col md:flex-row items-center justify-center min-h-[200px] gap-5 mt-10">
            <div className="w-fit h-full grid grid-cols-12 grid-rows-2 gap-4 md:gap-2">
                {/* Review item*/}
                <ProductReviewImage/>
                <ProductReviewImage/>
                <ProductReviewImage/>
                <ProductReviewImage/>
                <ProductReviewImage/>
                <ProductReviewImage/>
            </div>
            <div className=" rounded-x space-y-5 l h-full w-[350px] md:w-[450px] xl:w-[500px] bg-zinc-200 p-6 rounded-xl">

                <div className="flex items-center justify-between ">
                    {/* username and rate */}
                    <div className="flex flex-col  justify-between w-full">
                        <h3 className="text-lg font-semibold">محمدحسین</h3>
                        <p className="text-gray-500 text-xs">مشتری</p>
                    </div>
                    <div className="flex items-center gap-x-1">
                        {useGenerateStar(4, 5, 15)}
                    </div>
                    <hr/>
                </div>
                {/* user review */}
                <p className=""> استفاده از طراحان گرافیک است، چاپگرها
                    و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
                    کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                    آینده،</p>
            </div>
        </div>
    );
}

export default ReviewList;