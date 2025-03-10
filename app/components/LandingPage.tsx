"use client"

import Image from "next/image";
import logo from "../../public/logo.jpg";
import SeeMore from './SeeMore';
import Divider from './Divider';
import Icon from "./Icon";

import { useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { TbBrandNextjs, TbBrandCpp  } from "react-icons/tb";
import { FaReact, FaNode, FaPython, FaDocker, FaJava  } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiSanity, SiPostgresql, SiGreensock, SiTailwindcss } from "react-icons/si";
import { DiRuby } from "react-icons/di";

export default function LandingPage() {
  
  const imageRef = useRef(null);
  const skillsListContainer = useRef(null);

  const skills = [
    {name: "Python", icon: <FaPython />},
    {name: "Javascript", icon: <IoLogoJavascript />},
    {name: "Java", icon: <FaJava /> },
    {name: "C++", icon: <TbBrandCpp />},
    {name: "NextJS", icon: <TbBrandNextjs /> },
    {name: "ReactJS", icon: <FaReact /> },
    {name: "NodeJS", icon: <FaNode />},
    {name: "PostgreSQL", icon: <SiPostgresql />},
    {name: "Docker", icon: <FaDocker />},
    {name: "Sanity", icon: <SiSanity />},
    {name: "GSAP", icon: <SiGreensock />},
    {name: "TailwindCSS", icon : <SiTailwindcss />},
    {name: "Ruby", icon: <DiRuby />}
  ]

  useGSAP(() => {
    gsap.to(".skill", { opacity: 1, stagger: 0.1})
  }, { scope: skillsListContainer })

  // TODO: Maybe use gsap here for a more attractive landing page
  return (
    <div className="flex flex-col md:h-screen">
      <div
        className="mx-16 h-full flex flex-col md:flex-row"
        >
        <div 
          className="h-screen md:w-1/2 flex flex-col justify-center gap-y-4"  
          >
          <div
            className="flex justify-center"
            >
            <h3
              className="text-white"
            >
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
          <div>
            <h3
              className="flex justify-center"
            >
              Currently employed at Culture Amp as an Associate Engineer
            </h3>
          </div>
        </div>
        <div
          className="md:w-1/2 flex flex-col justify-center content-center gap-y-6"
          >
          <div
            className="w-full flex justify-center text-white"
            >
            Some of my skills:
          </div>
          <div
            ref={ skillsListContainer }
            className="w-full flex flex-row justify-center flex-wrap content-center gap-x-6 gap-y-4"
            >
              { skills.map((skill, idx) => (
                <Icon
                  className="skill opacity-0 border-x-2 rounded-lg p-4"
                  key={ idx }
                  name={ skill.name }
                  icon={ skill.icon }
                  />
              )) }
          </div>
        </div>
      </div>
      <SeeMore />
      <Divider text="-"/>
    </div>
  )
}