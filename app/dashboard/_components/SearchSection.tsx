import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Search } from 'lucide-react'
import React from 'react'


function SearchSection({onSearchInput}:any) {
  return (
    <div className='p-10 bg-neutral-900 flex flex-col justify-center items-center text-white border-b border-zinc-800'>
    {/* <div className='p-10 bg-gradient-to-br from-orange-400 via-amber-600 to to-orange-600 flex flex-col justify-center items-center text-white border-2 border-zinc-800'> */}
    {/* <div className='p-10 bg-gradient-to-br from-purple-500 via-purple-700 to to-blue-600 flex flex-col justify-center items-center text-white'> */}
       <h2 className='text-3xl max-sm:text-2xl font-bold bg-[radial-gradient(100%_100%_at_top_left,white,white,#f97300)] text-transparent bg-clip-text '>Browse All Templates</h2> 
       <p className='text-neutral-500'>What would you like to create today? </p>
       <div className='w-full  flex  justify-center'>
        <div className='flex gap-2 items-center p-1 border border-zinc-800 rounded-full min-w-xl shadow-sm my-5 lg:min-w-[50%] '>

            <Label>
                <Search className='text-neutral-700'/>
            </Label>
            <Input type='search' className='outline-none focus-visible:ring-0 border-none shadow-none placeholder:text-neutral-500 text-neutral-500' placeholder='Search ...' onChange={(e) => onSearchInput(e.target.value)}/>
        </div>
       </div>
    </div>
  )
}

export default SearchSection