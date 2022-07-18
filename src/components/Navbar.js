import React from 'react'
import { MenuIcon, XIcon } from '@heroicons/react/solid'

export default function Navbar() {
  return (
    <div className='w-screen h-[80px] z-10 bg-white fixed drop-shadow-sm '>
      <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className='flex justify-between items-center'>
          <h1 className='font-2xl font-bold  ml-10 sm:text-3xl'>Silikhe.</h1>

        </div>
        <div className='hidden md:flex pr-10'>
          <ul className='hidden md:flex pr-5  '>
            <li>01. About</li>
            <li>01. Experience</li>
            <li>01. Work </li>
            <li>01. Contract</li>
          </ul>
          <div className='flex justify-between items-center'>
            <button className=''>Resume</button>
          </div>
        </div>
      </div>
    </div>
  )
}
