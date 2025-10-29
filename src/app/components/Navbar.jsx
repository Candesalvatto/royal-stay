'use client'

import React, {useState}from 'react'
import { inter } from '../layout';
import style from '@/app/home.module.css'
import Image from "next/image";
import Link from "next/link";
import Button from './Button';
import { usePathname } from 'next/navigation';




const Navbar = () => {

  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  


    const links = [
        {href:'/experiences',
        label: 'EXPERIENCIAS'
        },

        {href:'/aboutus',
            label: 'SOBRE NOSOTROS'
            }, 
       {href:'#contact',
        label: 'CONTACTO'
                }
    ]


  return (
    <div>
        <nav className="fixed top-0 left-0 w-full bg-white  z-50  hidden md:block ">
        <div className="flex items-center justify-between max-w-8/10 mx-auto border-b border-[#c8a951] px-2 py-7 ">
      <div>


        <Link href="/">
        <Image 
        src='/logo.png'
         alt="Royal Stay Logo"
          width={200}
           height={200} />
        </Link>
      </div>

<div className="hidden md:flex items-center space-x-8  text-[15px] tracking-wider">
      {links.map((link)=>{
          return(
              <Link
              key={link.label}
              href={link.href}
              className={`hover:text-[#c8a951] transition ${
                pathname === link.href ? 'text-[#c8a951] ' : ''
              }`}
            >
                  {link.label}
              </Link>
          )
      })}

</div>



     
      <div className={inter.className}>
<Button 
href="https://api.whatsapp.com/send?phone=5493472554912&text=¡Hola!%20Quisiera%20reservar%20una%20experiencia%20en%20Royal%20Stay.">
    RESERVA YA
  </Button>

      </div>
      </div>
    </nav>




        {/* Mobile */}
<nav className="md:hidden fixed top-0 left-0 w-full z-50 bg-white flex items-center justify-between px-3 py-4 border-b border-[#c8a951]">
  <Link href="/">
    <Image src="/logo.png" alt="Royal Stay Logo" width={200} height={200} />
  </Link>
  <button
    onClick={() => setMenuOpen(!menuOpen)}
    className="focus:outline-none"
  >
    {menuOpen ? (
      <Image src="/menu-close.png" alt="Cerrar menú" width={20} height={20} />
    ) : (
      <Image src="/menu-open.png" alt="Abrir menú" width={40} height={40} />
    )}
  </button>
</nav>

{/* Mobile Menu */}
{menuOpen && (
  <div className="md:hidden fixed top-[70px] left-0 w-full z-50 flex flex-col items-start bg-white py-5 px-5 space-y-3 border-b border-[#c8a951]">
    {links.map(link => (
      <Link
        key={link.label}
        href={link.href}
        onClick={() => setMenuOpen(false)}
        className={`text-[#171717] hover:text-[#c8a951] text-[15px] tracking-wide transition py-2 ${
          pathname === link.href ? 'text-[#c8a951] ' : ''
        }`}
      >
        {link.label}
      </Link>
    ))}
    <Button
      href="https://api.whatsapp.com/send?phone=5493472554912&text=¡Hola!"
      className="bg-[#c8a951] text-white px-4 py-2 rounded hover:bg-green-700 transition"
    >
      RESERVA YA
    </Button>
  </div>
)}


    </div>
  )
}

export default Navbar