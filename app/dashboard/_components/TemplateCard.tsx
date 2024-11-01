import React from 'react'
import { Template } from './TemplateListSection'
import Image from 'next/image'
import Link from 'next/link'

function TemplateCard(item:Template) {
  return (
    <Link href={'/dashboard/content/' + item?.slug} className={''}>
    
      <div className='p-5 shadow-md rounded-md border bg-white flex flex-col gap-3 cursor-pointer hover:scale-105 duration-300'>
          <Image src={item.icon} alt={item.name} width={50} height={50}/>
          <h2 className='font-medium text-lg'>{item.name}</h2>
          <p className='text-gray-500 line-clamp-2 md:line-clamp-3'>{item.desc}</p>
      </div>
    </Link>
  )
}

export default TemplateCard