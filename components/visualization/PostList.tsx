
import  PostCard  from './PostCard';

function PostList({
  posts,
 
}) {
  return (
    <div className="mt-10 space-y-12" >
      <div className=" flex flex-col gap-3 ">
        {posts.map((post : githubPost ) => (
        <PostCard key={post.sha}  post={post} type={"post"} />
        ))}
      </div>
     
    </div>
  );
}

export default PostList;
