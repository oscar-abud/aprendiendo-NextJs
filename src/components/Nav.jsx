"use client"

import Link from "next/link";
import "./nav.css"
import { usePathname } from "next/navigation";

export function Nav() {
  const pathname = usePathname();

  const links = [
    { href: "/about", label: "About" },
    { href: "/posts", label: "Posts" },
    { href: "/user", label: "Users" },
    { href: "/todo", label: "Todos" },
    { href: "/tienda", label: "Tienda" },
  ]

  return(
    <nav>
      <div>
        <Link className={pathname === "/" ? "active" : ""} href='/'>Home</Link>
      </div>
      <div className="links">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={pathname === link.href ? "active" : ""}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}