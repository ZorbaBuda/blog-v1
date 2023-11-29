import Post from '@/components/post-mdxEditor/post';
import { redirect } from 'next/navigation';
import { getPost } from '@/app/admin-backend';

const PostPage = async({ params }: { params: { slug: string } }) => {
  
  const post = await getPost(params.slug);

  return (
    <div className='flex justify-center'>
       <Post {...post} />
    </div>
  )
}

export default PostPage
