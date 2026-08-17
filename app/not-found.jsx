import Link from 'next/link'
import React from 'react'

function NotFound() {
  return (
    <>
      <div>Error 404</div>
      <Link href="/">Volver al inicio</Link>
    </>
  )
}

export default NotFound