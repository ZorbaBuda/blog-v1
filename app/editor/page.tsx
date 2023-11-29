import { getAllPosts } from "../admin-backend";
import { allPosts, Post } from "@/.contentlayer/generated";
import { columns } from "@/components/posts-list/columns";
import { DataTable } from "@/components/posts-list/data-table";
import { buttonVariants } from "@/components/button";
import { compareDesc } from "date-fns";
import Link from "next/link";
// import { Link } from "lucide-react";
// import { PostWithStatus } from "./post-with-status.model";

export default async function page() {
  const postsFromGithub = await getAllPosts();
  const generatedPosts = allPosts;

  let posts = postsFromGithub
    .map((githubPost: any) => {
      let generatedPost = generatedPosts.filter((generatedPost: any) => {
        return generatedPost._raw.sourceFileName == githubPost.name;
      })[0];

      return {
        ...githubPost,
        // date: generatedPost.date,
        status: generatedPost ? "published" : "publishing",
      };
    })
    .sort((a: any, b: any) =>
      compareDesc(new Date(a.publishedAt), new Date(b.publishedAt))
    );
  return ( <>
        <div className="pb-5 pr-5 ">
        {/* <Link href='/edit_posts/create' className={buttonVariants({ variant: "outline" })}>Create a new post</Link> */}
        <Link href='/editor/create'>Create a new post</Link>
      
      </div>

      <DataTable columns={columns} data={posts} />
  </>
  )
}
