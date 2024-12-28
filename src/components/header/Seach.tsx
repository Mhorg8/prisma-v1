"use client";
import {LuSearch, LuX} from "react-icons/lu";
import {motion} from "framer-motion";
import {ChangeEvent, useCallback, useState} from "react";
import {useRouter} from "next/navigation";
import SearchResult from "@/components/header/SearchResult";

interface SearchProps {
    searchToggleAction: (searchOpen: boolean) => void;
}

export const Search = ({searchToggleAction}: SearchProps) => {
    const [searchQuery, setSearchQuery] = useState<string>("");
    const router = useRouter();

    // function to update the URL
    const updateSearchQuery = useCallback(
        (query: string) => {
            if (query.trim() !== "") {
                router.push(`/?search=${query}`);
            }
        }, // Adjust debounce timing (e.g., 300ms)
        [router]
    );

    // Handle input change
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const query = event.target.value;
        setSearchQuery(query);
        updateSearchQuery(query);
    };

    // Handle form submission
    const handleSearch = () => {
        if (searchQuery.trim() !== "") {
            router.push(`/?search=${searchQuery}`);
        } else {
            router.push(`/`);
        }
        searchToggleAction(false);
    };

    // Clear search query
    const clearSearch = () => {
        setSearchQuery("");
        router.push(`/`);
    };

    return (
        <motion.div
            initial={{width: 0, opacity: 0}}
            animate={{width: 250, opacity: 1}}
            className="flex items-center justify-between bg-zinc-200 rounded-full px-4 relative"
        >

            {searchQuery.length >= 3 &&
                <SearchResult searchQuery={searchQuery}/>
            }
            <input
                value={searchQuery}
                onChange={handleChange}
                type="text"
                placeholder="جستجو ..."
                name="searchQuery"
                className="py-2 outline-none bg-transparent text-sm flex-1"
                autoComplete="false"
            />
            {searchQuery ? (
                <button
                    onClick={clearSearch}
                    className="text-gray-500 hover:text-black transition "
                >
                    <LuX/>
                </button>
            ) : <button
                onClick={handleSearch}
                className="text-gray-500 hover:text-black transition"
            >
                <LuSearch/>
            </button>}

        </motion.div>
    );
};

export default Search;
