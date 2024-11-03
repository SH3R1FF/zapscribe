import React, { useRef, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import Showdown from 'showdown';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const converter = new Showdown.Converter();

interface Props {
  aiOutput: string;
}

function OutputSection({ aiOutput }: Props) {
  const editorRef = useRef<any>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (editorRef.current) {
      // Convert Markdown to HTML and set it as the initial content
      const htmlContent = converter.makeHtml(aiOutput);
      editorRef.current.setContent(htmlContent);
    }
  }, [aiOutput]);

  const handleCopy = () => {
    if (editorRef.current) {
      const htmlContent = editorRef.current.getContent();
      const markdownText = converter.makeMarkdown(htmlContent);

      navigator.clipboard.writeText(markdownText)
        .then(() => {
          toast({
            title: "Success",
            description: "Copied to clipboard!",
          });
        })
        .catch((err) => {
          console.error('Failed to copy text:', err);
          toast({
            title: "Failed",
            description: "Failed to copy text",
          });
        });
    }
  };

  return (
    <div className="bg-neutral-900 shadow-lg border border-zinc-800 rounded-lg">
      <div className="flex justify-between items-center p-5">
        <h2 className="font-medium text-lg bg-[radial-gradient(100%_100%_at_top_left,white,white,#f97300)] text-transparent bg-clip-text">Output</h2>
        <Button onClick={handleCopy} className="bg-orange-500 hover:bg-orange-400 text-neutral-100">
          <Copy />Copy
        </Button>
      </div>
      <Editor
      apiKey='ax0558uf8uzegopw7uydn9lx7ngy5mma5mcx0qsh62x13it0'
        onInit={(evt, editor) => editorRef.current = editor}
        initialValue={converter.makeHtml(aiOutput)}
        init={{
          height: 450,
          menubar: false,
          plugins: 'link image code',
          // toolbar: 'undo redo | formatselect | bold italic | alignleft aligncenter alignright | code',
          toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
          content_style: 'body { font-family:Arial,sans-serif; font-size:14px; background-color: #171717; color: #ffffff; }',
    
        }}
      />
    </div>
  );
}

export default OutputSection;
