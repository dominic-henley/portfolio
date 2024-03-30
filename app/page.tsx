"use client"

import Typewriter from 'typewriter-effect'

export default function Home() {

  const softwareDev = "<span className='text-green-200'>Software Developer</span>"

  const typewriterWords = [softwareDev, "Programmer"]

  return (
    <>
    <div
      className="flex justify-center content-center"
    >
      <h3>
        Hi, my name is Dominic. I'm a 
        <Typewriter 
          options={{
            strings: typewriterWords,
            autoStart: true,
            loop: true,
            skipAddStyles: true
          }}
        />
      </h3>
    </div>
    </>
  )
}
