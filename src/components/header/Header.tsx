"use client"
import Logo from "@/components/Logo";
import LargeMenu from "@/components/header/LargeMenu";
import HeaderAction from "@/components/header/HeaderAction";
import MobileMenu from "@/components/header/MobileMenu";

export const Header = () => {

    return (
        <header className="container py-3 flex items-center justify-between w-full z-[50]">
            {/*  Logo*/}
            <Logo/>

            <div className=" md:flex hidden items-center justify-between w-full">
                {/*    Large menu */}
                <LargeMenu/>
                <HeaderAction/>
            </div>

            {/*  mobile menu*/}
            <MobileMenu/>

        </header>
    );
};

export default Header;