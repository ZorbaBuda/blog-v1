import { slug } from 'github-slugger'
//import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import siteMetadata from '@/data/siteMetadata'
//import ListLayout from '@/layouts/ListLayoutWithTags'
import { allPosts } from '@/.contentlayer/generated'
import tagData from '@/lib/tag-files.json'
//import { genPageMetadata } from 'app/seo'
import { Metadata } from 'next'
import ListLayout from '@/components/ListLayout'
import { Post } from '@/.contentlayer/generated'

export default function page({ params} : { params: { tag: string }}) {
  
  const tag = decodeURI(params.tag)
  const tagFiles = tagData[tag]
  var filtered: Post[] = []
  tagFiles.forEach((t: string) => {
    allPosts.forEach((p) => {
      if(t === p.filePath){
        filtered.push(p);
        return
      }
    })
    
  })
  


  return (
    <div>
      <div className='mt-32'>Browsing Tag  {tag} </div>
      <ListLayout posts={filtered} />
    </div>
  )
}
