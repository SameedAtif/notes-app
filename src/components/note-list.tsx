import { useParams } from "react-router";
import { Search, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "./ui/badge"

import { capitalizeFirstLetter } from "../lib/utils"

interface Note {
    id: string
    title: string
    content: string
    tags?: string[]
    image?: string
    description?:string
}

interface NoteListProps {
  selectedNote: string | null,
  setSelectedNote: React.Dispatch<React.SetStateAction<string | null>>,
  notes: Note[]
}

export default function NoteList({selectedNote, setSelectedNote, notes}:NoteListProps){
  const { page } = useParams();

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
              <h1 className="text-2xl font-semibold">{capitalizeFirstLetter(page || 'notes')}</h1>

              {notes.map((note) => (
                <Card
                  key={note.id}
                  className={`cursor-pointer transition-colors ${
                    selectedNote === note.id ? "bg-orange-50 border-orange-200" : ""
                  }`}
                  onClick={() => setSelectedNote(note.id)}
                >
                  <CardHeader>
                    <CardTitle>{note.title}</CardTitle>
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
              ))}
            </div>
          </main>

        </div>
        <div className="fixed bottom-6 right-6 flex gap-2">
          <Button size="icon" className="rounded-full shadow-lg">
            <Plus className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="outline" className="rounded-full shadow-lg">
            <span className="font-semibold">Aa</span>
          </Button>
        </div>
      </div>
  )
}

