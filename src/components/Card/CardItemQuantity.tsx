import QuantityView from "@/components/QuantityView";

const CardItemQuantity = () => {
    return (
        <div className="flex items-center justify-between">
            {/*   Quantity  */}
            <QuantityView/>

            {/*    Price*/}
            <h3 className="md:text-lg font-semibold">
                240000 تومان
            </h3>
        </div>
    );
};

export default CardItemQuantity;