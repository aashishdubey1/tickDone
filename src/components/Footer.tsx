import React from 'react'
import { FooterProps } from '../types/types'

const Footer :React.FC<FooterProps> = ({onToggle}) => {
  return (
    <div className='h-16 sm:hidden w-full bg-black absolute bottom-0 flex justify-center items-center py-3'>
        <button className='border-none bg-white rounded-xl px-6 py-2  font-bold' onClick={()=>onToggle(true)}>Create Task</button>
    </div>
  )
}

export default Footer