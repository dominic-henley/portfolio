"use client"

import Typewriter from 'typewriter-effect'
import SeeMore from './SeeMore'

export default function LandingPage() {
  
  const typewriterWords = ["Software Developer", "Programmer"]
  
  return (
    <div
      className="flex justify-center content-center h-screen bg-green-900"
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
      <SeeMore />
    </div>
  )
}