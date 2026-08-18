"use client"

import Link from "next/link"
// import { useParams, useRouter } from "next/navigation"

// CSR
function Todos({ todos }) {
  // const params = useParams()
  // const router = useRouter()

  return (
    <div
      style={{
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: "center",
        border: '1px solid var(--white-color)',
        borderRadius: '8px',
        gap: '10px',
        padding: '1rem'
      }}
    >
      <h3>user Id: {todos.userId} | {todos.title}</h3>
      <p>{todos.completed ? "Completado": "Por hacer"}</p>

      {/* {params.PostId && (
        <button onClick={() => router.back()}>Volver</button>
      )} */}

      <div
       style={{ display: 'flex', justifyContent: 'space-around' }}
      >
        <button onClick={() => alert("Saludando")}>Saludar</button>

        <Link href={`/todo/${todos.id}`}>
          <button>Ver todo</button>
        </Link>
      </div>
    </div>
  )
}

export default Todos