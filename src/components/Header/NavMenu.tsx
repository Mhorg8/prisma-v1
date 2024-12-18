"use client"
import {menuLinks} from "@/constants";
import {useState} from "react";

export const NavMenu = () => {
    const [dropdown, setDropdown] = useState<number | null>(null);

    const handleOnClick = (num: number) => {
        setDropdown(prev => prev === num ? null : num)

    }
    return (
        <ul className="flex items-center justify-center px-4 gap-x-5">
            {menuLinks.map(link =>
                <div key={link.id} className="relative">
                    <li onClick={() => handleOnClick(link.id)}>{link.title}</li>
                    {link.subLinks && <ul className={` ${dropdown === link.id ? "block" : "hidden"}
                    absolute top-full right-0 min-w-[200px] h-fit px-3 py-2 rounded-md bg-red-200 `}>
                        {link.subLinks.map((subLink) =>
                            <li key={subLink.title}>
                            {subLink.title}
                            </li>)}
                    </ul>}


                </div>)}

        </ul>
    );
};

export default NavMenu;