"use client"
import {LuSearch} from "react-icons/lu";
import {motion} from "framer-motion";

interface SearchProps {
    setSearchOpen: (searchOpen: boolean) => void;
}

export const Search = ({setSearchOpen}: SearchProps) => {

    const handleSearch = () => {
        setSearchOpen(false);
    }

    return (
        <motion.div initial={{width: 0, opacity: 0}} animate={{width: 250, opacity: 1}}
                    className="flex items-center justify-between bg-cream rounded-full px-4 ">
            <input type="text" placeholder="جستجو ..." name="searchQuery"
                   className="py-2  outline-none bg-transparent text-sm "/>
            <button onClick={handleSearch}>
                <LuSearch/>
            </button>
        </motion.div>
    );
};
export default Search
