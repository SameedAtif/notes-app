import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import { Search, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import type { RootState } from "@/store"
import { openNewNoteForm, setSelectedNote } from "@/slices/notesSlice"
import type { Note } from "@/interfaces/noteInterface"

import { capitalizeFirstLetter } from "../lib/utils"
import NoteCard from "./note-card"

export default function NoteList() {
  const dispatch = useDispatch()
  const { page } = useParams()
  const { notes, selectedNote } = useSelector((state: RootState) => state.notes)

  const handleNoteClick = (note: Note) => {
    dispatch(setSelectedNote(note))
  }

  return (
    <div className="flex-1 flex flex-col">
      <header className="h-16 border-b flex items-center justify-between px-6 sticky top-0 z-10">
        <div className="flex items-center flex-1 max-w-xl">
          <Search className="w-4 h-4 text-gray-400 absolute ml-3" />
          <Input placeholder="Search notes..." className="pl-10 w-full" />
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="text-2xl font-semibold">{capitalizeFirstLetter(page || "notes")}</h1>

            {notes.map((note) => (
              <NoteCard
                key={note.id}
                note={note}
                isSelected={selectedNote?.id === note.id}
                onClick={() => handleNoteClick(note)}
              />
            ))}
          </div>
        </main>
      </div>
      <div className="fixed bottom-6 right-6 flex gap-2">
        <Button size="icon" className="rounded-full shadow-lg" onClick={() => dispatch(openNewNoteForm())}>
          <Plus className="h-4 w-4" />
        </Button>
        <Button size="icon" variant="outline" className="rounded-full shadow-lg">
          <span className="font-semibold">Aa</span>
        </Button>
      </div>
    </div>
  )
}

