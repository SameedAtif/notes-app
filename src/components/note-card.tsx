import { useDispatch, useSelector } from "react-redux"
import { Pin, Trash2 } from "lucide-react"

import type { RootState } from "@/store"
import type { Note } from "@/interfaces/noteInterface"

import { remove, setSelectedNote } from "@/slices/notesSlice"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "./ui/badge"

interface NoteCardProps {
  note: Note
}

// Yoopta content types
interface YooptaTextNode {
  text: string
}

interface YooptaContentNode {
  id: string
  type: string
  children: YooptaTextNode[]
  props: {
    nodeType: string
  }
}

interface YooptaContentValue {
  id: string
  value: YooptaContentNode[]
  type: string
  meta: {
    order: number
    depth: number
  }
}

interface YooptaContent {
  [key: string]: YooptaContentValue
}

export default function NoteCard({ note }: NoteCardProps) {
  const { selectedNote } = useSelector((state: RootState) => state.notes)
  const dispatch = useDispatch()

  const renderNoteContent = (content: string): string => {
    try {
      const contentObj: YooptaContent = JSON.parse(content)
      const firstParagraph = Object.values(contentObj).find((item: YooptaContentValue) =>
        item.value.some((v) => v.type === "paragraph"),
      )
      if (firstParagraph) {
        const paragraphNode = firstParagraph.value.find((v) => v.type === "paragraph")
        if (paragraphNode && paragraphNode.children.length > 0) {
          return paragraphNode.children[0].text
        }
      }
      return "No content"
    } catch (error) {
      console.error("Error parsing note content:", error)
      return content || "No content"
    }
  }

  return (
    <Card
      key={note.id}
      className={`cursor-pointer transition-colors ${
        selectedNote?.id === note.id ? "bg-orange-50 border-orange-200" : ""
      }`}
      onClick={() => dispatch(setSelectedNote(note))}
    >
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div>{note.title}</div>
          <div>
            <Button variant="ghost" size="icon">
              <Pin className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={(e: React.MouseEvent) => {
                e.stopPropagation()
                dispatch(remove(note.id))
              }}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </CardTitle>
        {note.description && <CardDescription>{note.description}</CardDescription>}
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-500">{renderNoteContent(note.content)}</p>
        {note.tags && (
          <div className="flex gap-2 mt-2">
            {note.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

