import Image from "next/image";
import { allPosts } from "@/.contentlayer/generated";
import BlogCard from "@/components/BlogCard4";
import createTagIndex from "@/lib/createTagIndex";
import { create } from "domain";
import tagData from "@/lib/tag-data.json";
import Link from "next/link";
import { slug } from "github-slugger";
import Tag from "@/components/Tag";
import AsideLayout from "@/components/AsideLayout";

export default function Home() {
  if (!allPosts) {
    return <p className="mt-10 text-center">Sorry, no posts available.</p>;
  }

  //tag section
  //console.log(tagData)
 // createTagIndex(allPosts)

  const tagCounts = tagData as Record<string, number>;
  const tagKeys = Object.keys(tagCounts);
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a]);

  return (
    // grid layout
    //  <main className="flex min-h-screen flex-col items-center justify-between p-24">
    //  {/* <main className="flex items-center justify-between"> */}

    //     <ul className=" mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">

    // the book smugglers style
    // <main className="flex  flex-1 flex-col items-center justify-between p-24">
    <main className="flex  justify-center flex-[3]">
      {/* <main className="flex items-center justify-between"> */}
      <div>
        <div>POSTS</div>

        <ul className="">
          {allPosts.map((post) => (
            <BlogCard key={post._id} post={post} />
          ))}
        </ul>
      </div>
      <AsideLayout />
    </main>
  );
}
