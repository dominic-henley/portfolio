"use client";

import { createContext } from "react"
import { SanityDocument } from "next-sanity"
import { ReactNode } from "react";

const ProjectContext = createContext<SanityDocument[]>([]);

export const ProjectProvider = ({
  children,
  projects,
} : {
  children: ReactNode | ReactNode[],
  projects: SanityDocument[]
}) => {
  return (
    <ProjectContext.Provider
      value={ projects }
      > 
      { children }
    </ProjectContext.Provider>
  )
}

export default ProjectContext;