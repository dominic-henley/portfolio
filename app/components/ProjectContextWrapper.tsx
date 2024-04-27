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
  
  const PROJECT_QUERY = `*[_type == 'project']`
  
  const projects : SanityDocument[] = await client.fetch(PROJECT_QUERY);

  // Sanity does not include imageUrl by default, so we need to add it to the project
  for(let project of projects) {
    project.imageUrl = urlForImage(project.thumbnail)
  }

  /* 
    the project type contains a Reference _ref to a blog post which returns the _id of the post
  */
  // For each project, get the associated blog post if it exists
  for(let project of projects) {
    const BLOG_QUERY = `*[_type == 'blog' && _id == '${ project.post._ref }']`
    const blogPost : SanityDocument = await client.fetch(BLOG_QUERY);
    project.blogPost = blogPost;
    // Honestly not sure if this is the intended way of doing it, TODO: consult sanity docs  
  }

  return (
    <ProjectProvider
      projects={ projects }
      >
        <ProjectSection />
    </ProjectProvider>
  )
}