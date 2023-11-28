'use client'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
// import Logo from '@/public/logo.svg'
import Link from 'next/link'
// import ThemeSwitch from './ThemeSwitch'
import React, {useState, useEffect} from 'react'

function Header()  {


  return (
    <header className={`sticky   bg-[#161616] `}>

     
      <div className="flex justify-center uppercase py-7  space-x-8 ">
       
        {headerNavLinks 
          .map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className=" font-medium text-white dark:text-white"
            >
              {link.title}
            </Link>
          ))}
      
      </div>
      
    </header>
  )
}

export default Header
