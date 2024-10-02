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
import Link from "next/link"

export default function ProjectSection() {
  
  const projects = useContext<SanityDocument[]>(ProjectContext)

  const projectContainer = useRef(null);

  useGSAP(() => {
    // TODO: animate with scrolltrigger
  }) // { scope: }

  return (
    <>
      <div
        className="md:mx-24 my-10 flex flex-col gap-10"
        >
          <h1
            className="mx-16 md:mx-0 text-3xl"
            >
            Projects
          </h1>
          <div
            className="flex flex-col gap-y-16"
            ref={ projectContainer }
            >
              { projects.map((project, idx) => (
                  <div
                    key={ idx }
                  >
                    <div
                      className={`hidden w-full md:flex ${idx % 2 == 0 ? 'flex-row' : 'flex-row-reverse'} gap-4`}
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
                            className="h-full text-white bg-black border-grey-light"
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
                                  { project.skills.map((skill : string, idx : number) => (
                                    <Badge
                                      className="bg-grey-dark text-white"
                                      key={ idx }
                                      >
                                      { skill }
                                    </Badge>
                                  ))}
                                </div>
                                <div
                                  className="flex gap-2"
                                  >
                                  <Link
                                    href={`/blog/${project.post?.slug.current}`}
                                    target="_blank"
                                    >
                                    <Button
                                      className={`bg-grey-dark ${ project.post ? 'block' : 'hidden'}`} 
                                      >
                                      Read More
                                    </Button>
                                  </Link>
                                  <Link
                                    href={ project.liveLink ?? ''}
                                    target="_blank"
                                    >
                                    <Button
                                      className={`bg-grey-dark ${ project.liveLink ? 'block' : 'hidden'}`} 
                                      >
                                      Visit Site
                                    </Button>
                                  </Link>
                                </div>
                            </div>
                          </Card>
                        </div>
                    </div>
                    <div
                      className="w-screen h-1/3 md:hidden flex flex-col items-center"
                    >
                      <Card
                        className="w-5/6 text-white bg-black border-grey-light"
                      >
                        <div
                          className="flex flex-row gap-x-4 justify-between"
                        >
                          <h5
                            className="text-xl"
                          >
                            { project.projectName }
                          </h5>
                          <div>
                            <Chip
                              stat={ project.status }
                            />
                          </div>
                        </div>
                        <Image 
                          src={ project.imageUrl }
                          alt={ project.altText }
                          width={ 1920 }
                          height={ 1080 }
                          unoptimized={ true } // TODO: For some reason it doesn't work without this...
                        />
                        <div
                          className="line-clamp-5"
                        >
                          { portableToPlainText(project.body) }
                        </div>
                        <div
                          className="flex gap-x-2 flex-wrap gap-y-2"
                        >
                          { project.skills.map((skill : string, idx : number) => (
                              <Badge
                                className="bg-grey-dark text-white"
                                key={ idx }
                                >
                                { skill }
                              </Badge>
                            ))
                          } 
                        </div>
                        <div
                          className="flex gap-2"
                          >
                          <Link
                            href={`/blog/${project.post?.slug.current}`}
                            target="_blank"
                            >
                            <Button
                              className={`bg-grey-dark ${ project.post ? 'block' : 'hidden'}`} 
                              >
                              Read More
                            </Button>
                          </Link>
                          <Link
                            href={ project.liveLink ?? ''}
                            target="_blank"
                            >
                            <Button
                              className={`bg-grey-dark ${ project.liveLink ? 'block' : 'hidden'}`} 
                              >
                              Visit Site
                            </Button>
                          </Link>
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