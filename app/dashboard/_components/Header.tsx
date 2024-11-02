import { Search } from 'lucide-react'
import React from 'react'
import { Input } from "@/components/ui/input"
import { Label } from '@/components/ui/label'
import { SignedIn, UserButton } from '@clerk/nextjs'
import MobileNav from './MobileNav'
import Link from 'next/link'
import Image from 'next/image'

function Header() {
  return (
    <div className='p-5 shadow-sm border border-zinc-800 flex justify-between items-center bg-neutral-900'>
            <div className='flex md:hidden justify-center rounded-lg  '>
                <Link href="/" className='flex gap-2 items-center p-2'>
                    <Image src={'/logo.svg'} alt='logo' width={32} height={32}/>
                    <span className='font-extrabold text-2xl text-white '>ZAPSCRIBE</span>
                </Link>  
            </div> 
            <p className='text-neutral-900'>Search</p>
            <div className='flex gap-2 items-center'>
                <h2 className='bg-orange-300 p-2 rounded-full text-xs text-neutral-900 text-bold px-2 max-sm:hidden'>
                    Join Membership at just for $9.99 ✨
                </h2>
                <SignedIn>
                    <UserButton 
                    // afterSignOutUrl="/"            
                    />
                    <MobileNav/>
                </SignedIn>
            </div>
    </div>
  )
}

export default Header