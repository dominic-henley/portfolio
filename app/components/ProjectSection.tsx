"use client"

import { useContext, useRef } from "react"
import ProjectContext from "../contexts/ProjectContext"
import { SanityDocument } from "next-sanity"
import Image from "next/image"
import { useGSAP } from "@gsap/react"
import Divider from "./Divider"
import { Badge, Button, Card } from "flowbite-react"
import { portableToPlainText } from "../utils/text"
import Chip from "./Chip"

export default function ProjectSection() {
  
  const projects = useContext<SanityDocument[]>(ProjectContext)

  const projectContainer = useRef(null);

  console.log("test")
  console.log(projects);

  useGSAP(() => {
    // TODO: animate with scrolltrigger
  }) // { scope: }

  return (
    <>
      <div
        className="mx-24 my-10 flex flex-col gap-10"
        >
          <h1
            className="text-3xl"
            >
            Projects
          </h1>
          <div
            ref={ projectContainer }
            >
              { projects.map((project, idx) => (
                  <div
                    key={ idx }
                    className={`w-full flex ${idx % 2 == 0 ? 'flex-row' : 'flex-row-reverse'} gap-4`}
                    >
                      <div
                        className="w-1/2 flex justify-center border-4 border-grey-light shadow-grey-dark rounded-md"
                        >
                        <Image 
                          src={ project.imageUrl }
                          alt={ project.altText }
                          width={ 1920 }
                          height={ 1080 }
                          unoptimized={ true } // TODO: For some reason it doesn't work without this...
                        />
                      </div>
                      <div
                        className="w-1/2 flex justify-center"
                        >
                        <Card
                          className="h-full bg-black border-grey-light"
                          >
                          <div
                            id="cardTitle"
                            className="flex justify-between"
                            >
                            <h5
                              className="text-2xl"
                              >
                                { project.projectName }
                            </h5>
                            <div
                              className="flex justify-center"
                              >
                              <Chip 
                                stat={ project.status }
                              />
                            </div>
                          </div>
                          <p>
                            { portableToPlainText(project.body) }
                          </p>
                          <div
                            className="flex justify-between"
                            >
                              <div
                                className="flex gap-2"
                                >
                                { project.skills.map((skill, idx) => (
                                  <Badge
                                    className="bg-grey-dark text-white"
                                    key={ idx }
                                    >
                                    { skill }
                                  </Badge>
                                ))}
                              </div>
                              <Button
                                className="bg-grey-dark"
                                >
                                Read More
                              </Button>
                          </div>
                        </Card>
                      </div>
                  </div>
                ))
              }
          </div>
      </div>
      <Divider text="-" />
    </>
  )
}