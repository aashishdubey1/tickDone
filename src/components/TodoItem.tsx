import React from 'react'

import type {TodoItemProps} from '../types/types'

const TodoItem : React.FC<TodoItemProps> = ({todo,onToggle,onDelete}) => {
    return (
        <div className={`w-80 h-28 lg:h-40 lg:rounded-lg bg-teal-500 ${todo.complete?"bg-teal-700":""} flex justify-between rounded py-4 pl-6 pr-4 text-white`}>
            <div className='w-[60%] flex flex-col text-pretty'>
                <h1 className={`text-2xl lg:text-4xl font-semibold mb-1 lg:mb-4 truncate ${todo.complete?"line-through":""}`}>{todo.title}</h1>
                <p className='text-sm truncate md:text-xl text-neutral-300 '>{todo.description}</p>
            </div>
            <div className='flex flex-col gap-3 justify-center'>
            <div className='h-10 w-10 bg-green-950 rounded-full p-2' onClick={()=>onToggle(todo.id)}>
                <img src="./iconDone.png" className='h-full w-full ' alt="" />
            </div>
            <div className='h-10 w-10 bg-green-950 rounded-full p-2' onClick={()=>onDelete(todo.id)}>
                <img src="./iconTrash.png" className='h-full w-full ' alt="" />
            </div>
            </div>
            
        </div>  
    )
}

export default TodoItem

{/* <button onClick={()=> onDelete(todo.id)} className='border-2 border-black bg-red-700 px-2 py-1 rounded-xl text-sm text-white font-medium my-3'>Delete</button> */}