import PaginationProduct from "@/components/Pagination/PaginationProduct";
import PaginationButton from "@/components/Pagination/PaginationButton";

export const Pagination = () => {
    return (
        <div className="container w-full h-full  bg-zinc-50">
            {/*products container*/}
            <div className="w-full h-full grid grid-cols-12 gap-5">
                {/* single product */}
               <PaginationProduct />
               <PaginationProduct />
               <PaginationProduct />
               <PaginationProduct />
            </div>
            <PaginationButton />
        </div>
    );
};
export default Pagination
