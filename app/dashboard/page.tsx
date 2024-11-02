'use client'

import React from 'react'
import SearchSection from './_components/SearchSection'
import TemplateListSection from './_components/TemplateListSection'

function Dashboard() {

  const [userSearchInput, setUserSearchInput] = React.useState<string>('')

  return (
    <div className='bg-neutral-900'>
      <SearchSection onSearchInput={(value:string) => setUserSearchInput(value)}/>

      <TemplateListSection userSearchInput={userSearchInput}/>
    </div>
  )
}

export default Dashboard