import React from 'react';
import Logo from "@/components/Logo";
import NewsLetter from "@/components/footer/NewsLetter";
import FooterMenus from "@/components/footer/FooterMenus";


const Footer = () => {
    return (
        <div className="container w-full h-full bg-zinc-200 mt-20">
            <div className="flex flex-col md:flex-row items-start justify-between gap-7 py-4 ">
                {/*Logo and newsletter*/}
                <div className="space-y-3 w-[350px]">
                    <Logo/>
                    <NewsLetter/>
                    <p className="text-sm text-black leading-normal">پریسما یک پلتفرم آنلاین برای خرید دکوریجات و لوازم
                        دکوراسیون هستش.
                        شما می تونید با پریسما خونه خود <br/> را پر از عشق کنید.</p>
                </div>
                {/*  menu Links  */}
                <FooterMenus/>
            </div>
        </div>
    );
};

export default Footer;