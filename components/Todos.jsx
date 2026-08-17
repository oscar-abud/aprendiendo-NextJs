"use client"

// CSR
function Todos({ todos }) {
  return (
    <div>
      <h3>user Id: {todos.userId} | {todos.title}</h3>
      <p>{todos.completed ? "Completado": "Por hacer"}</p>
      <button onClick={() => alert("Saludando")}>Saludar</button>
    </div>
  )
}

export default Todos