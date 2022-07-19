import React from 'react'
import { MenuIcon, XIcon } from '@heroicons/react/solid'

export default function Navbar() {
  return (
    <div className='w-screen h-[80px] z-10 bg-[#0A192F] fixed drop-shadow-md '>
      <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className='flex justify-between items-center'>
          <h1 className='font-2xl font-bold text-[#c4c4c4]  ml-10 sm:text-3xl'>Sil<span>ikhe</span>.</h1>
        </div>
        <div className='hidden md:flex pr-10'>
          <ul className='hidden md:flex pr-5  '>
            <li><span>01.</span> About</li>
            <li><span>02.</span> Experience</li>
            <li><span>03.</span> Work </li>
            <li><span>04.</span> Contract</li>
          </ul>
          <div className='md:hidden'>
            <MenuIcon class="h-5 w-5 text-black-500" />
          </div>
          <div className='flex justify-between items-center'>
            <button className=''>Resume</button>
          </div>
         
        </div>
      </div>
    </div>
  )
}
