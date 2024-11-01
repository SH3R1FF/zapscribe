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
    <div className='p-5 shadow-sm border-2 border-zinc-800 flex justify-between items-center bg-neutral-900'>
        {/* <div className='flex gap-2 items-center p-2 border rounded-md max-w-lg shadow-sm bg-white'>
            <Label>
                <Search className='text-primary'/>
                </Label>
                <Input type='search' className='outline-none focus-visible:ring-0 border-none shadow-none' placeholder='Search...'/>
                </div> */}
            <div className='flex justify-center rounded-lg'>
                <Link href="/" className='flex gap-2 items-center p-2'>
                    <Image src={'/logo.svg'} alt='logo' width={32} height={32}/>
                    <span className='font-extrabold text-2xl text-white '>ZAPSCRIBE</span>
                </Link>   
            </div>
        
            <div className='flex gap-2 items-center'>
                <h2 className='bg-primary p-2 rounded-full text-xs text-white px-2 max-sm:hidden'>
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