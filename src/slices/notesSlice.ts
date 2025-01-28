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
      content: JSON.stringify({
        "9d98408d-b990-4ffc-a1d7-387084291b00": {
          id: "9d98408d-b990-4ffc-a1d7-387084291b00",
          value: [
            {
              id: "0508777e-52a4-4168-87a0-bc7661e57aab",
              type: "heading-one",
              children: [{ text: "Grocery list / Stores" }],
              props: { nodeType: "block" },
            },
            {
              id: "1508777e-52a4-4168-87a0-bc7661e57aac",
              type: "paragraph",
              children: [
                { text: "Brand Fleur - Instant Dry Yeast, Extra-virgin Olive Oil 5 banana muffins - 4 garlic cloves" },
              ],
              props: { nodeType: "block" },
            },
          ],
          type: "HeadingOne",
          meta: { order: 0, depth: 0 },
        },
      }),
      description: "San Francisco, CA",
      category: "notes",
    },
    {
      id: "2",
      title: "Books to read 📚",
      content: JSON.stringify({
        "9d98408d-b990-4ffc-a1d7-387084291b01": {
          id: "9d98408d-b990-4ffc-a1d7-387084291b01",
          value: [
            {
              id: "0508777e-52a4-4168-87a0-bc7661e57aab1",
              type: "heading-one",
              children: [{ text: "Books to read 📚" }],
              props: { nodeType: "block" },
            },
            {
              id: "1508777e-52a4-4168-87a0-bc7661e57aac1",
              type: "paragraph",
              children: [
                {
                  text: "Coming to the books we've been meaning to read all these years and should probably start at some point.",
                },
              ],
              props: { nodeType: "block" },
            },
          ],
          type: "HeadingOne",
          meta: { order: 0, depth: 0 },
        },
      }),
      category: "notes",
    },
    {
      id: "3",
      title: "Write down your ideas 💡",
      content: JSON.stringify({
        "9d98408d-b990-4ffc-a1d7-387084291b02": {
          id: "9d98408d-b990-4ffc-a1d7-387084291b02",
          value: [
            {
              id: "0508777e-52a4-4168-87a0-bc7661e57aab2",
              type: "heading-one",
              children: [{ text: "Write down your ideas 💡" }],
              props: { nodeType: "block" },
            },
            {
              id: "1508777e-52a4-4168-87a0-bc7661e57aac2",
              type: "paragraph",
              children: [
                {
                  text: "\"Sometimes, on Mondays, when servers at A16 are announcing the specials, you can almost feel the excitement at the table when the waiters say 'And of course, since it's Monday ... we have meatballs,'\" says Shelley Lindgren.",
                },
              ],
              props: { nodeType: "block" },
            },
          ],
          type: "HeadingOne",
          meta: { order: 0, depth: 0 },
        },
      }),
      tags: ["#ideas", "#to-dos", "#morning"],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MQNCo5QousWGZ7ivbyjYb1iXFm8MUM.png",
      category: "notes",
    },
    {
      id: "4",
      title: "Entreprenuership guide 💡",
      content: JSON.stringify({
        "9d98408d-b990-4ffc-a1d7-387084291b03": {
          id: "9d98408d-b990-4ffc-a1d7-387084291b03",
          value: [
            {
              id: "0508777e-52a4-4168-87a0-bc7661e57aab3",
              type: "heading-one",
              children: [{ text: "Entreprenuership guide 💡" }],
              props: { nodeType: "block" },
            },
            {
              id: "1508777e-52a4-4168-87a0-bc7661e57aac3",
              type: "paragraph",
              children: [
                {
                  text: "\"Sometimes, on Mondays, when servers at A16 are announcing the specials, you can almost feel the excitement at the table when the waiters say 'And of course, since it's Monday ... we have meatballs,'\" says Shelley Lindgren.",
                },
              ],
              props: { nodeType: "block" },
            },
          ],
          type: "HeadingOne",
          meta: { order: 0, depth: 0 },
        },
      }),
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
      const index = state.notes.findIndex((note) => note.id === action.payload.id)
      if (index !== -1) {
        state.notes[index] = action.payload
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
  },
})

// Action creators are generated for each case reducer function
export const { add, remove, update, setSelectedNote, openNewNoteForm, closeNewNoteForm } = notesSlice.actions

export default notesSlice.reducer

