"use client"
import {FaChevronDown, FaChevronLeft} from "react-icons/fa6";
import Link from "next/link";
import {useState} from "react";
import {menuLinks} from "@/constants";
import {FaTimes} from "react-icons/fa";
import {motion} from "framer-motion";
import {RiMenuFill} from "react-icons/ri";


export const MobileMenu = () => {
    const [opemMobileMenu, setOpemMobileMenu] = useState<boolean>(false);
    const [dropdown, setDropdown] = useState<number | null>(null);
    // handle open dropdown with dropdown id
    const handleOpenDropdown = (id: number) => {
        setDropdown(prev => prev === id ? null : id)
    }

    return (
        <div className="block md:hidden ">
            <button onClick={() => setOpemMobileMenu(true)}>
                <RiMenuFill size={24}/>
            </button>

            {opemMobileMenu && <motion.div
                initial={{x: -200, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                className="absolute top-0 left-0 w-[65vw] h-screen bg-Sky-blue z-[100]">
                {/*nav menu container*/}
                <div className="w-full h-full flex flex-col items-center justify-center gap-y-3 ">

                    <button onClick={() => setOpemMobileMenu(false)} className="absolute top-8 right-8">
                        <FaTimes size={22} className="text-white hover:scale-110 transition duration-200"/>
                    </button>

                    {menuLinks.map((link) =>
                        <div key={link.id} className="w-full flex items-center justify-center relative">
                            {/*Title*/}
                            <div
                                onClick={() => handleOpenDropdown(link.id)}
                                className="flex items-center gap-x-2 text-white font-bold cursor-pointer
                                 w-full px-10">
                                <span>{link.title}</span>
                                {link.subLinks && <div>
                                    {link.id === dropdown ? <FaChevronLeft size={10}/> :
                                        <FaChevronDown size={10}/>}
                                </div>}
                            </div>
                            {/*Submenu*/}
                            {link.subLinks &&
                                <ul className={`${dropdown === link.id ? "dropdown" : "hidden"}`}>
                                    {link.subLinks.map((subLink) =>
                                        <li key={subLink.title}>
                                            <Link href={subLink.url}>{subLink.title}</Link>
                                        </li>)}
                                </ul>}
                        </div>
                    )}
                </div>
            </motion.div>}
        </div>
    );
};
export default MobileMenu