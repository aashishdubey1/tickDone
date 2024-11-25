import TodoList from "./components/TodoList"
import { Todo } from "./types/types"
import Header from "./components/Header"
import TodoForm from "./components/TodoForm"
import { useState } from "react"

function App() {

  const [visible,setVisible] = useState(false)

    const todo : Todo[] = [{
        id:'1',
        title:"Go to the gym",
        description : "Go Gym daily at 5",
        complete : false,
        createdAt : new Date(),
    },
    {
      id:'1',
      title:"Go to the gym",
      description : "Go Gym daily at 5",
      complete : false,
      createdAt : new Date(),
  },
  {
    id:'1',
    title:"Go to the gym Go to the gym Go to the gym Go to the gym Go to the gym",
    description : "Go Gym daily at 5",
    complete : false,
    createdAt : new Date(),
},
{
  id:'1',
  title:"Go to the gym Go to the gym ",
  description : "Go Gym daily at 5",
  complete : false,
  createdAt : new Date(),
},
{
  id:'1',
  title:"Go to the gym Go to the gym Go to the gym Go to the gymGo to the gym",
  description : "Go Gym daily at 5",
  complete : false,
  createdAt : new Date(),
}]

  return (
    <>
      <div>
          <Header firstname="Aashish" onToggle={setVisible}/>
        <div className="ml-20 mt-7">
          <TodoList todos={todo} onDelete={()=>{}} onToggle={()=>{}}/>
        </div>
        {visible && <TodoForm onSubmit={()=>{}} onToggle={setVisible}/>}
      </div>
        
        
    </>
  )
}

export default App
