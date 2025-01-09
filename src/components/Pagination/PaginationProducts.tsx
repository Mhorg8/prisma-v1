
import PaginationProduct from "@/components/product/PaginationProduct";
import PaginationButton from "@/components/Pagination/PaginationButton";

const PaginationProducts = () => {
    // TODO FILTER ITEM FORM URL-QUERY

    return (
        <>
            {/*TODO THIS SHOULD GET PROPS AND MAP OVER PRODUCTS*/}
            <div className="w-full h-full grid grid-cols-12 gap-5">
                {/* single product */}
                <PaginationProduct/>
                <PaginationProduct/>
                <PaginationProduct/>
                <PaginationProduct/>
                <PaginationProduct/>
                <PaginationProduct/>
                <PaginationProduct/>
                <PaginationProduct/>
            </div>
            <PaginationButton/>
        </>
    );
};

export default PaginationProducts;