import React from 'react'
import { HeaderProps } from '../types/types'

const Header : React.FC<HeaderProps> = ({firstname,onToggle}) => {
  return (
    <div className='shadow-lg h-14 sm:h-20'> 
        <header className='flex items-center justify-between py-3 px-5 sm:px-12'>
            <h1 className='text-lg sm:text-2xl font-bold'>TICKDONE</h1>
            <button className='hidden sm:block border-2 border-black rounded-lg px-6 py-2 ' onClick={()=>onToggle(true)}>Create Task</button>
            <nav className='flex gap-5 items-center'>
                <h1 className='hidden sm:block text-lg font-medium'>Hey, {firstname}</h1>
                <div className='h-8 w-8 sm:h-12 sm:w-12 rounded-full flex justify-center items-center bg-slate-400 text-sm sm:text-lg font-bold'>{firstname[0]}</div>
            </nav>
        </header>
    </div>
  )
}

export default Header