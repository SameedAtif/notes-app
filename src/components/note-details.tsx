import { Note } from "@/interfaces/noteInterface"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface NoteDetailsProps {
  note: Note | null
}

export function NoteDetails({ note }: NoteDetailsProps) {
  if (!note) {
    return (
      <div className={`p-12 flex items-center justify-center`}>
        <p className="text-gray-500">Select a note to view details</p>
      </div>
    )
  }

  return (
    <div className={`overflow-y-auto`}>

      <Card className="p-6 border-0 shadow-none">
        <CardHeader className="px-0 pt-0 flex flex-row items-center justify-between">
          <CardTitle>{note.title}</CardTitle>
        </CardHeader>
        <CardContent className="px-0">
          {note.image && (
            <img
              src={note.image || "/placeholder.svg"}
              alt={note.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
          )}
          <p className="text-sm text-gray-600 mb-4">{note.content}</p>
          {note.tags && (
            <div className="flex flex-wrap gap-2">
              {note.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

