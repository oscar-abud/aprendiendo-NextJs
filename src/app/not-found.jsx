import Link from 'next/link'

function NotFound() {
  return (
    <>
      <div>Error 404</div>
      <Link href="/">Volver al inicio</Link>
    </>
  )
}

export default NotFound