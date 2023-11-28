
import Post from '@/components/post';
import { redirect } from 'next/navigation';

const PostPage = async() => {
 

  return (
    <div className='flex justify-center'>
   {/* @ts-expect-error Server Component */}
      <Post />
    </div>
  )
}

export default PostPage
