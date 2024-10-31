import React from 'react'
import SideBar from './_components/SideBar';


const layout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div>

        <div className='md:w-64 hidden md:block fixed '>
            <SideBar />
        </div>
        <div className='md:ml-64'>
      {children}
    </div>
    </div>
    )
}

export default layout
