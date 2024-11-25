import TodoList from "./components/TodoList"
import Header from "./components/Header"
import Footer from './components/Footer'
import TodoForm from "./components/TodoForm"
import { useState } from "react"
import { Todo } from "./types/types"

function App() {
const [todos,setTodos] = useState<Todo[]>([])
const [visible,setVisible] = useState(false)


function deleteTodo(id:string){
  setTodos((prev)=>prev.filter((todo)=>todo.id!=id))
}

function toggleTodo(id:string){
  setTodos((prev)=>prev.map((todo)=>todo.id===id?{...todo,complete:!todo.complete}:todo))
}


  return (
    <>
      <div className="h-screen w-screen">
          <Header firstname="Aashish" onToggle={setVisible}/>
        <div className="ml-20 mt-7">
          <TodoList todos={todos} onDelete={deleteTodo} onToggle={toggleTodo}/>
        </div>
        {visible && <TodoForm onSubmit={setTodos} onToggle={setVisible}/>}
        <Footer onToggle={setVisible} />
      </div>
    </>
  )
}

export default App
