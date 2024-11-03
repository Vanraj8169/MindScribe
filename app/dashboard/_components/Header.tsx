import { Search } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <div className='p-5 shadow-sm border-b-2  bg-white flex justify-between items-center'>
      <div className='flex gap-2 items-center p-2 border rounded-md max-w-md bg-white'>
        <Search />
        <input type='text' placeholder='Search' className='outline-none'/>
      </div>
      <div>
        <h2 className='bg-yellow-300 p-1 rounded-full text-xs font-bold'>
          🔥 Join Membership for just $9/Month
        </h2>
      </div>
    </div>
  )
}

export default Header
