import React from 'react'
import { FooterProps } from '../types/types'

const Footer :React.FC<FooterProps> = ({onToggle}) => {
  return (
    <div className='sm:hidden w-full bg-black border-2 border-white absolute bottom-0 flex justify-center items-center py-3 px-2 '>
        <button className='border-none bg-white rounded-xl px-6 py-2  font-bold' onClick={()=>onToggle(true)}>Create Task</button>
    </div>
  )
}

export default Footer