import GithubSlugger from 'github-slugger'
import { writeFileSync } from 'fs'

type tagRecord = {
  tag: string,
  docs: string[]
}

export default function createTagIndex(allPosts) {
  const records: tagRecord = {
    tag: '',
    docs: []
  }
  allPosts.forEach((file) => {
    // console.log(file.url)
      file.tags.forEach((tag) => {
        const formattedTag = GithubSlugger.slug(tag)
        console.log(formattedTag)
        if (formattedTag in records) {
          records[formattedTag].push(file.url)
          console.log(records);
        } else {
          //tagCount[formattedTag] = 1
        }
      })
    
  })
  writeFileSync('./lib/tag-data.json', JSON.stringify(records))
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
