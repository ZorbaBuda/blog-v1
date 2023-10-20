"use client";
import Image from "next/image";
import { format } from "date-fns";
import * as React from "react";
import Tag from "./Tag";
import Link from "next/link";
import logo from "@/public/biology-of-love.jpg";
import { Post } from "@/.contentlayer/generated";
import getFormattedDate from "@/lib/getFormattedDate";

type Props = {
  post: Post;
};

export default function BlogCard({ post }: Props) {
  const { banner, slug, date, title, summary, tags } = post;
  const formattedDate = getFormattedDate(date);
  const imageUrl = `${process.env.GITHUB_URL_IMAGES}${banner}`
  const immUrl=`https://raw.githubusercontent.com/ZorbaBuda/blog-v1/main/public/${banner}`
  
  console.log(imageUrl)
  console.log(typeof imageUrl)
console.log("equals? ", imageUrl === immUrl)
  return (

    <li className=" border-slate-200 border-b max-w-2xl">
      <div className="py-5 flex overflow-hidden shadow-lg">
      <Image className=" object-cover h-60 w-60" 
          alt={banner} 
          src={immUrl} 
           width={500} 
           height={500}
           loading='lazy'
           
           />
   
     <div className="flex flex-col ml-4">
      <div className=" text-sm">
     
      <div className=" flex flex-wrap ">
                 {tags.map((tag) => (
                   <Tag key={tag} text={tag} />
                ))}
              </div>
        </div>
        
        <Link className="tracking-wide uppercase antialiased text-xl hover:text-slate-400" href={`/blog/${slug}`}>
          {title}
          </Link>
        <span className="mt-4 border-t-2 border-solid block w-10 border-slate-600"></span>
        <div className=" mt-4 tracking-wide">
         {summary}
        </div>
        <div>{formattedDate}</div>
        </div>
        </div>
        
      </li>
    

  
  );
}
