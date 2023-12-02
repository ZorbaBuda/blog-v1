
import Image from "next/image";
import { allPosts } from "@/.contentlayer/generated";
import createTagIndex from "@/lib/saveGithubPost";
import createCategoryIndex from "@/lib/createCategoryIndex";
import { create } from "domain";
import tagData from "@/lib/tag-data.json";
import Link from "next/link";
import { slug } from "github-slugger";
import Tag from "@/components/Tag";

// import { motion } from "framer-motion";
import clsx from "clsx";
// import { setTransition, fadeInWhenVisible } from "@/lib/transition";
import { IoArrowDownOutline } from "react-icons/io5";
import categoryData from '@/lib/category-files.json'




export default function Home() {
  if (!allPosts) {
    return <p className="mt-10 text-center">Sorry, no posts available.</p>;
  }

  //tag section
  //console.log(tagData)
  //createTagIndex(allPosts)
  //createCategoryIndex(allPosts)

  const tagCounts = tagData as Record<string, number>;
  const tagKeys = Object.keys(tagCounts);
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a]);

  const categoryKeys = Object.keys(categoryData)

  return (
    <main className="">
      <section className=" mt-20  flex  items-center justify-center">
     
        <h1 className=" text-5xl font-bold ">
         BLOG POSTS MANAGEMENT
        </h1>
    </section>

    </main>
  );
}
