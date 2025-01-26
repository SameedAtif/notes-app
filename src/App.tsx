
import { Sidebar } from "./sidebar"
import NoteList from "./components/note-list"
import { EditorContainer } from "./components/editor-container"

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <NoteList />
      <EditorContainer />
    </div>
  )
}

