import { client } from "@/sanity/lib/client"
import { SanityDocument } from "next-sanity";
import { ProjectProvider } from "../contexts/ProjectContext";
import { urlForImage } from "@/sanity/lib/image";
import ProjectSection from "./ProjectSection";

/* 
  For info, see: 
  https://stackoverflow.com/questions/77808196/is-there-a-way-to-pass-some-data-fetched-on-server-side-globally-to-client-compo
*/ 
export default async function ProjectContextWrapper() {
  
  // See GROQ joins for reference: https://www.sanity.io/docs/groq-joins
  // Fetches all projects and joins them with the referenced post
  const PROJECT_QUERY = `*[_type == 'project']{
    ...,
    post->
  }`
  
  const projects : SanityDocument[] = await client.fetch(PROJECT_QUERY);

  // Sanity does not include imageUrl by default, so we need to add it to the project
  for(let project of projects) {
    project.imageUrl = urlForImage(project.thumbnail)
  }

  return (
    <ProjectProvider
      projects={ projects }
      >
        <ProjectSection />
    </ProjectProvider>
  )
}