import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import type { Note } from '@/interfaces/note.types'

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
      category: 'notes',
      editorValue: {
        "77c1347f-bf55-43d0-b691-34f4138d1755": {
          "id": "77c1347f-bf55-43d0-b691-34f4138d1755",
          "value": [
            {
              "id": "ee693755-17c5-4abc-b620-a21a8b3af600",
              "type": "heading-one",
              "props": {
                "nodeType": "block"
              },
              "children": [
                {
                  "text": "Data from Page 1"
                }
              ]
            }
          ],
          "type": "HeadingOne",
          "meta": {
            "order": 0,
            "depth": 0
          }
        },
        "fb3b71ce-94e3-456d-afd7-d3dfc9386050": {
          "id": "fb3b71ce-94e3-456d-afd7-d3dfc9386050",
          "value": [
            {
              "id": "3778d845-510c-4ad5-aa05-17f6b12daba4",
              "type": "paragraph",
              "children": [
                {
                  "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sem risus, imperdiet non egestas ut, mollis sit amet lorem. Fusce maximus, metus scelerisque efficitur dapibus, lacus tellus feugiat ante, at volutpat quam turpis vel elit. Nullam eu nisi sit amet ex rutrum dapibus et quis enim. Integer tristique convallis porttitor. Sed sit amet euismod ante, sit amet ultrices dolor. Sed tincidunt mollis dictum. Etiam euismod tortor mauris, a luctus massa porttitor a. Cras placerat molestie tempus. Ut sollicitudin non est ut commodo. Integer sem nulla, suscipit sit amet fringilla eu, pharetra quis lorem. Morbi purus metus, dignissim ut porttitor nec, congue ut ante. Aenean mattis mollis neque non ultricies. Nullam maximus elit non imperdiet sodales. Nam arcu enim, eleifend in bibendum sit amet, auctor et odio."
                }
              ],
              "props": {
                "nodeType": "block"
              }
            }
          ],
          "type": "Paragraph",
          "meta": {
            "order": 1,
            "depth": 0
          }
        }
      }
    },
    {
      id: "2",
      title: "Books to read 📚",
      content: "Coming to the books we've been meaning to read all these years and should probably start at some point.",
      category: 'notes',
      editorValue: {
        "2c8ae2bc-192b-42d1-92e0-c3cdcee769fc": {
          "id": "2c8ae2bc-192b-42d1-92e0-c3cdcee769fc",
          "value": [
            {
              "id": "c47efc02-d447-4dca-b783-2a1944d2b7cf",
              "type": "heading-one",
              "props": {
                "nodeType": "block"
              },
              "children": [
                {
                  "text": "Data from Page 2"
                }
              ]
            }
          ],
          "type": "HeadingOne",
          "meta": {
            "order": 0,
            "depth": 0
          }
        },
        "ed1b288b-689d-467a-bb8b-141ae44283c1": {
          "id": "ed1b288b-689d-467a-bb8b-141ae44283c1",
          "type": "Callout",
          "meta": {
            "order": 1,
            "depth": 0
          },
          "value": [
            {
              "id": "fc1c0715-bc59-4fe6-9380-90fe5c44e1d5",
              "type": "callout",
              "children": [
                {
                  "text": "Mauris id consectetur lectus, nec sollicitudin ipsum. Mauris ullamcorper sodales interdum. Sed aliquam tristique leo vitae condimentum. Quisque fringilla, ipsum fringilla tincidunt feugiat, massa neque vulputate eros, a facilisis felis arcu vitae lectus. Quisque sed tincidunt elit. Nulla ante lacus, condimentum eleifend dapibus quis, posuere id turpis. Morbi porttitor non turpis sed hendrerit. Nullam semper, ligula sit amet tempus finibus, eros ante luctus nibh, vitae sagittis mauris justo vel ante. Nunc dolor erat, viverra vel augue ut, pellentesque malesuada diam. In ut orci a erat sagittis sagittis et vitae nibh. Quisque blandit purus eget tristique eleifend. Curabitur sit amet nisl mollis, semper tortor ac, cursus erat. Nulla vehicula ultricies rutrum. Aliquam quis maximus erat, sed pretium urna. Duis fermentum in ipsum consequat porttitor."
                }
              ],
              "props": {
                "nodeType": "block",
                "theme": "info"
              }
            }
          ]
        }
      }
    },
    {
      id: "3",
      title: "Write down your ideas 💡",
      content:
        "\"Sometimes, on Mondays, when servers at A16 are announcing the specials, you can almost feel the excitement at the table when the waiters say 'And of course, since it's Monday ... we have meatballs,'\" says Shelley Lindgren.",
      tags: ["#ideas", "#to-dos", "#morning"],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MQNCo5QousWGZ7ivbyjYb1iXFm8MUM.png",
      category: 'notes',
      editorValue: {
        "9cbb480a-0ead-4811-b115-616482ad2761": {
          "id": "9cbb480a-0ead-4811-b115-616482ad2761",
          "value": [
            {
              "id": "bab625bd-cfe8-4d19-9a1c-e0771bd1580f",
              "type": "heading-one",
              "props": {
                "nodeType": "block"
              },
              "children": [
                {
                  "text": "Data from Page 3"
                }
              ]
            }
          ],
          "type": "HeadingOne",
          "meta": {
            "order": 0,
            "depth": 0
          }
        },
        "cbebd17a-6676-4f55-adcf-26eb83e6b276": {
          "id": "cbebd17a-6676-4f55-adcf-26eb83e6b276",
          "type": "Blockquote",
          "meta": {
            "order": 1,
            "depth": 0
          },
          "value": [
            {
              "id": "edab59e2-9f3c-449d-adb8-487bfaf8714a",
              "type": "blockquote",
              "children": [
                {
                  "text": "Maecenas quis nunc sit amet orci blandit pellentesque. Integer auctor ultricies lectus, sit amet pharetra dui ullamcorper ac. Sed luctus fermentum tellus, nec venenatis massa facilisis non. Nullam viverra non ante vel iaculis. Cras venenatis dolor a purus placerat, quis pretium quam varius. Aenean id dolor malesuada, accumsan massa at, ullamcorper dolor. Aliquam at malesuada nisl, sit amet rhoncus elit."
                }
              ],
              "props": {
                "nodeType": "block"
              }
            }
          ]
        }
      }
    },
    {
      id: "4",
      title: "Entreprenuership guide 💡",
      content:
        "\"Sometimes, on Mondays, when servers at A16 are announcing the specials, you can almost feel the excitement at the table when the waiters say 'And of course, since it's Monday ... we have meatballs,'\" says Shelley Lindgren.",
      tags: ["#ideas", "#to-dos", "#morning"],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MQNCo5QousWGZ7ivbyjYb1iXFm8MUM.png",
      category: 'development',
      editorValue: {
        "5de7ca1c-9f9c-4bd1-85ff-2b4dc942d99e": {
          "id": "5de7ca1c-9f9c-4bd1-85ff-2b4dc942d99e",
          "value": [
            {
              "id": "d0e42ed5-bb5b-42a7-a447-ce261ac0dc65",
              "type": "heading-one",
              "props": {
                "nodeType": "block"
              },
              "children": [
                {
                  "text": "Data from Page 4"
                }
              ]
            }
          ],
          "type": "HeadingOne",
          "meta": {
            "order": 0,
            "depth": 0
          }
        },
        "0d0835a9-e620-4bc8-be8b-a4571797b7d4": {
          "id": "0d0835a9-e620-4bc8-be8b-a4571797b7d4",
          "value": [
            {
              "id": "f67f7e02-b0b5-423e-bfa8-3b039340bd0a",
              "type": "paragraph",
              "children": [
                {
                  "text": "Phasellus non dapibus turpis, a semper enim. Duis mollis pulvinar interdum. "
                },
                {
                  "type": "link",
                  "children": [
                    {
                      "text": "Mauris gravida"
                    }
                  ],
                  "props": {
                    "url": "https://www.lipsum.com/feed/html",
                    "target": "_self",
                    "rel": "noopener noreferrer"
                  }
                },
                {
                  "text": ", mauris at auctor eleifend, turpis elit tincidunt est, sit amet ultricies elit elit non velit. Nunc sollicitudin mi non augue iaculis, sed commodo purus finibus. Mauris ornare leo eu neque hendrerit, ac posuere ante auctor. Proin laoreet congue dui vitae suscipit. Ut eu porttitor magna. Duis eleifend porta felis, at ullamcorper justo sodales ut. Donec id sem consectetur, vehicula neque et, vulputate elit. Sed pellentesque malesuada consectetur. Nulla at bibendum nibh."
                }
              ],
              "props": {
                "nodeType": "block"
              }
            }
          ],
          "type": "Paragraph",
          "meta": {
            "order": 2,
            "depth": 0
          }
        },
        "bbb4a818-8d14-45c2-9504-0951bc408a6f": {
          "id": "bbb4a818-8d14-45c2-9504-0951bc408a6f",
          "value": [
            {
              "id": "fc979d50-421d-44ea-b859-535bd83eb4e6",
              "type": "image",
              "props": {
                "src": "https://res.cloudinary.com/ench-app/image/upload/v1721333874/e608ab26-d8fd-44b6-8859-b35abc4b5558_oifyp1_qg7rxk.webp",
                "alt": "cloudinary",
                "srcSet": null,
                "fit": "fill",
                "sizes": {
                  "width": 402,
                  "height": 340
                },
                "nodeType": "void"
              },
              "children": [
                {
                  "text": ""
                }
              ]
            }
          ],
          "type": "Image",
          "meta": {
            "order": 1,
            "depth": 0
          }
        },
        "66ffccdf-cbab-4d49-bb3f-e7297dc79297": {
          "id": "66ffccdf-cbab-4d49-bb3f-e7297dc79297",
          "value": [
            {
              "id": "98d46df3-ce34-40f8-8735-d9922638ba88",
              "type": "paragraph",
              "children": [
                {
                  "text": ""
                }
              ],
              "props": {
                "nodeType": "block"
              }
            }
          ],
          "type": "Paragraph",
          "meta": {
            "order": 3,
            "depth": 0
          }
        }
      }
    },
  ],
}

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Note>) => {
      state.notes = [
        action.payload,
        ...state.notes,
      ]
      state.selectedNote = action.payload
    },
    remove: (state, action: PayloadAction<string>) => {
      state.notes = state.notes.filter((note: Note) => note.id !== action.payload)
    },
    update: (state, action: PayloadAction<Note>) => {
      state.notes.map((note: Note) => {
        if (note.id !== action.payload.id) return note;

        return {...note, ...action.payload};
      })
    },
    setSelectedNote: (state, action: PayloadAction<Note>) => {
      state.selectedNote = action.payload
    },
    openNewNoteForm: (state) => { state.isNewNoteFormOpen = true },
    closeNewNoteForm: (state) => { state.isNewNoteFormOpen = false },
  },
})

// Action creators are generated for each case reducer function
export const { add, remove, update, setSelectedNote, openNewNoteForm, closeNewNoteForm } = notesSlice.actions

export default notesSlice.reducer
