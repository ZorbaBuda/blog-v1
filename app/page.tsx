import Image from "next/image";
import { allPosts } from '@/.contentlayer/generated'
import BlogCard from "@/components/BlogCard3";

export default function Home() {

  if (!allPosts) {
    return <p className="mt-10 text-center">Sorry, no posts available.</p>;
  }

  return (
     <main className="flex min-h-screen flex-col items-center justify-between p-24">
     {/* <main className="flex items-center justify-between"> */}
      
        <ul className=" mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
       
        {allPosts.map((post) => (
          <BlogCard key={post._id} post={post} />
        ))}
      </ul>
    </main>
  );
}
