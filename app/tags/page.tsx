import Image from "next/image";
import { allPosts } from "@/.contentlayer/generated";
import BlogCard from "@/components/BlogCard4";
import createTagIndex from "@/lib/createTagIndex";
import { create } from "domain";
import tagData from "@/lib/tag-data.json";
import Link from "next/link";
import { slug } from "github-slugger";
import Tag from "@/components/Tag";
//import AsideLayout from "@/components/AsideLayout";

export default function Home() {
  if (!allPosts) {
    return <p className="mt-10 text-center">Sorry, no posts available.</p>;
  }

  //TODO sort tags
  const tagKeys = Object.keys(tagData)
  console.log( tagKeys)

  return (
    <main className="mt-24 flex  flex-wrap  flex-[3]">
     
     <div className='text-white text-center py-3'>TAGS</div>

     <div className="flex  flex-wrap">
          {tagKeys.length === 0 && 'No tags found.'}
          {tagKeys.map((t) => {
            return (
              <div key={t} className="mb-2 mr-5 mt-2">
                <Tag text={t} />
                <Link
                  href={`/tags/${slug(t)}`}
                  className="-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300"
                  aria-label={`View posts tagged ${t}`}
                >
                 
                </Link>
              </div>
            )
          })}
        </div>

      <div className="mt-10">
        <div>POST FROM TAG: </div>
        <ul className="">
          {allPosts.map((post) => (
            <BlogCard key={post._id} post={post} />
          ))}
        </ul>
      </div>
     
    </main>
  );
}
