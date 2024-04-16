"use client"

import Typewriter from 'typewriter-effect';
import SeeMore from './SeeMore';
import Divider from './Divider';
import NavBar from './NavBar';
import { useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from '@gsap/react';

export default function LandingPage() {
  
  const typewriterWords = ["Software Developer", "Programmer"]
  const typewriterContainer = useRef(null);
  const backgroundRef = useRef(null);
  const skillsList = useRef(null);

  useGSAP(() => {
    gsap.from(backgroundRef.current, { x: -1000, duration: 1 })
  }, { scope: typewriterContainer })

  // TODO: Maybe use gsap here for a more attractive landing page
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <div
        className="mx-16 h-full w-full flex"
        >
        <div 
          ref={ typewriterContainer }
          className="grow"  
          >
          <h3>
              Hi, my name is Dominic. I'm a 
              <Typewriter 
                options={{
                  strings: typewriterWords,
                  autoStart: true,
                  loop: true,
                  wrapperClassName: "text-green"
                }}
                />
          </h3>
        </div>
        <div
          ref={ skillsList }
          className="grow"
          >
            <h3>test</h3>
          </div>
      </div>
      <SeeMore />
      <Divider text="-"/>
    </div>
  )
}