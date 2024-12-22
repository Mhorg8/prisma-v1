export const PaginationButton = () => {
    return (
        <div className=" flex items-center w-full justify-center mt-10 gap-5 text-sm">
            <button className="hover:scale-110 transition duration-200 text-darkBlue">بعدی</button>
            <div className="flex items-center gap-x-3">
                <div className="pagination__page-number">1</div>
                <div className="pagination__page-number">2</div>
            </div>
            <button className="hover:scale-110 transition duration-200 text-darkBlue">قبلی</button>
        </div>
    );
};

export default PaginationButton
