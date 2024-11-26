import React, { useState } from 'react'
import { Todo, TodoFormProps } from '../types/types'

const TodoForm : React.FC<TodoFormProps> = ({onSubmit ,onToggle}) => {

  const [title,setTitle] = useState('');
  const [description,setDescription] = useState('');

  function handleSubmit(){

    if(!title||!description) return alert("Enter Inputs")
    const todo:Todo = {
      id:`${Math.random()*100}`,
      title,
      description,
      complete:false,
      createdAt:new Date()
    }
    onSubmit((prev:any)=>[...prev,todo])
    setTitle('')
    setDescription('')
    onToggle(false);
    getImgUrl();
  }

const getImgUrl = async ()=>{
  const res = await fetch("https://api.nekosapi.com/v3/images")
  const data = await res.json();
  console.log(data);
}


  return (
   <div className="fixed top-0 left-0 w-full h-screen bg-slate-700/50  text-white py-4 px-6 shadow-lg z-50 flex justify-center items-center" onClick={()=>onToggle(false)}>
     <div className='border-2 border-black rounded-lg w-80 shadow-xl py-5 px-8 bg-neutral-200 text-black relative z-10' onClick={(e)=>e.stopPropagation()}>
      <h1 className='text-3xl font-semibold my-2 text-center'>Create Task</h1>
      <p className='text-sm font-bold mt-3 mb-1'>Title</p>
      <input type="text" value={title} placeholder='Study DSA'  className='py-2 px-5 border-2 border-slate-400 w-full rounded bg-transparent' onChange={(e)=>setTitle(e.target.value)}/>
      <p className='text-sm font-bold mt-3 mb-1'>Description</p>
      <input type="text" value={description} placeholder='Cover Sorting Algo' className='py-2 px-5 border-2 border-slate-400 rounded w-full bg-transparent' onChange={(e)=>setDescription(e.target.value)}/>
      <button className='py-2 px-5 border-2 border-black rounded bg-black text-white outline-none  font-semibold mt-5 w-full' onClick={handleSubmit}>Submit</button>
    </div>
   </div>
  )
}

export default TodoForm
