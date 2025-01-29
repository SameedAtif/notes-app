import YooptaEditor, {
  createYooptaEditor,
  YooptaContentValue,
} from '@yoopta/editor';

import Paragraph from '@yoopta/paragraph';
import Blockquote from '@yoopta/blockquote';
import Embed from '@yoopta/embed';
import Image from '@yoopta/image';
import Link from '@yoopta/link';
import Callout from '@yoopta/callout';
import Video from '@yoopta/video';
import File from '@yoopta/file';
import Accordion from '@yoopta/accordion';
import { NumberedList, BulletedList, TodoList } from '@yoopta/lists';
import { Bold, Italic, CodeMark, Underline, Strike, Highlight } from '@yoopta/marks';
import { HeadingOne, HeadingThree, HeadingTwo } from '@yoopta/headings';
import Code from '@yoopta/code';
import Table from '@yoopta/table';
import Divider from '@yoopta/divider';
import ActionMenuList, { DefaultActionMenuRender } from '@yoopta/action-menu-list';
import Toolbar, { DefaultToolbarRender } from '@yoopta/toolbar';
import LinkTool, { DefaultLinkToolRender } from '@yoopta/link-tool';
import { uploadToCloudinary } from '@/lib/cloudinary';
import { useEffect, useMemo, useRef, useState, useCallback } from 'react';
import { extractFirstText } from '@/lib/utils';
import { Note } from '@/interfaces/noteInterface';
import { useDispatch } from 'react-redux';
import { update } from '@/slices/notesSlice';

const defaultEditorState = {
  '9d98408d-b990-4ffc-a1d7-387084291b00': {
    id: '9d98408d-b990-4ffc-a1d7-387084291b00',
    value: [
      {
        id: '0508777e-52a4-4168-87a0-bc7661e57aab',
        type: 'heading-one',
        children: [
          {
            text: "",
          },
        ],
        props: {
          nodeType: 'block',
        },
      },
    ],
    type: 'HeadingOne',
    meta: {
      order: 0,
      depth: 0,
    },
  }
}
const plugins = [
  Paragraph,
  Table,
  Divider.extend({
    elementProps: {
      divider: (props) => ({
        ...props,
        color: '#007aff',
      }),
    },
  }),
  Accordion,
  HeadingOne,
  HeadingTwo,
  HeadingThree,
  Blockquote,
  Callout,
  NumberedList,
  BulletedList,
  TodoList,
  Code,
  Link,
  Embed,
  Image.extend({
    options: {
      async onUpload(file) {
        const data = await uploadToCloudinary(file, 'image');

        return {
          src: "https://www.google.com",
          alt: 'cloudinary',
          sizes: {
            width: data.width,
            height: data.height,
          },
        };
      },
    },
  }),
  Video.extend({
    options: {
      onUpload: async (file) => {
        const data = await uploadToCloudinary(file, 'video');
        return {
          src: data.secure_url,
          alt: 'cloudinary',
          sizes: {
            width: data.width,
            height: data.height,
          },
        };
      },
      onUploadPoster: async (file) => {
        const image = await uploadToCloudinary(file, 'image');
        return image.secure_url;
      },
    },
  }),
  File.extend({
    options: {
      onUpload: async (file) => {
        const response = await uploadToCloudinary(file, 'auto');
        return { src: response.secure_url, format: response.format, name: response.name, size: response.bytes };
      },
    },
  }),
];

const TOOLS = {
  ActionMenu: {
    render: DefaultActionMenuRender,
    tool: ActionMenuList,
  },
  Toolbar: {
    render: DefaultToolbarRender,
    tool: Toolbar,
  },
  LinkTool: {
    render: DefaultLinkToolRender,
    tool: LinkTool,
  },
};

const MARKS = [Bold, Italic, CodeMark, Underline, Strike, Highlight];

function WithBaseFullSetup({ note }:{note?: Note} ) {
  const editor = useMemo(() => createYooptaEditor(), []);
  const selectionRef = useRef(null);
  const dispatch = useDispatch();
  const [value, setValue] = useState<YooptaContentValue>(
    note?.editorValue || defaultEditorState
  );

  const onChange = useCallback((newValue: YooptaContentValue) => {
    if(note) {
      note.title = extractFirstText(newValue);
      note.editorValue = newValue;
      dispatch(update(note))
    }
    setValue(newValue);
  }, [dispatch, note]);

  useEffect(() => {
    if(note) {
      const newValue = note?.editorValue;
      editor.setEditorValue(newValue || null);
    }
  }, [editor, note, value])

  return (
    <div
      className=""
      ref={selectionRef}
    >
      <YooptaEditor
        editor={editor}
        plugins={plugins}
        tools={TOOLS}
        marks={MARKS}
        selectionBoxRoot={selectionRef}
        value={value}
        onChange={onChange}
        autoFocus
      />
    </div>
  );
}

export default WithBaseFullSetup;
