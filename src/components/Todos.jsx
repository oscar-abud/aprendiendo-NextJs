"use client"

import Link from "next/link"
import { useParams, useRouter } from "next/navigation"

// CSR
function Todos({ todos }) {
  const params = useParams()
  const router = useRouter()

  return (
    <div>
      <h3>user Id: {todos.userId} | {todos.title}</h3>
      <p>{todos.completed ? "Completado": "Por hacer"}</p>

      {params.PostId && (
        <button onClick={() => router.back()}>Volver</button>
      )}

      <button onClick={() => alert("Saludando")}>Saludar</button>

      {!params.PostId && (
        <Link href={`/todo/${todos.id}`}>
          <button>Ver todo</button>
        </Link>
      )}
    </div>
  )
}

export default Todos