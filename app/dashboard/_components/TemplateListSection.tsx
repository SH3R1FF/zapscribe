"use client"

import React, { useEffect } from 'react'
import Templates from '@/app/(data)/Templates'
import TemplateCard from './TemplateCard';
import { Sandwich } from 'lucide-react';

export interface Template {
    name: string;
    desc: string;
    icon: string;
    category: string;
    slug: string;
    aiPrompt: string;
    form?: FORM[];
}

export interface FORM {
    label: string;
    field: string;
    name: string;
    required?: boolean
}

function TemplateListSection({userSearchInput}:any) {

  const [templateList, setTemplateList] = React.useState<Template[]>(Templates)

  useEffect(() => {

    if (userSearchInput) {

      const filterData = Templates.filter((item:Template) => item.name.toLowerCase().includes(userSearchInput.toLowerCase()))

      setTemplateList(filterData)
    } else {
      setTemplateList(Templates)
    }

  }, [userSearchInput])

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 p-10 bg-neutral-900'>
    {templateList && templateList.length > 0 ? 
          templateList.map((item:Template, index:number) => (
                <TemplateCard {...item} key={index}/>
          )) 
          :<div className=''>
            <span className='text-2xl flex justify-center items-center'>
              😔
              <h1 className='font-bold  text-neutral-700'>No Template Found!</h1>
            </span>
            <p className='text-center text-neutral-500'>Try with different keywords</p>
          </div> 

          }
          
    </div>
  )
}

export default TemplateListSection