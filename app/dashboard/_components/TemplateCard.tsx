import React from 'react'
import { Template } from './TemplateListSection'
import Image from 'next/image'
import Link from 'next/link'

function TemplateCard(item:Template) {
  return (
    <Link href={'/dashboard/content/' + item?.slug} className={''}>
    
      <div className='p-5 shadow-md rounded-md  bg-neutral-900 border-2 border-zinc-800 flex flex-col gap-3 cursor-pointer hover:scale-105 duration-300 hover:bg-[#202020]'>
        <div className='flex items-center gap-3'>
          <Image src={item.icon} alt={item.name} width={45} height={45} className='max-sm:w-[30px] max-sm:h-[30px]'/>
          <h2 className='font-medium text-lg text-white max-sm:text-xs'>{item.name}</h2>
        </div>
          <p className='text-neutral-600 line-clamp-2 md:line-clamp-3 '>{item.desc}</p>
      </div>
    </Link>
  )
}

export default TemplateCard