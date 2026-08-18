import Todos from '@/src/components/Todos'
import "@/src/app/todo/todos.css"

export const metadata = {
  title: "Page of todos",
  description: "Page of todos and display information of todo list"
}

const loadTodos = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos")
  const data = await res.json()
  await new Promise((resolve) => setTimeout(resolve, 3000)) // 3000 = 3 segundos
  return data
}

// SSR (Con React server component)
async function Todo() {
  const todos = await loadTodos()
  return (
    <div>
      <h1>Todo List</h1>

      <div className='todos'>
        {
          todos.map(todo => (
            <Todos todos={todo} key={todo.id} />
          ))    
        }
      </div>
    </div>
  )
}

export default Todo