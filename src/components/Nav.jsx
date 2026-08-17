import Link from "next/link";

export function Nav() {
  return(
    <nav>
      <Link href='/'>Home</Link> <br />
      <Link href='/about'>About</Link> <br />
      <Link href='/posts'>Posts</Link> <br />
      <Link href='/user'>Users</Link> <br />
      <Link href='/todo'>Todos</Link> <br />
      <Link href='/tienda'>Tienda</Link> <br />
    </nav>
  )
}