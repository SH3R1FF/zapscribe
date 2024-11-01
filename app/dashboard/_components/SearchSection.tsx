import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Search } from 'lucide-react'
import React from 'react'


function SearchSection({onSearchInput}:any) {
  return (
    <div className='p-10 bg-gradient-to-br from-purple-500 via-purple-700 to to-blue-600 flex flex-col justify-center items-center text-white'>
       <h2 className='text-3xl font-bold '>Browse All Templates</h2> 
       <p>What would you like to create today? </p>
       <div className='w-full flex justify-center'>
        <div className='flex gap-2 items-center p-2 border rounded-md max-w-lg shadow-sm bg-white my-5 w-[50%]'>

            <Label>
                <Search className='text-primary'/>
            </Label>
            <Input type='search' className='outline-none focus-visible:ring-0 border-none shadow-none placeholder:text-gray-500 text-neutral-600 w-full' placeholder='Search...' onChange={(e) => onSearchInput(e.target.value)}/>
        </div>
       </div>
    </div>
  )
}

export default SearchSection