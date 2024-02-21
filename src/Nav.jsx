import { useState } from "react";
import { logo, menu, menuClose } from "./assets/images";

const Nav = () => {
    const [on, setOn] = useState(false);

    function handleClick() {
        setOn(prevValue => !prevValue);
    }

    return (
        <header>
            <nav className="mt-12 py-3 px-3 sm:px-6 flex items-center justify-between">

                {/* Logo */}
                <a href="/">
                    <img src={logo} alt="Logo" />
                </a>

                {/* Menu Items */}
                <div className="hidden space-x-6 sm:flex">
                    <a className="text-darkGrayishBlue hover:text-softRed" href="#">Home</a>
                    <a className="text-darkGrayishBlue hover:text-softRed" href="#">New</a>
                    <a className="text-darkGrayishBlue hover:text-softRed" href="#">Popular</a>
                    <a className="text-darkGrayishBlue hover:text-softRed" href="#">Trending</a>
                    <a className="text-darkGrayishBlue hover:text-softRed" href="#">Categories</a>
                </div>

                {/* Hamburger Icon */}
                <div className="sm:hidden cursor-pointer" onClick={handleClick}>
                    <img
                        src={on ? menuClose : menu}
                        alt='hamburger icon'
                        width={32}
                    />
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`sm:hidden fixed top-0 right-0 bottom-0
            space-y-20 w-48 pt-[19px] px-[26px] bg-offWhite z-10 transition-transform
            ${on ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex justify-end">
                    <img
                        onClick={handleClick}
                        className="cursor-pointer"
                        src={menuClose}
                        alt="hamburger icon"
                    />
                </div>
                <div className="flex flex-col items-start space-y-4">
                    <a className="text-darkGrayishBlue hover:text-softRed" href="#">Home</a>
                    <a className="text-darkGrayishBlue hover:text-softRed" href="#">New</a>
                    <a className="text-darkGrayishBlue hover:text-softRed" href="#">Popular</a>
                    <a className="text-darkGrayishBlue hover:text-softRed" href="#">Trending</a>
                    <a className="text-darkGrayishBlue hover:text-softRed" href="#">Categories</a>
                </div>
            </div>

            {/* Overlay */}
            <div className={`
            ${on ? 'visible opacity-100' : 'invisible opacity-0'} fixed
            top-0 right-0 bottom-0 left-0 bg-[rgba(0,0,0,0.5)] transition-all`}>
            </div>

        </header>
    );
};

export default Nav;