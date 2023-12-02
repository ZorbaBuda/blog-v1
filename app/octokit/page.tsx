'use client'
import { getAllPosts, getPost, getAboutPost } from "@/lib/admin-backend";
import { allPosts, Post } from "@/.contentlayer/generated";
import { columns } from "@/components/posts-list/columns";
import { DataTable } from "@/components/posts-list/data-table";
import { buttonVariants } from "@/components/button";
import { compareDesc } from "date-fns";
import Link from "next/link";
import PostList from "@/components/visualization/PostList";
import PostCard from "@/components/visualization/PostCard";
// import { Link } from "lucide-react";
// import { PostWithStatus } from "./post-with-status.model";

// const onDelete = async(post: PostItem) => {
//   await deleteData(`/api/posts/${post.name}`, post.sha);


export default async function page() {
 
  //existing posts in repo
  const postsFromGithub = await getAllPosts();
  // postsFromGithub.map((post: any, index: Number) => {
  //   console.log("post: ", index)
  //   console.log(post.name)
  //   console.log(post.sha)
  // })

const about = await getAboutPost()

//creation of array with all posts content
const posts =  await Promise.all(postsFromGithub.map(async (postFromGithub) => { return getPost(postFromGithub.name)}))

  //  console.log(posts.length)
 
  return ( <>
        <div className="pb-5 pr-5 ">
         <Link href='/octokit/create' className=''>Create a new post</Link> 
      
      </div>

<div className="">
  <div className="text-3xl uppercase">ABOUT FILE</div>
     <PostCard post={about} type={"about"}/>
     <div className="text-3xl uppercase">POSTS</div>
     <PostList posts={posts} />
      {/* <DataTable columns={columns} data={postsFromGithub} /> */}
      </div>
  </>
  )
}
