import Link from "next/link";
import { format, parseISO } from "date-fns";
import { es } from "date-fns/locale";

type Props = {
  post: githubPost;
  type?: string
};

function PostCard({ post, type }: Props) {
  const { fileName, sha } = post;

  // const formattedDate = (
  //   <time dateTime={date} className="mt-1">
  //         {format(parseISO(post.date), 'd LLLL , yyyy', {locale: es})}
  //       </time> )

  return (
    <Link href={`/octokit/edit_post/${fileName}`}>
    <div className=" md:border-b md:border-b-slate-700">
      <div
        className="  group  p-5 md:pt-8 md:pb-14  
    md:border-none border border-spacing-2 border-slate-700   "
      >
        <div className="lg:col-span-2 mt-3 md:mt-2  flex flex-col  max-w-none ">
          {/* <div className="flex  items-center gap-2">

       
          <div className=" dark:text-slate-400 text-slate-800"><TbPointFilled /></div>
          <div className="dark:text-slate-400 text-slate-800 flex items-center  text-sm  uppercase   gap-2">
          
           {formattedDate}
          </div>
         </div> */}

          <div
            className=" text-black dark:text-white transition 
            mt-3  font-bold   tracking-wide lg:text-3xl text-3xl 
             "
          >
            {fileName}
          </div>

          <div
            className="font-source_serif dark:text-white text-black leading-normal  lg:text-xl text-base mt-2 
          tracking-normal  "
          >
            {" "}
            {sha}
          </div>

           <Link   href={`/`}>Delete</Link> 
        </div>
      </div>
    </div>
    </Link>
  );
}

export default PostCard;
