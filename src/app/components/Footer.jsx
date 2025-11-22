import React from 'react'
import { inter } from '../layout';
import { oswald } from '../layout';
import style from '@/app/home.module.css'
import Button from './Button';
import Image from 'next/image';

const Footer = () => {
  return (
    <div  className='w-full mt-25 bg-white'>
        <section className='border border-[#c8a951] bg-white max-w-9/10 lg:max-w-8/10 mx-auto py-25 px-5 lg:h-80  flex flex-col justify-center items-center text-center'>
        <h2 className={`${oswald.className} antialiased ${style.royalcolor} text-[36px] lg:text-[58px] font-bold leading-[1.3]`}>¿ESTÁS LISTO PARA VIVIR UN VIAJE ÚNICO?</h2>
        <p className={`${inter.className} antialiased ${style.textcolor} text-[16px]  mt-5  `}>Reserva hoy mismo y no te vayas sin vivir increíbles recuerdos.</p>
        <div className={`${inter.className}  mt-10 `}>
                  <Button
                  href="https://api.whatsapp.com/send?phone=5493472554912&text=¡Hola!%20Quisiera%20reservar%20una%20experiencia%20en%20Royal%20Stay."
                  >
                      CONTÁCTANOS
                    </Button>
              </div>
        </section>

        <section id="contact" className=' w-full mx-auto flex flex-col justify-between space-y-5  bg-[#1a1a1a]  lg:mt-20 mt-10'>
            <div className=' w-9/10 mx-auto lg:w-8/10 flex flex-col lg:flex-row py-20  '>
              <div className='flex flex-col justify-start border-2py-16 space-y-20 pb-10 lg:w-1/2 '>
                <Image
                src='/logo.png'
                alt='Royal Stay'
                width={400}
                height={200}
                className='hidden lg:block object-cover '
                />
                                <Image
                src='/logo.png'
                alt='Royal Stay'
                width={250}
                height={100}
                className='lg:hidden block object-cover '
                />
        <h2 className={`${oswald.className} antialiased ${style.royalcolor}  text-[25px]  lg:text-[34px] font-bold`}>A UN PASO DE TU ESTADÍA REAL</h2>
              </div>
              <div className={` ${inter.className} text-[16px] antialiased  space-y-3  flex flex-col  lg:p-16 text-white lg:w-1/2 justify-start items-start lg:items-end md:justify-end`}>

                <div className='flex '>
                <Image
                src='/local.webp'
                alt=' '
                width={25}
                height={20}
                className=' object-contain mr-5 
                             sm:w-20 sm:h-20
                              md:w-7 md:h-7
                            lg:w-7 lg:h-7 '
                />

                <p>Palermo, Buenos Aires</p>
                </div>
                <div className=' flex '>
                <Image
                src='/call.webp'
                alt=' '
                width={25}
                height={20}
                className=' object-cover mr-5
                              sm:w-20 sm:h-20
                              md:w-7 md:h-7
                            lg:w-7 lg:h-7 '
                />
                <p>+54 9 (3472) 554912</p>
                </div>
               <div className=' flex '>
                <Image
                src='/call.webp'
                alt=' '
                width={25}
                height={20}
                className='object-cover mr-5
                             sm:w-20 sm:h-20
                              md:w-7 md:h-7
                            lg:w-7 lg:h-7 '
                />
                <p>+54 9 (3525) 405277</p>
                </div>
                 <div className=' flex '>
                <Image
                src='/insta.webp'
                alt=' '
                width={25}
                height={20}
                className=' object-cover mr-5 
                              sm:w-20 sm:h-20
                              md:w-7 md:h-7
                            lg:w-7 lg:h-7'
                />
                <p className={`${style.royalcolor} `}>@royalstayba</p>
                </div>

              </div>
            </div>
    <span className={`${inter.className} text-white  text-[12px] flex justify-center `}>© Royal Stay – Todos los derechos reservados.</span>
        </section>
    </div>
  )
}

export default Footer