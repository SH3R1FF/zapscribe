import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Editor } from "@tinymce/tinymce-react";

interface Props {
  aiOutput: string;
}

function OutputSection({ aiOutput }: Props) {
  const editorRef = useRef<any>(null);
  const { toast } = useToast();

  // Use effect to set content when aiOutput changes
  useEffect(() => {
    if (editorRef.current && typeof aiOutput === 'string') {
      editorRef.current.setContent(aiOutput); // Use setContent for TinyMCE
    }
  }, [aiOutput]);

  const handleCopy = () => {
    if (editorRef.current) {
      const content = editorRef.current.getContent(); // Use getContent for TinyMCE
      navigator.clipboard.writeText(content)
        .then(() => {
          toast({
            title: "Success",
            description: "Copied to clipboard!",
          });
        })
        .catch((err) => {
          console.error('Failed to copy text: ', err);
          toast({
            title: "Failed",
            description: "Failed to copy text",
          });
        });
    }
  };

  return (
    <div className='bg-neutral-900 shadow-lg border border-zinc-800 rounded-lg'>
      <div className='flex justify-between items-center p-5'>
        <h2 className='font-medium text-lg bg-[radial-gradient(100%_100%_at_top_left,white,white,#f97300)] text-transparent bg-clip-text '>Output</h2>
        <Button onClick={handleCopy} className='bg-orange-500 hover:bg-amber-700 text-neutral-800'>
          <Copy />Copy
        </Button>
      </div>
      <Editor
        apiKey="i16nbk44ic2u5ppz5g2io7jvltyf2alfvizik2urz4f071ge" // Replace with your TinyMCE API key
        onInit={(evt, editor) => editorRef.current = editor} // Set the editor instance on init
        initialValue="Hello, World!"
        init={{
          height: 450,
          menubar: false,
          plugins: 'lists link image charmap preview anchor searchreplace visualblocks code',
          toolbar: 'undo redo | styleselect | bold italic | alignleft aligncenter alignright | bullist numlist outdent indent | link image',
          color_default_background: '#202020',
          
        }}
        
        
      />
    </div>
  );
}

export default OutputSection;
