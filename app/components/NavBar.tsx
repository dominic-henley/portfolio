import Image from "next/image";
import logo from "../../public/logo.jpg";
import { Navbar, NavbarBrand, NavbarToggle, NavbarCollapse, NavbarLink } from "flowbite-react";

export default function NavBar() {
  
  interface Headers {
    text: string,
    url: string
  }

  const navItems: Array<Headers> = [
    {text: "About", url: "/about"},
    {text: "Projects", url: "/projects"},
    {text: "Contact", url: "/contact"},
    // {text: "Blog", url: "/blog"},
  ]

  return (
    <Navbar 
      fluid 
      rounded
      className="bg-black sticky top-0 z-10"  
    >
        <NavbarBrand
          href="/"
          >
          <Image 
            src={ logo }
            alt="logo"
            width={ 60 }
            height={ 60 }
            className="m-3 rounded-full overflow-hidden h-auto w-auto"
            />
          <span
            className="self-center whitespace-nowrap font-semibold"
            >
            Dominic Henley
          </span>
        </NavbarBrand>
        <NavbarToggle />
        <NavbarCollapse>
          {
            navItems.map((header, idx) => (
              <NavbarLink
              className="text-white"
              key={ idx }
              href={ header.url }
              >
                { header.text }
              </NavbarLink>
            ))
          }
        </NavbarCollapse>
    </Navbar>
  )
}
