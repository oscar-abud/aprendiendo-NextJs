import TodoPerUser from "@/src/components/TodoPerUser"
import Todos from "@/src/components/Todos"
import Users from "@/src/components/Users"

const loadTodo = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
  const data = await res.json()
  await new Promise((resolve) => setTimeout(resolve, 1000)) // 1000 = 1 segundos
  return data
}

const loadUser = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  const data = await res.json()
  return data
}

export default async function Page({ params }) {
  const { PostId } = await params

  const todo = await loadTodo(PostId)
  const user = await loadUser(todo.userId)

  console.log(user)

  return (
    <div>
      <h1>Todo</h1>
      <TodoPerUser todo={todo} user={user} key={todo.id} />
    </div>
  )
}