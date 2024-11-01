// CopyButton.tsx
'use client';

import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';
import React from 'react';

interface CopyButtonProps {
  textToCopy: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ textToCopy }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(textToCopy).then(() => {

    toast({
        title: "Success",
        description: "Copied to clipboard!",
      })

    }).catch((err) => {
        console.error('Failed to copy text: ', err);
        toast({
          title: "Failed",
          description: "Failed to copy text",
        })
      });
  };

  return (
    <Button variant="ghost" className="text-primary" onClick={copyToClipboard}>
      Copy
    </Button>
  );
};

export default CopyButton;
