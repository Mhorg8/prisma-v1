import React from 'react';
import {footerLinks} from "@/constants";
import SocialIcons from "@/components/footer/SocialIcons";
import FooterLinksMenu from "@/components/footer/FooterLinksMenu";

const FooterMenus = () => {
    return (
        <div
            className="flex-1 ">
            <div className="flex gap-5 items-start justify-between flex-wrap md:flex-row ">
                {footerLinks.map((link) => (
                    // Footer column
                    <FooterLinksMenu link={link} key={link.id}/>
                    ))}
                {/*  social icons  */}
                <SocialIcons/>
            </div>
        </div>
    );
};

export default FooterMenus;