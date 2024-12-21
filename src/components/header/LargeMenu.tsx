"use client"
import {menuLinks} from "@/constants";
import Link from "next/link";
import {useState} from "react";
import {FaChevronDown} from "react-icons/fa6";

export const LargeMenu = () => {
    const [dropdown, setDropdown] = useState<number | null>(null);

    const handleDropdown = (id: number) => {
        setDropdown(prev => prev === id ? null : id)
    }
    return (
        <div className="flex items-center justify-center gap-x-5 relative w-full flex-1 ">
            {menuLinks.map(link =>
                <div key={link.id} className="relative ">
                    {/*title and chevron icon*/}
                    <div className="flex items-center gap-x-2">
                        <span onClick={() => handleDropdown(link.id)}
                              className="cursor-pointer hover:text-darkBlue">{link.title}
                        </span>
                        {link.subLinks && <FaChevronDown size={10}/>}
                    </div>

                    {/*    nav menu list*/}
                    {link.subLinks &&
                        <ul className={`${dropdown === link.id ? "dropdown" : "hidden"} `}>
                            {link.subLinks.map(subLink => <li key={subLink.title}>
                                <Link href={subLink.url}
                                >{subLink.title}</Link>
                            </li>)}
                        </ul>}
                </div>
            )}
        </div>
    );
};
export default LargeMenu