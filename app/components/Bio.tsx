"use client"

import { Card } from "flowbite-react";
import { FaGithub, FaLinkedin  } from "react-icons/fa";
import Icon from "./Icon"

export default function Bio() {
  // Social Media
  const socials = [
    { name: 'GitHub', icon: <FaGithub />, url: "https://github.com/dominic-henley"},
    { name: 'LinkedIn', icon: <FaLinkedin />, url: "https://www.linkedin.com/in/dominic-henley-70956712b"},
  ]
  
  return (
    <div
      className="w-full md:w-1/2 flex justify-center"
      >
        <Card
          className="w-5/6 md:w-2/3 h-full py-10 bg-black border-grey-light"
          >
            <div
              className="flex flex-col"
              >
              <div>
                <h5
                  className="text-2xl my-5"
                  >
                    A little about me
                </h5>

                { /* Might move this <p> tag to CMS because of potential apos escaping */ }
                <p>
                  A recent graduate from The University of Melbourne,
                  I&apos;m passionate about Software Engineering and Cybersecurity.
                  In the past, I&apos;ve worked as a Software Developer where I built
                  tools to aid a company in their operations. My main skills are in
                  Web Development, but I spend my free time working on 
                  learning new skills. The most recent skill I&apos;ve been working on is
                  Cybersecurity. I often participate in CTFs where I can practice
                  hacking skills.
                </p>
              </div>
              <div
                className="flex justify-center my-10 gap-10"
                >
                { socials.map((social, idx) => (
                    <Icon
                      key={ idx }
                      name={ social.name }
                      icon={ social.icon }
                      url={ social.url }
                    />
                  ))}
              </div>
              <div
                className="flex justify-center"
              >
                dominicshenley@gmail.com
              </div>
            </div>
        </Card>
      </div>
  )
}