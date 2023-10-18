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
    <div className=" w-full lg:max-w-full lg:flex">
      <Link href={`/blog/${slug}`}>
        <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
          <Image className="lazy overflow-hidden" 
          alt={banner} 
          src={immUrl} 
           width={200} 
           height={200}
           
           />
        </div>
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-700 text-base">{summary}</p>
          </div>
          <div className="flex items-center">
            <div className="text-sm">
              <div className="mt-10 flex flex-wrap">
                {tags.map((tag) => (
                  <Tag key={tag} text={tag} />
                ))}
              </div>

              <p className="text-gray-600">
                <time dateTime={formattedDate}>{formattedDate}</time>
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
