'use client'
import React from 'react'
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { useTheme } from 'next-themes';

const Darkmode = () => {
    const {systemTheme,theme, setTheme}=useTheme();
    const currentTheme = theme === "system" ? systemTheme : theme
  return (
    <>
    {currentTheme === 'dark' ? <MdLightMode onClick={()=> setTheme('light')} className='cursor-pointer hover:text-yellow-400' /> : <MdDarkMode onClick={()=> setTheme('dark')} className='cursor-pointer hover:text-yellow-400'/>}
    </>
  )
}

export default Darkmode
