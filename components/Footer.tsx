import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

function Footer() {
  return (
    
        <section className='h-12 flex flex-col justify-center items-center p-8 gap-x-2 gap-y-4 text-sm mt-10  border-t-2 border-zinc-800'>

        {/* <hr className='bg-neutral-400 ' /> */}
        
        <div className='flex justify-center items-center gap-x-2 '>
            <p className='text-white'>

                Designed and Developed By 
            </p>
            
            <Link target="_blank" href="https://twitter.com/sheriffign" rel="noreferrer">
                <div className='text-sm flex gap-x-2 text-orange-400 font-medium justify-center items-center 
                outline-none transition-transform duration-400 ease-in-out hover:-translate-y-1 focus:ring-2 focus:ring-white/20 focus:ring-offset-4
                focus:ring-offset-black 
                '>
                    <Image src="https://pbs.twimg.com/profile_images/1757030393558061056/GVDD2GeM_400x400.jpg" alt="Himanshu" width={20} height={20} className='h-5 w-5 rounded-full ' />
                    Himanshu
                </div>
            </Link>
        </div>
        </section>
  )
}

export default Footer