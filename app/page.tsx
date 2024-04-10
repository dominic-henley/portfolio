"use client"

import Typewriter from 'typewriter-effect'
import SeeMore from './components/SeeMore'
import MyTimeline from './components/MyTimeline'

export default function Home() {

  const typewriterWords = ["Software Developer", "Programmer"]

  return (
    <>
    <div
      className="flex justify-center content-center h-screen animate-fade"
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
    <MyTimeline />
    </>
  )
}
