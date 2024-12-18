import Logo from "@/components/Logo";

import NavMenu from "@/components/Header/NavMenu";

export const Header = () => {
    return (
        <header className="container py-3 flex items-center justify-between">
            <Logo />

        {/*    nav menu*/}
            <div className="hidden md:block">
            {/*   nav menu*/}
                <NavMenu />
            </div>
        </header>
    );
};

export default Header;