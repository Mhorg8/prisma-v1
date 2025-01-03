import React from 'react';
import useGenerateStar from "@/app/hooks/useGenerateStar";
import QuantityView from "@/components/QuantityView";
import PrimaryButton from "@/components/PrimaryButton";

const ProductInformationView = () => {
    return (
        <>
            <div className="space-y-2">
                <h2 className="text-3xl md:text-[48px] font-bold leading-relaxed">میز گیمینگ ایکیا</h2>
                <p className="text-gray-500">میز و صندلی</p>
                <div className="flex items-center gap-1 cursor-pointer">{useGenerateStar(4, 5, 16)}</div>
            </div>
            {/*  description  */}
            <p className=" mt-5 text-[15px]">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها
                و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
                کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه
                ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که
                تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی
                دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>

            {/*  quantity and price  */}
            <div className="flex items-center justify-between mt-5 md:mt-10">
                <QuantityView/>

                <div className="flex items-center gap-x-2 text-lg font-bold">
                    <span>250000</span>
                    <span>تومان</span>
                </div>
            </div>

            <div className="mt-5 md:mt-10">
                <PrimaryButton type="button" text="افزودن"
                               customStyle="py-3 rounded-full font-bold text-lg hover:bg-success"
                               textColor="text-white"/>
            </div>
        </>
    );
};

export default ProductInformationView;