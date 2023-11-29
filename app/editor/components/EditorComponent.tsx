 'use client'
// import '@mdxeditor/editor/style.css'
import { MDXEditor, MDXEditorMethods } from '@mdxeditor/editor/MDXEditor'
import { UndoRedo } from '@mdxeditor/editor/plugins/toolbar/components/UndoRedo'
import { BoldItalicUnderlineToggles } from '@mdxeditor/editor/plugins/toolbar/components/BoldItalicUnderlineToggles'
import { toolbarPlugin } from '@mdxeditor/editor/plugins/toolbar'
import { AdmonitionDirectiveDescriptor, CreateLink, DiffSourceToggleWrapper, InsertAdmonition, InsertFrontmatter, InsertThematicBreak, ListsToggle, diffSourcePlugin, directivesPlugin, headingsPlugin, imagePlugin, listsPlugin } from '@mdxeditor/editor'
import React, { useState } from "react"
import {FC} from 'react'
import { BlockTypeSelect, InsertImage, Separator } from '@mdxeditor/editor'
import { linkDialogPlugin } from '@mdxeditor/editor'
import { frontmatterPlugin } from '@mdxeditor/editor'
import { MdastImportVisitor } from '@mdxeditor/editor'
import { thematicBreakPlugin } from '@mdxeditor/editor/plugins/thematic-break'

interface EditorProps {
  markdown: string
  editorRef?: React.MutableRefObject<MDXEditorMethods | null>
}

/**
 * Extend this Component further with the necessary plugins or props you need.
 * proxying the ref is necessary. Next.js dynamically imported components don't support refs. 
*/
const Editor: FC<EditorProps> = ({ markdown, editorRef }) => {
  const [text, setText] = useState(markdown)
  const ref = React.useRef<MDXEditorMethods>(null)
//   const text =  `
// ---
// title: titulo
// ---

// Line

// ***

// hellooo

//   hellookokpokpokpokpokpokpoppknlnlnl`

  return (
    <div className='bg-slate-400 overflow-auto'>
  <MDXEditor ref={ref}  markdown={text} onChange={console.log}
  plugins={[
    headingsPlugin(),
    imagePlugin(),
    linkDialogPlugin(),
    frontmatterPlugin(),
    thematicBreakPlugin(),
    listsPlugin(),
    directivesPlugin({ directiveDescriptors: [ AdmonitionDirectiveDescriptor] }),
    diffSourcePlugin({ diffMarkdown: 'An older version', viewMode: 'rich-text' }),
    toolbarPlugin({
    toolbarContents: () => (
      <DiffSourceToggleWrapper>
        <UndoRedo />
        <Separator/>
        <BoldItalicUnderlineToggles />
        <Separator/>
        <ListsToggle />
        <Separator/>
        <BlockTypeSelect/>
        <Separator/>
        <CreateLink />
        <InsertImage />
        <Separator/>
        <InsertAdmonition />
        <Separator/>
        <InsertFrontmatter />
        <InsertThematicBreak />
        </DiffSourceToggleWrapper>
        )
  })]}
   />
   </div>
  )
}

export default Editor

// import { MDXEditor, MDXEditorMethods } from '@mdxeditor/editor/MDXEditor'
// import { headingsPlugin } from '@mdxeditor/editor/plugins/headings'
// import { listsPlugin } from '@mdxeditor/editor/plugins/lists'
// import { quotePlugin } from '@mdxeditor/editor/plugins/quote'
// import { thematicBreakPlugin } from '@mdxeditor/editor/plugins/thematic-break'
// import { FC } from 'react'

// interface EditorProps {
//   markdown: string
//   editorRef?: React.MutableRefObject<MDXEditorMethods | null>
// }

// const Editor: FC<EditorProps> = ({ markdown, editorRef }) => {
//  const text = 
// `--- 
// title: "Title"
// tags:
//   - tag1
//   - tag2
// category: "Category"
// summary: "Summary"
// bookAuthor: "Book author"
// bookYear: "Book year"
// coverImage: " image.jpg/png"
// draft: false
// ---
// `;


//   return (
//     <div className='bg-slate-500'>
//     <MDXEditor onChange={console.log} markdown={text} plugins={[headingsPlugin(), listsPlugin(), quotePlugin(), thematicBreakPlugin()]} />
//  </div>
//   )
// }

// export default Editor