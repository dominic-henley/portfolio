import { portableToPlainText } from "@/app/utils/text"
import { client } from "@/sanity/lib/client"
import { SanityDocument } from "next-sanity"
import { FaChevronLeft } from "react-icons/fa";
import Image from "next/image"
import logo from "@/public/logo.jpg";
import moment from "moment"
import { urlForImage } from "@/sanity/lib/image";
import Link from "next/link";

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

export default async function BlogPage({ params } : blogType) {
  
  const { slug } = params

  const BLOG_QUERY = `*[_type == 'blog' && slug._current == ${ slug }][0]` // [0] here means return first object because GROQ returns an array by default
  const blog = await client.fetch(BLOG_QUERY);
  console.log(blog);
  
  blog.imageUrl = urlForImage(blog.thumbnail);


  return (
    <div
      className="py-24 flex justify-center flex-grow whitespace-pre-line bg-grey"
      >
        <div
          className="mx-10 md:w-1/3 flex flex-col gap-2 justify-center"
          >
            <div
              className="flex justify-between"
              >
                <div
                  className="flex justify-start items-center gap-2"
                  >
                  <Link
                    href="/"
                    >
                    <FaChevronLeft />
                  </Link>
                  <Image 
                    src={ logo }
                    alt="logo"
                    width={ 40 }
                    height={ 40 }
                    className="rounded-full overflow-hidden"
                    />
                </div>
                <span className="flex items-center">{ moment(blog.publishDate).format('DD MMM YYYY') }</span>
            </div>
            <div>
              <Image 
                src={ blog.imageUrl }
                alt={ blog.thumbnailAlt }
                width={ 1920 }
                height={ 1080 }
                unoptimized={ true } // TODO: For some reason it doesn't work without this...
              />
            </div>
            <div>
              <span className="underline">{ blog.title }</span>
            </div>
            <div>
              { portableToPlainText(blog.body) }
            </div>
        </div>
    </div>
  )
}