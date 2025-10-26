import React from 'react'
import { inter } from '../layout';
import { oswald } from '../layout';
import style from '@/app/home.module.css'
import Button from './Button';

const Footer = () => {
  return (
    <div className='w-full  '>
        <section className='border border-[#c8a951] max-w-9/10 md:max-w-8/10 mx-auto  p-5 md:h-80 h-90 flex flex-col justify-center items-center text-center'>
        <h3 className={`${oswald.className} antialiased ${style.royalcolor} text-[30px] md:text-[58px] font-bold leading-[1.1]`}>¿ESTÁS LISTO PARA VIVIR UN VIAJE ÚNICO?</h3>
        <p className={`${inter.className} antialiased ${style.textcolor} text-[16px] md:mt-5 mt-5  `}>Reserva hoy mismo y no te vayas sin vivir increíbles recuerdos.</p>
        <div className={`${inter.className} md:mt-10 mt-10 `}>
                  <Button
                  href="https://api.whatsapp.com/send?phone=5493472554912&text=¡Hola!%20Quisiera%20reservar%20una%20experiencia%20en%20Royal%20Stay."
                  >
                      CONTÁCTANOS
                    </Button>
              </div>
        </section>
        <section className=' w-full mx-auto  bg-[#1a1a1a] h-100 md:mt-20 mt-10'>
    <span className={`${inter.className} text-white text-[10px] md:text-[16px] flex justify-center `}>© Royal Stay – Todos los derechos reservados.</span>
        </section>
    </div>
  )
}

export default Footer