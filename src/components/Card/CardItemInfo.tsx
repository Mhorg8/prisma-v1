import React from 'react';
import SecondaryButton from "@/components/SecondaryButton";

const CardItemInfo = () => {
    return (
        <ul className="">
            <li className="flex items-center justify-between gap-4 border-b border-black bg-white p-2">
                <h3 className="cart__item-title">قیمت محصولات</h3>
                <p className="cart__item-detials">450000 تومان</p>
            </li>
            <li className="flex items-center justify-between gap-4 border-b border-black p-2">
                <h3 className="cart__item-title">هزینه حمل و نقل </h3>
                <p className="cart__item-detials">20000 تومان</p>
            </li>
            <li className="flex items-center justify-between gap-4 border-b border-black bg-white p-2">
                <h3 className="cart__item-title">هزینه نهایی</h3>
                <p className="cart__item-detials">470000 تومان</p>
            </li>
            {/*    offer coupon*/}
            <li className="mt-3 space-y-1">
                <label className="text-sm font-semibold">کد تخفیف دارید ؟</label>
                <input type="text" placeholder="#12345"
                       className="p-2 w-full text-end text-sm shadow-sm focus:outline-none focus:shadow-md text-black"/>
            </li>

            <SecondaryButton path="/" text="پرداخت" customStyle="mt-3"
                             bgColor="bg-success hover:bg-[#4A5D23] transition-all d"/>
        </ul>
    );
};

export default CardItemInfo;