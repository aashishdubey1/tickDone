import TodoItem from "./components/TodoItem"
import TodoList from "./components/TodoList"
import { Todo } from "./types/types"

function App() {

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
        <TodoList todos={todo} onDelete={()=>{}} onToggle={()=>{}}/>
    </>
  )
}

export default App
