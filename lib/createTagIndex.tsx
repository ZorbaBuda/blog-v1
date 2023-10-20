import GithubSlugger from 'github-slugger'
import { writeFileSync } from 'fs'

export default function createTagIndex(allPosts) {
  const tagCount: Record<string, string> = {}
  allPosts.forEach((file) => {
    // console.log(file.url)
      file.tags.forEach((tag) => {
        const formattedTag = GithubSlugger.slug(tag)
        console.log(formattedTag)
        if (formattedTag in tagCount) {
          //tagCount[formattedTag] += 1
        } else {
          //tagCount[formattedTag] = 1
        }
      })
    
  })
  writeFileSync('./lib/tag-data.json', JSON.stringify(tagCount))
}

// export default function createTagIndex(allPosts) {
//   const tagCount: Record<string, number> = {}
//   allPosts.forEach((file) => {
//       file.tags.forEach((tag) => {
//         const formattedTag = GithubSlugger.slug(tag)
//         if (formattedTag in tagCount) {
//           tagCount[formattedTag] += 1
//         } else {
//           tagCount[formattedTag] = 1
//         }
//       })
    
//   })
//   writeFileSync('./lib/tag-data.json', JSON.stringify(tagCount))
// }
