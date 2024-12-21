"use client"
import {LuLogIn, LuSearch} from "react-icons/lu";
import {MdOutlineShoppingBag} from "react-icons/md";
import {IconType} from "react-icons";
import {useState} from "react";
import Search from "@/components/Header/Seach";
import Link from "next/link";


export const HeaderAction = () => {
    const [searchOpen, setSearchOpen] = useState<boolean>(false);
    return (
        <div className="flex items-center gap-x-3 ">
            {/*search input*/}
            {searchOpen ? <Search setSearchOpen={setSearchOpen}/> :
                <HeaderActionButton click={() => setSearchOpen(true)} Icon={LuSearch}/>}
            {/* linking to card page*/}
            <HeaderActionButton Icon={MdOutlineShoppingBag}/>
            {/* linking to auth pages */}
            <HeaderActionButton Icon={LuLogIn}/>
        </div>
    );
};
export default HeaderAction

interface HeaderActionButtonProps {
    Icon: IconType,
    link?: boolean,
    path?: string
    click?: () => void
}

const HeaderActionButton = ({Icon, link, path, click}: HeaderActionButtonProps) => {

    if (link) {
        return <Link className="header__action-button" href={path ? path : "/"}>
            {Icon && <Icon size={20}/>}
        </Link>
    }

    return <button onClick={click}
                   className="header__action-button">
        {Icon && <Icon size={20}/>}
    </button>
}