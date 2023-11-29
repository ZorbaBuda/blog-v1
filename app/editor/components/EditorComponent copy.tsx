 'use client'
// // import '@mdxeditor/editor/style.css'
// import { MDXEditor, MDXEditorMethods } from '@mdxeditor/editor/MDXEditor'
// import { UndoRedo } from '@mdxeditor/editor/plugins/toolbar/components/UndoRedo'
// import { BoldItalicUnderlineToggles } from '@mdxeditor/editor/plugins/toolbar/components/BoldItalicUnderlineToggles'
// import { toolbarPlugin } from '@mdxeditor/editor/plugins/toolbar'
// import { CreateLink, InsertFrontmatter, imagePlugin } from '@mdxeditor/editor'
// import React from "react"
// import {FC} from 'react'
// import { BlockTypeSelect, InsertImage, Separator } from '@mdxeditor/editor'
// import { linkDialogPlugin } from '@mdxeditor/editor'
// import { frontmatterPlugin } from '@mdxeditor/editor'
// import { MdastImportVisitor } from '@mdxeditor/editor'
// import { thematicBreakPlugin } from '@mdxeditor/editor/plugins/thematic-break'

// interface EditorProps {
//   markdown: string
//   editorRef?: React.MutableRefObject<MDXEditorMethods | null>
// }

// /**
//  * Extend this Component further with the necessary plugins or props you need.
//  * proxying the ref is necessary. Next.js dynamically imported components don't support refs. 
// */
// const Editor: FC<EditorProps> = ({ markdown, editorRef }) => {
//   const ref = React.useRef<MDXEditorMethods>(null)
//   const text =  `---
//   title: titulo
//   ---
  
//   hellookokpokpokpokpokpokpoppknlnlnl`

//   return (
//     <div className='bg-slate-400'>
//   <MDXEditor ref={editorRef}  markdown={text} onChange={console.log}
//   plugins={[
//     imagePlugin(),
//     linkDialogPlugin(),
//     frontmatterPlugin(),
//     thematicBreakPlugin(),
//     toolbarPlugin({
//     toolbarContents: () => (
//        <>
//         <UndoRedo />
//         <Separator/>
//         <BoldItalicUnderlineToggles />
//         <BlockTypeSelect/>
//         <CreateLink />
//         <InsertImage />
//         <Separator/>
//         <InsertFrontmatter />

//         </>
//         )
//   })]}
//    />
//    </div>
//   )
// }

// export default Editor

import { MDXEditor, MDXEditorMethods } from '@mdxeditor/editor/MDXEditor'
import { headingsPlugin } from '@mdxeditor/editor/plugins/headings'
import { listsPlugin } from '@mdxeditor/editor/plugins/lists'
import { quotePlugin } from '@mdxeditor/editor/plugins/quote'
import { thematicBreakPlugin } from '@mdxeditor/editor/plugins/thematic-break'
import { FC } from 'react'

interface EditorProps {
  markdown: string
  editorRef?: React.MutableRefObject<MDXEditorMethods | null>
}

const Editor: FC<EditorProps> = ({ markdown, editorRef }) => {
  return (
    <div className='bg-slate-500'>
    <MDXEditor onChange={console.log} markdown={markdown} plugins={[headingsPlugin(), listsPlugin(), quotePlugin(), thematicBreakPlugin()]} />
 </div>
  )
}

export default Editor