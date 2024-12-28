import {Product} from "@/types";
import Image from "next/image";
import {FaStar} from "react-icons/fa6";
import PrimaryButton from "@/components/PrimaryButton";

interface SliderProductProps {
    product: Product
}

const SliderProduct = ({product}: SliderProductProps) => {
    return (
        <div className="w-full h-[350px] bg-zinc-200 rounded-xl p-3">
            {/*product image container*/}
            <div className="w-full h-[70%] relative group cursor-pointer">
                <Image src={product.image} alt={product.productName} sizes="fill" fill
                       className="object-cover object-bottom rounded-lg "/>
                {/* more details when user hover on image*/}
                <div
                    className="absolute indset-0 w-full h-full bg-cream/70 rounded-lg hidden group-hover:flex flex-col justify-start items-start gap-3 p-3 ">
                    <p className="text-sm ">
                        {product.desc}
                    </p>
                    {/* generate star peer rate*/}
                    <div className="flex items-center justify-between w-full">
                        <h3>امتیاز</h3>
                        <div className="flex items-center gap-x-1">
                            <FaStar color="#669bbc" size={16}/>
                            <FaStar color="#669bbc" size={16}/>
                            <FaStar color="#669bbc" size={16}/>
                            <FaStar color="#669bbc" size={16}/>
                        </div>
                    </div>

                    {/*    show more button*/}
                    <PrimaryButton text="بررسی" type="button" bgColor="bg-softBlue" textColor="text-white"/>
                </div>
            </div>
            {/*    product info*/}
            <div className="space-y-2 mt-2 text-end">
                <div>
                    <h2 className="text-xl font-bold">{product.productName}</h2>
                    <p className="text-neutral-500 text-sm truncate">{product.desc}</p>

                </div>
                <div className="flex items-center justify-between">
                    <button className="product__info-button ">افزودن</button>
                    <div className="flex items-center gap-2">
                        <p>تومان</p>
                        <h3>{product.price}0000</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SliderProduct;