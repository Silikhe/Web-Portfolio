import React, {useState} from 'react'
import { MenuIcon, XIcon } from '@heroicons/react/solid'

export default function Navbar() {

  const [nav, setNav] = useState(false)

  const hundleClick = () => setNav(!nav)
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

          <div className='flex justify-between items-center'>
            <button className=''>Resume</button>
          </div>

        </div>
        <div className=' md:hidden pr-10' onClick={hundleClick}>
          {!nav ? <MenuIcon className=' w-10 text-[#64FFDA]' /> : <XIcon className=' w-10 text-[#64FFDA]' />}
          
        </div>
      </div>
      <ul className={!nav? 'hidden': 'absolute bg-[#0A192F] w-full px-8'}>
        <li className='border-b  pb-4 borde-[#64ffda]'><span>01.</span> About</li>
        <li className='border-b  pb-4 borde-[#64ffda]'><span>02.</span> Experience</li>
        <li className='border-b  pb-4 borde-[#64ffda]'><span>03.</span> Work </li>
        <li className='border-b  pb-4 borde-[#64ffda]'><span>04.</span> Contract</li>
        <div className='m-4'>
            <button className=''>Resume</button>
          </div>
      </ul>
    </div>
  )
}
