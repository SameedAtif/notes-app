import { YooptaContentValue } from "@yoopta/editor"

export interface Note {
  id: string
  title: string
  content: string
  tags?: string[]
  image?: string
  description?:string
  category?: string,
  editorValue?: YooptaContentValue
}
