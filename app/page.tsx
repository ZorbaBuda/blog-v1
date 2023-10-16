import BlogCard from "@/components/cards/BlogCard";
import Image from "next/image";
import { allPosts } from '@/.contentlayer/generated'

export default function Home() {

  if (!allPosts) {
    return <p className="mt-10 text-center">Sorry, no posts available.</p>;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <>
        <ul className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3"></ul>
       
        {allPosts.map((post) => (
          <BlogCard key={post._id} post={post} />
        ))}
      </>
    </main>
  );
}
