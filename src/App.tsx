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
      <div className="flex flex-col h-dvh w-dvw bg-mainBg">
        <Header firstname="Aashish" onToggle={setVisible} />  
        <div className="h-[calc(100%-7rem)] px-5 pt-5 overflow-y-auto grid gap-5 grid-cols-1 auto-rows-auto justify-center sm:grid-cols-2 lg:grid-cols-4 md:auto-cols-auto md:auto-rows-fr">  
          <TodoList onDelete={deleteTodo} onToggle={toggleTodo} todos={todos} />
        </div>
        {visible && <TodoForm onSubmit={setTodos} onToggle={setVisible} />}  
        <Footer onToggle={setVisible}/>
      </div>
    </>
  )
}

export default App


{/* <div className="min-h-screen w-screen">
<Header firstname="Aashish" onToggle={setVisible}/>
<div className="h-[80%] overflow-y-auto flex flex-col justify-start sm:flex-row sm:flex-wrap w-full items-center ">
<TodoList todos={todos} onDelete={deleteTodo} onToggle={toggleTodo}/>
</div>
<Footer onToggle={setVisible} />
{visible && <TodoForm onSubmit={setTodos} onToggle={setVisible}/>}
</div> */}