import TodoItem from "./components/TodoItem"
import { Todo } from "./types/types"

function App() {

    const todo : Todo = {
        id:'1',
        title:"Go to the gym",
        description : "Go Gym daily at 5",
        complete : false,
        createdAt : new Date(),
    }

  return (
    <>
        <TodoItem todo={todo} onDelete={()=>{}} onToggle={()=>{}}/>
    </>
  )
}

export default App
