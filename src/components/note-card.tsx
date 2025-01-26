import { useDispatch, useSelector } from "react-redux"
import { Pin, Trash2 } from "lucide-react"

import { RootState } from "@/store"
import { Note } from "@/interfaces/noteInterface"

import { remove, setSelectedNote } from "@/slices/notesSlice"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "./ui/badge"

interface NoteCardProps {
  note: Note
}

export default function NoteCard({ note }:NoteCardProps ) {
  const { selectedNote } = useSelector((state: RootState) => state.notes)
  const dispatch = useDispatch()

  return (
    <Card
      key={note.id}
      className={`cursor-pointer transition-colors ${
        selectedNote === note ? "bg-orange-50 border-orange-200" : ""
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
            <Button variant="ghost" size="icon" onClick={() => dispatch(remove(note.id))}>
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </CardTitle>
        {note.description && <CardDescription>{note.description}</CardDescription>}
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-500">{note.content}</p>
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
  );
}
