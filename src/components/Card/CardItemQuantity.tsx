import {LuMinus, LuPlus} from "react-icons/lu";

const CardItemQuantity = () => {
    return (
        <div className="flex items-center justify-between">
            {/*   Quantity  */}
            <div className="bg-zinc-200 p-1 flex items-center gap-3 rounded-sm">
                <button className=""><LuMinus/></button>
                <p>1</p>
                <button><LuPlus/></button>
            </div>

            {/*    Price*/}
            <h3 className="md:text-lg font-semibold">
                240000 تومان
            </h3>
        </div>
    );
};

export default CardItemQuantity;