"use client"

import Typewriter from 'typewriter-effect';
import { Navbar, NavbarBrand, NavbarToggle, NavbarCollapse, NavbarLink } from "flowbite-react";

export default function NavBar() {
  
  interface Headers {
    text: string,
    url: string
  }

  const typewriterWords = ["Software Developer", "Programmer", "Web Developer"]

  const navItems: Array<Headers> = [
    // {text: "About", url: "/about"},
    // {text: "Projects", url: "/projects"},
    // {text: "Contact", url: "/contact"},
    // {text: "Blog", url: "/blog"},
  ]

  return (
    <Navbar 
      fluid 
      rounded
      className="bg-black-light top-0 z-10 mx-10 pt-6"  
    >
        <NavbarBrand
          href="/"
          >
          <span className="flex self-center whitespace-pre font-semibold text-white">Dominic Henley | </span>
          <Typewriter 
            options={{
              strings: typewriterWords,
              autoStart: true,
              loop: true,
              wrapperClassName: "text-green font-semibold"
            }}
            />
        </NavbarBrand>
    </Navbar>
  )
}
