import { portableToPlainText } from "@/app/utils/text"
import { client } from "@/sanity/lib/client"
import { SanityDocument } from "next-sanity"

interface blogType {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const BLOG_QUERY = "*[_type == 'blog']"
  const posts : SanityDocument[] = await client.fetch(BLOG_QUERY);

  return posts.map((post) => ({
    slug: post.slug._current,
  }))
}

export default function BlogPage({ params } : blogType) {
  
  const { slug } = params

  return (
    <div
      className="flex justify-center flex-grow"
      >
      { slug }
    </div>
  )
}