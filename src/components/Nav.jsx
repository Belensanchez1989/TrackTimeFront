import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";


export default function NavComponent() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <AcmeLogo />
                    <p className="font-bold text-black">ACME</p>
                </NavbarBrand>
            </NavbarContent>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link style={{ color: 'black' }} href="#">
                        Calendario
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link style={{ color: 'black' }} href="#">
                        Servicios
                    </Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Link href="#">Login</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="primary" href="#" variant="flat">
                        Sign Up
                    </Button>
                </NavbarItem>
            </NavbarContent>

            {/* Menú hamburguesa para pantallas pequeñas */}
            <NavbarMenu>
                <NavbarMenuItem>
                    <Link style={{ color: 'black' }} className="w-full" href="#" size="lg">
                        Calendario
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link style={{ color: 'black' }}  className="w-full" href="#" size="lg">
                        Servicios
                    </Link>
                </NavbarMenuItem>
            </NavbarMenu>
        </Navbar>
    );
}