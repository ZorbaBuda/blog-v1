'use client'
import '@mdxeditor/editor/style.css'
import { MDXEditor, MDXEditorMethods } from '@mdxeditor/editor/MDXEditor'
import { UndoRedo } from '@mdxeditor/editor/plugins/toolbar/components/UndoRedo'
import { BoldItalicUnderlineToggles } from '@mdxeditor/editor/plugins/toolbar/components/BoldItalicUnderlineToggles'
import { toolbarPlugin } from '@mdxeditor/editor/plugins/toolbar'
import { CreateLink, imagePlugin } from '@mdxeditor/editor'
import React from "react"
import {FC} from 'react'
import { BlockTypeSelect, InsertImage, Separator } from '@mdxeditor/editor'
import { linkDialogPlugin } from '@mdxeditor/editor'

interface EditorProps {
  markdown: string
  editorRef?: React.MutableRefObject<MDXEditorMethods | null>
}

/**
 * Extend this Component further with the necessary plugins or props you need.
 * proxying the ref is necessary. Next.js dynamically imported components don't support refs. 
*/
const Editor: FC<EditorProps> = ({ markdown, editorRef }) => {
  const ref = React.useRef<MDXEditorMethods>(null)
  const text = markdown
  return <MDXEditor ref={ref}  markdown={text} onChange={console.log}
  plugins={[
    imagePlugin(),
    linkDialogPlugin(),
    toolbarPlugin({
    toolbarContents: () => (
       <>
        <UndoRedo />
        <Separator/>
        <BoldItalicUnderlineToggles />
        <BlockTypeSelect/>
        <CreateLink />
        <InsertImage />

        </>
        )
  })]}
   />
}

export default Editor