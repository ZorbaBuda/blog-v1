import Image from 'next/image'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const EditorComp = dynamic(() => import('./components/EditorComponent'), { ssr: false })

const markdown = `
# Hello world!
Check the EditorComponent.tsx file for the code .
`

// const markdown = " Hello worldCheck the EditorComponent.tsx file for the code ."

export default function Home() {
  return (
    
    <div className='mt-20'>Editor:
      <Suspense fallback={null}>
        <EditorComp markdown={markdown} />
      </Suspense>
    </div>
  )
}