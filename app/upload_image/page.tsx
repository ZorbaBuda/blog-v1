'use client'

import { useState } from "react";

export default function page() {

  const [file, setFile] = useState<File>();


  const uploadImage = async (file: File | undefined) => {
    setFile(file);
    //e.preventDefault()
    if (!file) return

    try {
      const data = new FormData()
      data.set('file', file)

      const res = await fetch('/api/images', {
        method: 'POST',
        body: data
      })
      // handle the error
      if (!res.ok) throw new Error(await res.text())
    } catch (e: any) {
      // Handle errors here
      console.error(e)
    }
  }
  return (
    <div className="flex justify-center items-center">
      image management

{/* <div className="container">
      <Label className="w-50 justify-end" htmlFor="picture">Upload image</Label>
        <Input className="w-50 justify-end" id="file" type="file" name="file" onChange={(e) => uploadImage(e.target.files?.[0])} />

    
      <Button className="mt-2 mb-4 w-40 float-right" onClick={() => onSubmit()}>Post</Button>
      <div className="grid w-full items-center gap-1.5 mb-5">
        <Label htmlFor="slug">Slug</Label>
        <Input type="slug" id="slug" placeholder="slug" value={slug} onChange={e => setSlug(e.target.value)}  />
       </div>
      <CodeMirror
        value={postMD}
        theme={githubDark}
        minHeight="400px"
        extensions={[markdown({ base: markdownLanguage, codeLanguages: languages }), EditorView.lineWrapping]}
        basicSetup={setupOptions}
        onChange={e => setPostMD(e)}
      />
    </div> */}
    </div>
  )
}
