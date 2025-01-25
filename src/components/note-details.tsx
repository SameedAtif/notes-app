import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Pin, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar"

interface NoteDetailsProps {
  note: {
    id: string
    title: string
    content: string
    tags?: string[]
    image?: string
  } | null
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
      <header className="p-3 bg-white flex items-center justify-between">
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

