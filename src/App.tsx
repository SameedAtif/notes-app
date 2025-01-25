import { Sidebar } from "./sidebar"
import { NoteDetails } from "./components/note-details"
import { useState } from "react"
import NoteList from "./components/note-list"

export default function App() {
  const [selectedNote, setSelectedNote] = useState<string | null>(null)
  const notes = [
    {
      id: "1",
      title: "Grocery list / Stores",
      content: "Brand Fleur - Instant Dry Yeast, Extra-virgin Olive Oil 5 banana muffins - 4 garlic cloves",
      description: "San Francisco, CA",
    },
    {
      id: "2",
      title: "Books to read 📚",
      content: "Coming to the books we've been meaning to read all these years and should probably start at some point.",
    },
    {
      id: "3",
      title: "Write down your ideas 💡",
      content:
        "\"Sometimes, on Mondays, when servers at A16 are announcing the specials, you can almost feel the excitement at the table when the waiters say 'And of course, since it's Monday ... we have meatballs,'\" says Shelley Lindgren.",
      tags: ["#ideas", "#to-dos", "#morning"],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MQNCo5QousWGZ7ivbyjYb1iXFm8MUM.png",
    },
    {
      id: "4",
      title: "Entreprenuership guide 💡",
      content:
        "\"Sometimes, on Mondays, when servers at A16 are announcing the specials, you can almost feel the excitement at the table when the waiters say 'And of course, since it's Monday ... we have meatballs,'\" says Shelley Lindgren.",
      tags: ["#ideas", "#to-dos", "#morning"],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MQNCo5QousWGZ7ivbyjYb1iXFm8MUM.png",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <NoteList
        notes={notes}
        selectedNote={selectedNote}
        setSelectedNote={setSelectedNote}
      />
      <div className="w-1/2 border-l bg-white overflow-y-auto">
        <NoteDetails note={notes.find((note) => note.id === selectedNote) || null} />
      </div>
    </div>
  )
}

