"use client"

import { useEffect } from 'react'

function Users() {
  useEffect(() => {
    alert("Funciona Users como cliente")
  }, [])
  return (
    <div>
      <h1>Users</h1>
    </div>
  )
}

export default Users