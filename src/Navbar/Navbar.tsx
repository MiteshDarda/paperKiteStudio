import { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";

import * as UI from "@nextui-org/react"

import { Link } from "react-router-dom";

function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        "Home",
        "About us",
        "Projects",
        "Contact us",
    ];

    return <>
        <Navbar onMenuOpenChange={() => setIsMenuOpen} className=" text-2xl bg-[#fefafa] text-black">
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                    onChange={() => console.log("yes")}
                />
                <NavbarBrand className=" text-4xl">
                    <p className="font-bold text-inherit">PKS</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4 " justify="center">
                <NavbarItem className=" text-2xl ">
                    <Link to={'/Home'}>
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem className=" text-2xl">
                    <Link to={'/AboutUs'}>
                        About us
                    </Link>
                </NavbarItem>
                <NavbarItem className=" text-2xl">
                    <Link to={'/Projects'}>
                        Projects
                    </Link>
                </NavbarItem>
                <NavbarItem className=" text-2xl">
                    <Link to={'/ContactUs'}>
                        Contact us
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu className="py-10">
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <UI.Link
                            color="foreground"
                            href={item.replace(/\s/g, '')}
                        >
                            {item}
                        </UI.Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar >
    </>
}

export default Nav