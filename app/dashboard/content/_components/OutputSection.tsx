import React, { useEffect, useRef } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Props {
  aiOutput: string;
}

function OutputSection({ aiOutput }: Props) { // Correctly destructure the props

  const editorRef = useRef<any>(null);

  useEffect(() => {
    if (typeof aiOutput === 'string') { // Ensure aiOutput is a string
      const editorInstance = editorRef.current.getInstance();
      editorInstance.setMarkdown(aiOutput);
    }
  }, [aiOutput]);

  const { toast } = useToast()


  const handleCopy = () => {
    const editorInstance = editorRef.current.getInstance();
    const markdownText = editorInstance.getMarkdown();

    navigator.clipboard.writeText(markdownText)
      .then(() => {
        
        toast({
          title: "Success",
          description: "Copied to clipboard!",
        })
      })
      .catch((err) => {
        console.error('Failed to copy text: ', err);
        toast({
          title: "Failed",
          description: "Failed to copy text",
        })
      });
  }

  return (
    <div className='bg-neutral-900 shadow-lg border border-zinc-800 rounded-lg'>
      <div className='flex justify-between items-center p-5'>
        <h2 className='font-medium text-lg bg-[radial-gradient(100%_100%_at_top_left,white,white,#f97300)] text-transparent bg-clip-text '>Output</h2>
        <Button onClick={handleCopy} className='bg-orange-500 hover:bg-amber-700 text-neutral-800'><Copy />Copy</Button>
      </div>
      <Editor
        ref={editorRef}
        initialValue="Hello, World!"
        height="450px"
        // initialEditType="markdown"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        onChange={() => console.log(editorRef.current.getInstance().getMarkdown())}
    
      />
    </div>
  );
}

export default OutputSection;
