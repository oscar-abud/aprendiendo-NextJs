"use client"

import React from 'react'
import { useState } from 'react'

function Computadores() {
  const [number, setNumber] = useState(0)
  const [follow, setFollow] = useState(false)

  return (
    <>
      <h1>page Computadores</h1>
      <p>{number}</p>
      <button onClick={() => setNumber(number + 1)}>Sumar</button> <br />
      <button onClick={() => setFollow(!follow)}>{follow ? "Siguiendo" : "Seguir"}</button>
      
    </>
  )
}

export default Computadores