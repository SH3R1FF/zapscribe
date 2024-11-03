"use client"

import React from 'react'
import Image from 'next/image'
import { FileClock, Home, Settings, WalletCards } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

function SideNav() {

    const MenuList = [

        {
            name: 'Home',
            icon: Home,
            path: '/dashboard'
        },
        {
            name: 'History',
            icon: FileClock,
            path: '/dashboard/history'
        },
        {
            name: 'Billing',
            icon: WalletCards,
            path: '/dashboard/billing'
        },
        {
            name: 'Settings',
            icon: Settings,
            path: '/dashboard/settings'
        },
    
    ]

    const path = usePathname()



  return (
    <div className='h-screen p-5 shadow-none md:shadow-sm  max-md:border-none border-2 border-zinc-800  bg-neutral-900'>

            <div className='flex justify-center rounded-lg'>
                <Link href="/" className='flex gap-2 items-center py-2'>
                    <Image src={'/logo.svg'} alt='logo' width={32} height={32}/>
                    <span className='font-extrabold text-2xl text-white '>ZAPSCRIBE</span>
                </Link>   
            </div>

        <hr className='my-6 border-1 border-zinc-800'/>

        <div className='mt-3'>
           {MenuList.map((menu, index) => (
                <Link href={menu.path} key={index}>
                    <div className={`flex gap-2 mb-2 p-3 hover:bg-orange-500 hover:text-white rounded-lg cursor-pointer items-center duration-200 ${path == menu.path && 'bg-orange-500 text-neutral-700'}`}>
                        <menu.icon className='h-5 w-5 text-white'/>
                        <h2 className='text-white font-bold'>{menu.name}</h2>
                    </div>
                </Link>
           ))} 
        </div>


    </div>
  )
}

export default SideNav