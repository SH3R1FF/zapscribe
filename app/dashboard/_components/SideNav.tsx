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
    <div className='h-screen p-5  shadow-none md:shadow-sm  border-none md:border  bg-neutral-900'>

            <div className='flex justify-center rounded-lg'>
                <Link href="/" className='flex gap-2 items-center p-2'>
                    <Image src={'/logo.svg'} alt='logo' width={32} height={32}/>
                    <span className='font-extrabold text-2xl text-white '>ZAPSCRIBE</span>
                </Link>   
            </div>

        <hr className='my-6 border'/>

        <div className='mt-3'>
           {MenuList.map((menu, index) => (
                <Link href={menu.path} key={index}>
                    <div className={`flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer items-center duration-200 ${path == menu.path && 'bg-primary text-white'}`}>
                        <menu.icon className='h-6 w-6'/>
                        <h2>{menu.name}</h2>
                    </div>
                </Link>
           ))} 
        </div>


    </div>
  )
}

export default SideNav