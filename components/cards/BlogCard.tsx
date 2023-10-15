'use client'
import { format } from "date-fns";
import * as React from "react";

import Tag from "@/components/Tag";
import Link from "next/link";
import { Card } from "flowbite-react";
import Image from 'next/image'
import logo from '@/public/biology-of-love.jpg'
// import CloudinaryImg from '@/components/images/CloudinaryImg';
// import UnstyledLink from '@/components/links/UnstyledLink';

// import { BlogFrontmatter, InjectedMeta } from '@/types/frontmatters';

// type BlogCardProps = {
//   post: BlogFrontmatter & InjectedMeta;
//   checkTagged?: (tag: string) => boolean;
// } & React.ComponentPropsWithoutRef<'li'>;

// export default function BlogCard({
//   post,
//   className,
//   checkTagged,
//   onClick,
// }: BlogCardProps) {
export default function BlogCard() {
  return (
    
       <li className=" mt-5 py-10 ml-32 bg-black flex flex-wrap ">
      <section>
        <Link href="/">
          <Image className="mx-auto px-5" alt={"hello"} src={logo} height={300} width={300} />
        </Link>
      </section>
      <section className="ml-40">
        <div className="text-xl  mt-16 text-white font-a_garamond_pro">
          9/26/23
        </div>
        <h1 className="mt-16 text-[#a8a6a1] text-5xl font-orpheus_pro_regular">
          Kink Shaming
        </h1>
        <div className="mt-20 ">
          <Link
            className="text-xl text-[#a8a6a1] underline font-a_garamond_pro"
            href="/"
          >
            Read More{" "}
          </Link>
         
        </div>
      </section>

    </li>
  );
}
