"use client"
import {LuLogIn, LuSearch, LuUser} from "react-icons/lu";
import {MdOutlineShoppingBag} from "react-icons/md";
import {IconType} from "react-icons";
import {useState} from "react";
import Search from "@/components/header/Seach";
import Link from "next/link";
import {useSession} from "next-auth/react";


export const HeaderAction = () => {
    const [searchOpen, setSearchOpen] = useState<boolean>(false);
    const {data: session} = useSession()

    return (
        <div className="flex items-center gap-x-3 relative">
            {/*search input*/}
            {searchOpen ? <Search searchToggleAction={setSearchOpen}/> :
                <HeaderActionButton click={() => setSearchOpen(true)} Icon={LuSearch}/>}
            {/* linking to card page*/}
            <HeaderActionButton Icon={MdOutlineShoppingBag} link path="/card"/>
            {/* linking to auth pages */}
            <HeaderActionButton Icon={session?.user ? LuUser : LuLogIn} link
                                path={session?.user ? '/profile' : `/auth/signUp`}/>
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
        return <Link className="header__action-button" href={path ? path : "/public"}>
            {Icon && <Icon size={20}/>}
        </Link>
    }

    return <button onClick={click}
                   className="header__action-button">
        {Icon && <Icon size={20}/>}
    </button>
}