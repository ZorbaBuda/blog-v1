
import { writeFileSync } from "fs";
import  fs  from 'fs'

export default function saveGithubPost(githubPost: Buffer, fileName: string) {
  
  fs.writeFileSync(`./content/posts/${fileName}`, githubPost);
}
