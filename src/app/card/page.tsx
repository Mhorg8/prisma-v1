import CardItem from "@/components/Card/CardItem";
import CardItemInfo from "@/components/Card/CardItemInfo";


const CardPage = () => {
    return (
        <div className="container w-full h-[calc(100dvh-90px)]">
            <div className="grid grid-cols-12 w-full h-full gap-5">

                {/*  list of the products  */}
                <div className="col-span-12 md:col-span-9 h-full">
                    <div className="p-4 flex flex-col gap-3">
                        {/* Single product want to be displayed in one row */}
                        <CardItem/>
                        <CardItem/>

                    </div>
                </div>

                {/* List for showing price */}
                <div className="col-span-12 md:col-span-3 h-fit sticky top-0 bg-zinc-200 p-4 md:mt-4">
                    <CardItemInfo/>
                </div>

            </div>
        </div>
    );
};

export default CardPage;