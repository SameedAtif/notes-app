import { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"

import type { RootState } from "@/store"
import NotesForm from "@/components/notes-form"

import { Pin, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar"

import { add } from "@/slices/notesSlice"
import { useParams } from "react-router"

export function EditorContainer() {
  const { page } = useParams()
  const dispatch = useDispatch()
  const { selectedNote, notes, isNewNoteFormOpen } = useSelector((state: RootState) => state.notes)

  const buildNewNote = useCallback(() => {
    const newIndex = Number.parseInt(notes[notes.length - 1].id) + 1

    return {
      id: newIndex.toString(),
      description: "",
      title: "",
      content: "",
      category: page?.toLowerCase() || "notes",
    }
  }, [notes, page])

  const toggleNotesForm = useCallback(() => {
    if (isNewNoteFormOpen && selectedNote?.id !== notes[0].id) {
      const note = buildNewNote()
      dispatch(add(note))
      return <NotesForm note={note} />
    }
    return <NotesForm note={selectedNote} />
  }, [buildNewNote, dispatch, isNewNoteFormOpen, notes, selectedNote])

  return (
    <div className="w-1/2 border-l bg-white overflow-y-auto px-12">
      <header className="pt-3 bg-white flex items-center justify-between">
        <div className="flex items-center flex-1 max-w-xl">
          <Button variant="ghost" size="icon">
            <Pin className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Download className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center">
          <Button variant="ghost">Updates</Button>
          <Button variant="ghost">Share</Button>
          <div className="flex -space-x-2">
            <Avatar className="border-2 border-white">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar className="border-2 border-white">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <Avatar className="border-2 border-white">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>TD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>
      {toggleNotesForm()}
    </div>
  )
}

