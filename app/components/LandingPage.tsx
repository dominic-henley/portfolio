"use client"

import Image from "next/image";
import logo from "../../public/logo.jpg";
import SeeMore from './SeeMore';
import Divider from './Divider';
import NavBar from './NavBar';
import Skill from "./SkillIcon";

import { useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { TbBrandNextjs } from "react-icons/tb";
import { FaReact, FaNode, FaPython, FaDocker } from "react-icons/fa";
import { SiSanity, SiPostgresql  } from "react-icons/si";

export default function LandingPage() {
  
  const typewriterContainer = useRef(null);
  const imageRef = useRef(null);
  const skillsListContainer = useRef(null);
  const skillsRef = useRef(null);

  const skills = [
    {name: "NextJS", icon: <TbBrandNextjs /> },
    {name: "ReactJS", icon: <FaReact /> },
    {name: "NodeJS", icon: <FaNode />},
    {name: "SQL", icon: <SiPostgresql />},
    {name: "Docker", icon: <FaDocker />},
    {name: "Python", icon: <FaPython />},
    {name: "Sanity", icon: <SiSanity />},
  ]

  useGSAP(() => {
    gsap.to(".skill", { opacity: 1, stagger: 0.1})
  }, { scope: skillsListContainer })

  // TODO: Maybe use gsap here for a more attractive landing page
  return (
    <div className="flex flex-col h-screen w-screen">
      <NavBar />
      <div
        className="mx-16 h-full flex"
        >
        <div 
          ref={ typewriterContainer }
          className="w-1/2 flex flex-col justify-center"  
          >
          <div
            className="flex justify-center"
            >
            <h3>
                Hi, my name is Dominic. Nice to meet you!
            </h3>
          </div>
          <div
            className="flex justify-center"
            >
            <Image 
              ref={ imageRef }
              src={ logo }
              alt="logo"
              width={ 60 }
              height={ 60 }
              className="m-3 rounded-full overflow-hidden"
              />
          </div>
        </div>
        <div
          ref={ skillsListContainer }
          className="w-1/2 flex justify-center items-center gap-4 flex-wrap"
          >
            { skills.map((skill) => (
              <Skill
                name={ skill.name }
                icon={ skill.icon }
                />
            )) }
        </div>
      </div>
      <SeeMore />
      <Divider text="-"/>
    </div>
  )
}