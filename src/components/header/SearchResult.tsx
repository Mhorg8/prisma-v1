import React from 'react';
import {LuX} from "react-icons/lu";

interface Props {
    searchQuery: string;
}

const SearchResult = ({searchQuery}: Props) => {
    return (
        <div className="absolute mt-3  top-full left-0 w-[300px] h-fit min-h-[100px] bg-zinc-200 rounded-xl">
            <ul className="flex flex-col w-full h-full">
                {searchQuery.trim() !== "" ?
                    <li className="flex items-center justify-between gap-3 border p-3 border-b border-b-black">
                        <div className="w-[50px] h-[50px] bg-success rounded-md "></div>
                        {/*    title and other inforomation*/}
                        <div className="text-sm text-start flex-1">
                            <h3 className="text-xl font-semibold">{searchQuery}</h3>
                            <span className="text-gray-5    00">2024</span>
                        </div>
                        {/*  item actions  */}
                        <div className="flex  items-center gap-2">
                            <button><LuX/></button>
                        </div>
                    </li> :
                    <h3>Nothing are not found</h3>}
            </ul>
        </div>
    );
};

export default SearchResult;