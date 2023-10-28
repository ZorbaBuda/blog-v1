
import Image from "next/image";
import { allPosts } from "@/.contentlayer/generated";
import BlogCard from "@/components/BlogCard2";
import createTagIndex from "@/lib/createTagIndex";
import createCategoryIndex from "@/lib/createCategoryIndex";
import { create } from "domain";
import tagData from "@/lib/tag-data.json";
import Link from "next/link";
import { slug } from "github-slugger";
import Tag from "@/components/Tag";
import AsideLayout from "@/components/AsideLayout";
import ListLayout from "@/components/ListLayout";
// import { motion } from "framer-motion";
import clsx from "clsx";
// import { setTransition, fadeInWhenVisible } from "@/lib/transition";
import BlogCard4 from "@/components/BlogCard4";
import { IoArrowDownOutline } from "react-icons/io5";
import categoryData from '@/lib/category-files.json'


import Carousel from "@/components/Carousel";
import Splider from "@/components/Splider";
import GradientLayout from "@/components/GradientLayout";


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
      <section className="min-h-main mt-20 mb-20 flex flex-col justify-center">
        <h2 className="text-2xl font-bold transition-colors delay-100 md:text-4xl 2xl:text-5xl">
          Hi!
        </h2>
        <h1 className="mt-1 text-3xl font-bold transition-colors delay-200 md:text-5xl 2xl:text-6xl">
          I'm THE MAN - Consciousness analyzer
        </h1>
        <p
          className="mt-4 max-w-4xl leading-relaxed text-gray-700 transition-colors delay-[400ms] dark:text-gray-200 
                     md:mt-6 md:text-lg 2xl:text-xl"
        >
          I&apos;m a self-taught developer, who&apos;s currently pursuing a
          Full-Stack development to create stunning user experiences on the
          front-end, scalable, and secure infrastructure on the backend.
        </p>
        <section className="mt-8 flex gap-4 text-sm md:text-base">
          <Link className="custom-button clickable" href="/categories/all">
            Read my blog
          </Link>
          <Link className="custom-button clickable" href="/about">
            Learn more about me
          </Link>
        </section>
      </section>


  

   <section>
    {categoryKeys.map((key) => (
      <div key={key}>Latest {key} news </div>
    ))}
  
   </section>
 

   <section
      className="flex flex-wrap mx-auto"
    >
      {allPosts.map((post) => (
        <BlogCard key={post._id} post={post}/>
      ))}
    
    </section>


    
        <section className="flex flex-wrap">
          {allPosts.map((post) => (
           <BlogCard post={post} key={post._id} />
          ))}
         
        </section>
      
     
     
    </main>
  );
}
