
import React from 'react'
import { inter } from '../layout';
import style from '@/app/home.module.css'
import Image from "next/image";
import Link from "next/link";
import Button from './Button';





const Navbar = () => {


    // const pathname = usePathname()

    // const links = [
    //     {href:'/experiences',
    //     label: 'EXPERIENCIES'
    //     },

    //     {href:'/aboutus',
    //         label: 'ABOUT US'
    //         }, 
    //    {href:'/contact',
    //     label: 'CONTACT'
    //             }
    // ]


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
{/* 
{links.map((link)=>{
    return(
        <Link
        key={link.label}
        href={link.href}
        className={`text-[#c8a951] hover:text-blue
        ${pathname === link.href ? 'bg-sky-100 text-blue-600' : ""}
        `}>
            <p>{link.label}</p>
        </Link>
    )
})} */}



       <div className="hidden md:flex items-center space-x-8 text-[#171717] text-[15px] tracking-wider">
        <Link href="/experiences" className={`${inter.className} ${style.textcolor}`}>EXPERIENCIAS</Link>
        <Link href="/aboutus" className={`${inter.className} ${style.textcolor}`}>SOBRE NOSOTROS</Link>
        <Link href="/contact" className={`${inter.className} ${style.textcolor}`}>CONTACTO</Link>
      </div> 
     
     
      <div className={inter.className}>
<Button 
href="https://api.whatsapp.com/send?phone=5493472554912&text=¡Hola!%20Quisiera%20reservar%20una%20experiencia%20en%20Royal%20Stay.">
    RESERVA YA
  </Button>

      </div>
      </div>
    </nav>

    <nav className='md:hidden block border-b border-[#c8a951] w-full px-2 py-4'>
      <div className=' flex flex-row justify-between'>
        <Link href="/">
        <Image 
        src='/logo.png'
         alt="Royal Stay Logo"
          width={200}
           height={200} />
        </Link>
        <Image 
        src='/menu-open.png'
         alt="menu"
          width={50}
           height={50} />
</div>
    </nav>
    </div>
  )
}

export default Navbar