import BlogCard from "@/components/cards/BlogCard";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <>
        <ul className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3"></ul>
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </>
    </main>
  );
}
