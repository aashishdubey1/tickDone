import React from 'react'

import type {TodoItemProps} from '../types/types'

const TodoItem : React.FC<TodoItemProps> = ({todo,onToggle,onDelete}) => {
    return (
        <div className='w-80 bg-slate-600 border-2 border-black rounded-lg shadow-lg relative py-4 px-6 text-white m-20'>
            <input type="checkbox"  className='absolute top-2 right-2   h-4 w-4 rounded'/>
            <h1 className='text-3xl font-semibold'>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button onClick={()=> onDelete(todo.id)} className='border-2 border-black bg-red-700 px-2 py-1 rounded-xl text-sm text-white font-medium'>Delete</button>
        </div>
    )
}

export default TodoItem
