import React from 'react'
import { TodoListProp } from '../types/types'
import TodoItem from './TodoItem'

const TodoList : React.FC<TodoListProp> = ({todos,onToggle,onDelete}) => {
  return (
    <div className='flex flex-wrap'>
      {todos.map((todo)=><TodoItem key={todo.id} todo={todo} onDelete={onDelete} onToggle={onToggle}/>)}
    </div>
  )
}

export default TodoList
