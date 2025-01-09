import React from 'react';
import Link from "next/link";
import {FooterItem} from "@/types";

interface FooterLinksMenuProps {
    link: FooterItem
}

const FooterLinksMenu = ({link}: FooterLinksMenuProps) => {
    return (
        <ul key={link.id}>
            <h3 className="text-2xl font-bold text-black">{link.title}</h3>

            <ul className="flex flex-col gap-2 mt-2">{link.subLinks.map(subLink =>
                <Link className="hover:underline hover:text-green text-black" href={subLink.path}
                      key={subLink.text}>{subLink.text}</Link>)}
            </ul>
        </ul>
    );
};

export default FooterLinksMenu;