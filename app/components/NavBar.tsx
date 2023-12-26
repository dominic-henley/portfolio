import Image from "next/image";
import logo from "../../public/logo.jpg";
import { Navbar, NavbarBrand, NavbarToggle, NavbarCollapse, NavbarLink } from "flowbite-react";

export default function NavBar() {
  
  interface Headers {
    text: string,
    url: string
  }

  const navItems: Array<Headers> = [
    {text: "Projects", url: "/projects"},
    {text: "About", url: "/about"},
    {text: "Contact", url: "/contact"}
  ]

  return (
    <Navbar 
      fluid 
      rounded
      className="bg-black"  
    >
      <NavbarBrand
        href="/"
      >
        <Image 
          src={ logo }
          alt="logo"
          width={ 60 }
          height={ 60 }
          className="m-3 rounded-full overflow-hidden"
        />
        <span
          className="self-center whitespace-nowrap text-xl font-semibold"
        >
          Dominic Henley | Developer
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
