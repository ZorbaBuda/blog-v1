import Image from "next/image";
import { allPosts } from '@/.contentlayer/generated'
import BlogCard2 from "@/components/BlogCard2";

export default function Home() {

  if (!allPosts) {
    return <p className="mt-10 text-center">Sorry, no posts available.</p>;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <>
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-5"></div>
       
        {allPosts.map((post) => (
          <BlogCard2 key={post._id} post={post} />
        ))}
      </>
    </main>
  );
}
