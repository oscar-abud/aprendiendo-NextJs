import React from 'react'
import Link from "next/link";

export const metadata = {
  title: "Mi Tienda oficial",
  description: "Tienda oficial de la reina",
};

function TiendaLayout({ children }) {
  return (
    <html lang="en">
      <body>
        Sub-Categorias
        <header>
          <Link href='/tienda/computadores'>Computadores</Link> <br />
        </header>
        {children}
        </body>
    </html>
  );
}


export default TiendaLayout