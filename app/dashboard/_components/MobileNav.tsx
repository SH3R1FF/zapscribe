import React from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { MenuIcon } from 'lucide-react'
import SideNav from './SideNav'
  


function MobileNav() {
  return (
    <div className='md:hidden block'>
        <Sheet>
        <SheetTrigger><MenuIcon/></SheetTrigger>
        <SheetContent>
            <SheetHeader>
            <SheetTitle hidden>Are you absolutely sure?</SheetTitle>
            <SheetDescription hidden>
                This action cannot be undone. This will permanently delete your account
                and remove your data from our servers.
            </SheetDescription>

            {/* SideNav */}
           
            <SideNav/>
          
            </SheetHeader>
        </SheetContent>
        </Sheet>

    </div>
  )
}

export default MobileNav