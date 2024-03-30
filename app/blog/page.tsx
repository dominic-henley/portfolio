import { client } from '../../sanity/lib/client' 

import { SanityDocument } from "next-sanity"

export default async function Blog() {
  
  const BLOG_QUERY = "*[_type == 'blog']";

  const blogPosts = await client.fetch<SanityDocument[]>(BLOG_QUERY);
  console.log("Fetching blog posts")
  console.log(blogPosts);
  
  
  return (
    <>
      blog page
    </>  
  )
}