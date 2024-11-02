import React, { useEffect } from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Button } from '@/components/ui/button';
import { types } from 'util';
import TextAlign from '@tiptap/extension-text-align';
import Toolbar from '@/components/Toolbar';

interface Props {
  aiOutput: string;
}

const OutputSection = ({ aiOutput }: Props) => {
  // Initialize the editor with the StarterKit extension and empty content.
  const editor = useEditor({
    extensions: [
      StarterKit.configure(),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),


    ],
    content: 'Write your content here...',
    editorProps:{
      attributes: {
        class: 'rounded-md outline-none border-zinc-800 min-h-[450px] p-4 '
      }
    },
  });

  // Update the editor content whenever `aiOutput` changes.
  useEffect(() => {
    if (editor && typeof aiOutput === 'string') {
      editor.commands.setContent(aiOutput);
    }
  }, [aiOutput, editor]);

  const handleCopy = () => {
    if (editor) {
      const markdownText = editor.getText(); // Get editor's text content
      navigator.clipboard.writeText(markdownText).then(() => {
        alert('Copied to clipboard!');
      }).catch((err) => {
        console.error('Failed to copy text: ', err);
        alert('Failed to copy text');
      });
    }
  };

  return (
    <div className='bg-neutral-900 shadow-lg border border-zinc-800 rounded-lg'>
      <div className='flex justify-between items-center p-5'>
        <h2 className='font-medium text-lg bg-[radial-gradient(100%_100%_at_top_left,white,white,#f97300)] text-transparent bg-clip-text '>Output</h2>
        <Button onClick={handleCopy} className='bg-orange-500 hover:bg-amber-700 text-neutral-800'>Copy</Button>
      </div>
      <Toolbar editor={editor} />
      <EditorContent editor={editor} className="tiptap-editor text-white" />
    </div>
  );
}

export default OutputSection;
function configure(): import("@tiptap/core").AnyExtension {
  throw new Error('Function not implemented.');
}

