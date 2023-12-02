
import Post from '@/components/post-mdxEditor/post';
import { redirect } from 'next/navigation';

const PostPage = async() => {
 

  return (
    <div className='flex justify-center'>
   {/* @ts-expect-error Server Component */}
      <Post type="post"/>
    </div>
  )
}

export default PostPage
