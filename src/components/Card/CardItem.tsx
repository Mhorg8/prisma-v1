import Image from "next/image";
import {LucideXCircle} from "lucide-react";
import CardItemQuantity from "@/components/Card/CardItemQuantity";


const CardItem = () => {
    return (
        <div className="grid grid-cols-12 w-full  border-y border-black">
            {/*  Product image container  */}
            <div className="col-span-6 h-full p-2 bg-zinc-200 flex items-center justify-center">
                <div className="w-full  md:w-2/3 h-[160px]  relative">
                    <Image src='/hero-3.jpg' alt="" fill sizes="fill"
                           className="object-cover rounded-md"/>
                </div>
            </div>

            {/*  Product details  */}
            <div className="col-span-6 flex flex-col p-3 gap-3">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold">اصغر آقا</h2>
                    <button className="text-red"><LucideXCircle size={20}/></button>
                </div>
                <p className="text-sm text-gray-500">We are a Canadian design agency that helps startups and growing
                    companies turn ideas
                    into exceptional digital
                </p>
                {/* Product color*/}
                <div className="flex items-center gap-x-3">
                    <div className="w-6 h-6 rounded-full bg-softGray"></div>
                    | <span className="text-sm text-black">موجود</span>
                </div>

                {/*    Quantity and price*/}
                <CardItemQuantity />
            </div>

        </div>
    );
};

export default CardItem;