import { useSelector } from 'react-redux'

import type { RootState } from '@/store'
import NotesForm from "@/components/notes-form"

import { Pin, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar"

export function EditorContainer() {
  const { selectedNote } = useSelector((state: RootState) => state.notes)
  // console.log('Tracking re-render', selectedNote);
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
        {selectedNote ?
          <NotesForm note={selectedNote}/> :
          <div className={`p-12 flex items-center justify-center`}>
            <p className="text-gray-500">Select a note to view details</p>
          </div>
        }
      </div>
  )
}
