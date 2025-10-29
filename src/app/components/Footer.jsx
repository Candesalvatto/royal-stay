import React from 'react'
import { inter } from '../layout';
import { oswald } from '../layout';
import style from '@/app/home.module.css'
import Button from './Button';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className='w-full mt-25 bg-white'>
        <section className='border border-[#c8a951] bg-white max-w-9/10 md:max-w-8/10 mx-auto py-25 px-5 md:h-80  flex flex-col justify-center items-center text-center'>
        <h3 className={`${oswald.className} antialiased ${style.royalcolor} text-[30px] md:text-[58px] font-bold leading-[1.3]`}>¿ESTÁS LISTO PARA VIVIR UN VIAJE ÚNICO?</h3>
        <p className={`${inter.className} antialiased ${style.textcolor} text-[16px] md:mt-5 mt-5  `}>Reserva hoy mismo y no te vayas sin vivir increíbles recuerdos.</p>
        <div className={`${inter.className} md:mt-10 mt-10 `}>
                  <Button
                  href="https://api.whatsapp.com/send?phone=5493472554912&text=¡Hola!%20Quisiera%20reservar%20una%20experiencia%20en%20Royal%20Stay."
                  >
                      CONTÁCTANOS
                    </Button>
              </div>
        </section>

        <section className=' w-full mx-auto flex flex-col justify-between space-y-5  bg-[#1a1a1a]  md:mt-20 mt-10'>
            <div className=' w-9/10 mx-auto md:w-8/10 flex flex-col md:flex-row py-20'>
              <div className='flex flex-col justify-start border-2py-16 space-y-3 pb-10 md:w-1/2'>
                <Image
                src='/logo.png'
                alt='Royal Stay'
                width={400}
                height={200}
                className='hidden md:block object-cover '
                />
                                <Image
                src='/logo.png'
                alt='Royal Stay'
                width={250}
                height={100}
                className='md:hidden block object-cover '
                />
        <h2 className={`${oswald.className} antialiased ${style.royalcolor}  text-[20px]  md:text-[34px] font-bold`}>A UN PASO DE TU ESTADÍA REAL</h2>
              </div>
              <div className={` ${inter.className} text-[16px] antialiased space-y-3  flex flex-col  md:p-16 text-white md:w-1/2 justify-start items-start md:items-end md:justify-end`}>
                <p>Palermo, Buenos Aires</p>
                <p>347255555</p>
                <p>347255555</p>
                <p>@royalstayba</p>
              </div>
            </div>
    <span className={`${inter.className} text-white text-[10px] md:text-[16px] flex justify-center `}>© Royal Stay – Todos los derechos reservados.</span>
        </section>
    </div>
  )
}

export default Footer