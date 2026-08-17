import React from 'react'
import Link from "next/link";
import { Roboto } from 'next/font/google';

export const metadata = {
  title: "Mi Tienda oficial",
  description: "Tienda oficial de la reina",
};

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  style: ["italic", "normal"],
  subsets: ["latin"]
})

function TiendaLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <br />
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