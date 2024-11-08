import Templates from '@/app/(data)/Templates';
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { currentUser } from '@clerk/nextjs/server';
import { desc, eq } from 'drizzle-orm';
import Image from 'next/image';
import React from 'react';
import CopyButton from './_components/CopyButton';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";


export interface HISTORY {
  id: number;
  formData: string;
  aiResponse: string | null;
  templateSlug: string;
  createdBy: string | null;
  createdAt: string | null;
}

async function History() {
  const user = await currentUser();
  const userEmail = user?.primaryEmailAddress?.emailAddress;

  if (!userEmail) {
    return <div>Error: User not found.</div>;
  }

  let HistoryList: HISTORY[] = [];
  try {
    HistoryList = await db
      .select()
      .from(AIOutput)
      .where(eq(AIOutput?.createdBy, userEmail))
      .orderBy(desc(AIOutput.id));
      // console.log(moment(HistoryList[0]?.createdAt).format('DD/MM/YYYY'));
      // console.log(HistoryList[0]?.createdAt ? new Date(HistoryList[0]?.createdAt).toLocaleDateString() : 'Unknown Date')
      
  } catch (error) {
    console.error('Error fetching history:', error);
  }

  const GetTemplateName = (slug: string) => {
    const template = Templates?.find((item) => item.slug === slug);
    return template || { name: 'Unknown', icon: '/logo.svg' };
  };

  return (
    <div className="m-5 p-5 border border-zinc-800 rounded-lg bg-neutral-900 text-[8px] md:text-base">
      <Table className='bg-neutral-900'>
        <TableCaption>A list of your recent generated responses.</TableCaption>
        <TableHeader>
          <TableRow className='text-white'>
            <TableHead className="w-[150px]">Template</TableHead>
            <TableHead className="w-[400px] max-w-[400px]">Response</TableHead>
            <TableHead className="w-[120px]">Date</TableHead>
            <TableHead className="w-[80px]">Words</TableHead>
            <TableHead className="text-right w-[60px]">Copy</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className='text-neutral-500'>
          {HistoryList.map((item: HISTORY, index: number) => (
            <TableRow key={index} className=''>
              <TableCell className="">
                <div className='flex items-center gap-4 pr-4'>

                  <Image
                    src={GetTemplateName(item.templateSlug)?.icon || '/logo.svg'}
                    alt="Template Icon"
                    width={25}
                    height={25}
                    className="max-sm:h-[16px] max-sm:w-[16px] "
                    />
                  {GetTemplateName(item.templateSlug)?.name}
                  </div>
              </TableCell>

              <TableCell className="line-clamp-3 p-0 max-w-[300px]">
                <div className='p-1'>
                  {item.aiResponse?.toString() ?? 'No Response'}
                </div>
              </TableCell>
              {/* <TableCell>{item.createdAt ? moment(item.createdAt).format('DD/MM/YYYY') : 'Unknown Date'} </TableCell> */}
              {/* <TableCell>{item.createdAt ? moment(item.createdAt).format("MMM Do YY ") : 'Unknown Date'}</TableCell> */}
              {/* <TableCell>{item.createdAt ? moment(item.createdAt).format("MMM Do YY") : 'Unknown Date'}</TableCell> */}
              {/* <TableCell>{item.createdAt ? new Date(item?.createdAt). toLocaleDateString() : 'Unknown Date'}</TableCell> */}
              <TableCell>{item.createdAt}</TableCell>
              
              <TableCell>{item.aiResponse?.length || 0}</TableCell>
              <TableCell className="text-right ">
                <CopyButton textToCopy={item.aiResponse ?? ''} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default History;