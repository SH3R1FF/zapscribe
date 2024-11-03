import { ChevronRight, Search } from 'lucide-react'
import React from 'react'
import { Input } from "@/components/ui/input"
import { Label } from '@/components/ui/label'
import { SignedIn, UserButton } from '@clerk/nextjs'
import MobileNav from './MobileNav'
import Link from 'next/link'
import Image from 'next/image'

function Header() {
  return (
    <div className='max-sm:p-5 py-7 px-5 shadow-sm border-b border-zinc-800 flex justify-between items-center bg-neutral-900'>
            <div className='flex md:hidden justify-center rounded-lg'>
                <Link href="/" className='flex gap-2 items-center p-2'>
                    <Image src={'/logo.svg'} alt='logo' width={32} height={32} className="max-sm:w-[25px] max-sm:h-[25px]"/>
                    <span className='font-extrabold text-xl md:text-2xl text-white '>ZAPSCRIBE</span>
                </Link>  
            </div> 
            <p className='text-neutral-900'>Search</p>
            <div className='flex gap-4 items-center'>
                <Link href="/dashboard/billing" className='bg-orange-200 p-2 rounded-full text-xs text-neutral-900 font-semibold max-sm:hidden flex items-center'>
                    Join Membership at just for $9.99 <ChevronRight className='h-4 w-4 '/>
                </Link>
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