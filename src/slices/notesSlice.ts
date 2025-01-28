import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

import type { Note } from "@/interfaces/noteInterface"

interface NotesState {
  notes: Note[]
  selectedNote?: Note
  isNewNoteFormOpen?: boolean
}

const initialState: NotesState = {
  notes: [
    {
      id: "1",
      title: "Grocery list / Stores",
      content: "Brand Fleur - Instant Dry Yeast, Extra-virgin Olive Oil 5 banana muffins - 4 garlic cloves",
      description: "San Francisco, CA",
      category: "notes",
    },
    {
      id: "2",
      title: "Books to read 📚",
      content:
        "Coming to the books we've been meaning to read all these years and should probably start at some point.",
      category: "notes",
    },
    {
      id: "3",
      title: "Write down your ideas 💡",
      content:
        "\"Sometimes, on Mondays, when servers at A16 are announcing the specials, you can almost feel the excitement at the table when the waiters say 'And of course, since it's Monday ... we have meatballs,'\" says Shelley Lindgren.",
      tags: ["#ideas", "#to-dos", "#morning"],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MQNCo5QousWGZ7ivbyjYb1iXFm8MUM.png",
      category: "notes",
    },
    {
      id: "4",
      title: "Entreprenuership guide 💡",
      content:
        "\"Sometimes, on Mondays, when servers at A16 are announcing the specials, you can almost feel the excitement at the table when the waiters say 'And of course, since it's Monday ... we have meatballs,'\" says Shelley Lindgren.",
      tags: ["#ideas", "#to-dos", "#morning"],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MQNCo5QousWGZ7ivbyjYb1iXFm8MUM.png",
      category: "development",
    },
  ],
}

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Note>) => {
      state.notes = [action.payload, ...state.notes]
      state.selectedNote = action.payload
    },
    remove: (state, action: PayloadAction<string>) => {
      state.notes = state.notes.filter((note: Note) => note.id !== action.payload)
    },
    update: (state, action: PayloadAction<Note>) => {
      state.notes = state.notes.map((note: Note) => {
        if (note.id !== action.payload.id) return note
        return action.payload
      })
      if (state.selectedNote && state.selectedNote.id === action.payload.id) {
        state.selectedNote = action.payload
      }
    },
    setSelectedNote: (state, action: PayloadAction<Note>) => {
      state.selectedNote = action.payload
    },
    openNewNoteForm: (state) => {
      state.isNewNoteFormOpen = true
    },
    closeNewNoteForm: (state) => {
      state.isNewNoteFormOpen = false
    },
    updateNoteTitle: (state, action: PayloadAction<{ id: string; title: string }>) => {
      const note = state.notes.find((note) => note.id === action.payload.id)
      if (note) {
        note.title = action.payload.title
        if (state.selectedNote && state.selectedNote.id === action.payload.id) {
          state.selectedNote.title = action.payload.title
        }
      }
    },
    updateNoteContent: (state, action: PayloadAction<{ id: string; content: string }>) => {
      const note = state.notes.find((note) => note.id === action.payload.id)
      if (note) {
        note.content = action.payload.content
        if (state.selectedNote && state.selectedNote.id === action.payload.id) {
          state.selectedNote.content = action.payload.content
        }
      }
    },
  },
})

export const {
  add,
  remove,
  update,
  setSelectedNote,
  openNewNoteForm,
  closeNewNoteForm,
  updateNoteTitle,
  updateNoteContent,
} = notesSlice.actions

export default notesSlice.reducer

