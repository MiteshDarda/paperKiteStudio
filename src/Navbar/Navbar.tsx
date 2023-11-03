import { useEffect, useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";
import { motion } from "framer-motion"
import logo from "../images/LOGO.png"

import { Link } from "react-router-dom";

function Nav({ show }: { show: boolean }) {

    useEffect(
        () => {
            console.log(show)
        }, [show]
    )

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const mobileLinkOpenHandler = () => {
        setIsMenuOpen(false)
    }

    const menuItems = [
        ["Home", "/Home#home"],
        ["About us", "Home#about-us"],
        ["Projects", "/Projects"],
        ["Contact us", "Home#contact-us"],
    ];

    return <>
        <Navbar onMenuOpenChange={() => setIsMenuOpen} isMenuOpen={isMenuOpen} className={` text-2xl bg-[white] text-[#071124] h-full w-screen transition-all duration-1000 ${show ? 'hidden' : ''}`}>
            <NavbarContent>
                <NavbarMenuToggle
                    onClick={() => { setIsMenuOpen(!isMenuOpen) }}
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand className=" text-4xl">
                    <p className="font-bold text-inherit">
                        <motion.img className="h-12" src={logo} />
                    </p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem className=" text-2xl ">
                    <Link to={'/Home#home'}>
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem className=" text-2xl">
                    <Link to={"Home#about-us"}>
                        About us
                    </Link>
                </NavbarItem>
                <NavbarItem className=" text-2xl">
                    <Link to={'/Projects'}>
                        Projects
                    </Link>
                </NavbarItem>
                <NavbarItem className=" text-2xl">
                    <Link to={"Home#contact-us"}>
                        Contact us
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu className="py-10 bg-[#878A67]">
                {menuItems.map(([item, to], index) => (
                    <NavbarMenuItem key={`${item}-${index}`} >
                        <Link to={to} onClick={mobileLinkOpenHandler}>
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar >
    </>
}

export default Nav