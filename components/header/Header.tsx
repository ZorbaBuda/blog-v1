'use client'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
// import Logo from '@/public/logo.svg'
import Link from 'next/link'
// import ThemeSwitch from './ThemeSwitch'
import React, {useState, useEffect} from 'react'
import ThemeSwitcher from '../ThemeSwitcher'

function Header()  {


  return (
    <header className={` w-full mx-auto  border-y-[1px]  uppercase
    border-[#383A3C] sticky
    dark:bg-[#121212] dark:text-white
    text-black bg-[#EEEEEE]
    flex justify-center
       `}>
      <nav className='mx-auto    flex  items-center justify-between
   lg:h-16  h-auto   py-3  xl:px-0 px-2 lg:px-5'>
     
      <div className="flex justify-center uppercase py-7  space-x-8 ">
       
        {headerNavLinks 
          .map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className=" font-medium text-black dark:text-white"
            >
              {link.title}
            </Link>
          ))}
      
      </div>
      <div className="ml-10">
     
      <ThemeSwitcher className="" />
      </div>
      </nav>
    </header>
  )
}

export default Header
