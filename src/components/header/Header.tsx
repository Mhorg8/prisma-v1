"use client"
import Logo from "@/components/Logo";
import LargeMenu from "@/components/header/LargeMenu";
import HeaderAction from "@/components/header/HeaderAction";
import MobileMenu from "@/components/header/MobileMenu";
import TopHeader from "@/components/header/TopHeader";

export const Header = () => {

    return (
        <>
            <TopHeader />
            <header className="container py-3 flex items-center justify-between w-full z-[50] relative">

                {/*  Logo*/}
                <Logo/>
                <div className=" md:flex hidden items-center justify-between w-full">
                    {/*    Large menu */}
                    <LargeMenu/>
                   <div className="hidden lg:flex">
                       <HeaderAction/>
                   </div>
                </div>

                {/*  mobile menu*/}
                <MobileMenu/>

            </header>
        </>
    );
};

export default Header;