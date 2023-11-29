import Post from '@/components/post-mdxEditor/post';
import { getAboutPost } from '@/app/admin-backend';

export default async function AboutPage() {
  
  const about = await getAboutPost();

  return (
    <div className='flex justify-center'>
       <Post {...about} type="about" />
    </div>
  )
}

