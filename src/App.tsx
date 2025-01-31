
import { Sidebar } from "./sidebar"
import { NoteList } from "./components/Notes/noteList"
import { EditorContainer } from "./components/Notes/editorContainer"

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <NoteList />
      <EditorContainer />
    </div>
  )
}

