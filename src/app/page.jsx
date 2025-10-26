import React from 'react'
import style from '@/app/home.module.css'
import {oswald} from './layout'
import { inter } from './layout'
import Image from 'next/image'
import Link from 'next/link'
import Button from './components/Button'



const Home = () => {
  return (
    <div className="bg-white" >
      <div className="max-w-9/10 md:max-w-8/10 mx-auto  flex flex-col md:flex-row items-start md:items-end md:justify-between mt-15 mb-7  md:mt-50 md:mb-15">
        <h1 className={`${oswald.className} antialiased ${style.royalcolor}  text-[54px] md:text-[64px] lg:text-[85px]  md:w-3/4 font-bold leading-[1.1]`}>VIVE CADA LUGAR Y SÉ PARTE DE SU HISTORIA</h1>
        <p className={`${inter.className} antialiased ${style.textcolor}  text-[16px] md:w-1/4 mt-5`}>Experiencias auténticas pensadas para descubrir la esencia de Buenos Aires</p>
      </div>
      <div>
        <Image
        src='/hero-desktop-ba.png'
        alt='Buenos Aires'
        width={1920}
        height={260}
        className='hidden md:block object-cover'
        />
                <Image
        src='/hero-mobile-3.png'
        alt='Buenos Aires'
        width={560}
        height={420}
        className='block md:hidden object-cover'
        />
      </div>
      <div className=' border-t border-[#c8a951] mt-15 md:mt-30 md:mb-20 max-w-9/10 md:max-w-8/10 mx-auto flex flex-col md:flex-row md:justify-between md:items-end'>
      <h2 className={`${oswald.className} antialiased ${style.royalcolor} text-[36px] md:text-[58px]  font-bold mt-5 md:mt-10 md:w-2/3 leading-[1.3]`}>BUENOS AIRES MAS ALLÁ DE LO TURÍSTICO</h2>
      {/* <a className='bg-[#c8a951] text-[15px] text-white font-medium px-8 py-4 border-1 border-transparent transition-all duration-500 hover:bg-white hover:text-[#c8a951] hover:border-[#c8a951] basis-1/3'>Ver más</a> */}
      {/* <button className="bg-[#c8a951] text-white text-[15px] px-5 py-3 tracking-wide h-[120px] px-8 py-4 border-1 border-transparent transition-all duration-500 hover:bg-white hover:text-[#c8a951] hover:border-[#c8a951] ">
  Ver más
</button> */}
<div className={`${inter.className} mt-10`}>
<Button
href="/experiences"
>
    VER MÁS
  </Button>
  </div>


      </div>
      <section className=' mt-15 md:mt-10 max-w-9/10 md:max-w-8/10 mx-auto grid md:grid-cols-2 md:gap-15 gap-10'>

        <Link href="/experiences" >
          <div >
            <Image
                    src='/masajes.jpeg'
                    alt='Masajes Relajantes'
                    width={700}
                    height={700} />
            <h3 className={`${oswald.className} antialiased ${style.royalcolor}  text-[20px] md:text-[28px]  font-bold mt-5 md:mt-5`}>MASAJES RELAJANTES</h3>
            <p className={`${inter.className} antialiased ${style.textcolor}  text-[16px] md:mt-3 mt-2 `}>Terapeutas cuidadosamente elegidos y probados por nosotros, garantizando calidad y confianza.</p>
          </div>
        </Link>

        <Link href="/experiences" >
          <div>
            <Image
                    src='/paseos.jpeg'
                    alt='Masajes Relajantes'
                    width={700}
                    height={700} />
            <h3 className={`${oswald.className} antialiased ${style.royalcolor}  text-[20px] md:text-[28px]  font-bold mt-5 md:mt-5 `}>PASEOS EN BICICLETA</h3>
            <p className={`${inter.className} antialiased ${style.textcolor} text-[16px] md:mt-3 mt-2  `}>Viví un recorrido dinámico que combina movimiento, paisajes y relatos que solo los locales pueden contar</p>
          </div>
        </Link>

        <Link href="/experiences" >
          <div>
            <Image
                    src='/cancha.jpg'
                    alt='Masajes Relajantes'
                    width={700}
                    height={700} />
            <h3 className={`${oswald.className} antialiased ${style.royalcolor}  text-[20px] md:text-[28px]  font-bold mt-5 md:mt-5 `}>PARTIDOS DE FÚTBOL</h3>
            <p className={`${inter.className} antialiased ${style.textcolor} text-[16px] md:mt-3 mt-2  `}>Emoción en la cancha más grande y épica de Argentina.</p>
          </div>
        </Link>

        <Link href="/experiences" >
          <div>
            <Image
                    src='/vinos.jpg'
                    alt='Masajes Relajantes'
                    width={700}
                    height={700} />
            <h3 className={`${oswald.className} antialiased ${style.royalcolor} text-[20px] md:text-[28px]  font-bold mt-5 md:mt-5`}>CATA DE VINOS</h3>
            <p className={`${inter.className} antialiased ${style.textcolor} text-[16px] md:mt-3 mt-2  `}>Selección de etiquetas cuidadosamente elegidas.</p>
          </div>
        </Link>

      </section>

      <section className='border-t border-[#c8a951] max-w-9/10 md:max-w-8/10 mx-auto mt-20 md:mt-30 md:mb-10'>
      <h2 className={`${oswald.className} antialiased ${style.royalcolor} text-[36px] md:text-[58px]  font-bold mt-5 md:w-2/3 md:mt-10  leading-[1.3]`}>CÓMO FUNCIONA</h2>
      <p className={`${inter.className} antialiased ${style.textcolor}  text-[16px] mt-7  `}>Creemos que los viajes significativos comienzan con conexiones genuinas.
      Nos tomamos el tiempo para comprender los intereses de cada cliente y confiamos en alianzas locales bien establecidas para crear itinerarios privados y cuidadosamente diseñados, con un proceso simple y personalizado</p>
      </section>


      <section className=' max-w-9/10 md:max-w-8/10 mx-auto md:mt-10 md:mb-10 grid md:grid-cols-3 md:gap-4 gap-1'>
        <div className=' md:mt-5 md:mb-5 mt-5 mb-2'>
        <div className='flex flex-row items-center '>
          <p className={`${oswald.className} antialiased ${style.royalcolor}  mr-4 text-16px md:text-[20px] font-light border border-[#c8a951] md:px-3 px-3 py-2 `}>01</p>
          <h4  className={`${oswald.className} antialiased ${style.royalcolor}  text-[20px] md:text-[28px] font-bold  `}>ELIGE UNA EXPERIENCIA</h4>
        </div>
        <p className={`${inter.className} antialiased ${style.textcolor}  text-[16px] mt-5 `}>Explorá nuestras propuestas y selecciona la ideal para tu viaje. Cada opción fue pensada para que disfrutes. Nuestras experiencias combinan relax, cultura y aventura para que vivas la ciudad a tu manera.</p>
        </div>

        <div className=' md:mt-5 md:mb-5 mt-3 mb-2 '>
        <div className='flex flex-row items-center'>
          <p className={`${oswald.className} antialiased ${style.royalcolor} mr-4 text-16px md:text-[20px] font-light border border-[#c8a951] md:px-3 px-3 py-2  `}>02</p>
          <h4  className={`${oswald.className} antialiased ${style.royalcolor}  text-[20px] md:text-[28px] font-bold  `}>CONTÁCTANOS</h4>
        </div>
        <p className={`${inter.className} antialiased ${style.textcolor}  text-[16px] mt-5 `}>Cuando encuentres la experiencia ideal, escribinos por WhatsApp o Instagram. Nos encargamos de conectarte directamente con los anfitriones y coordinar todos los detalles por vos.</p>
        </div>

        <div className=' md:mt-5 md:mb-5 mt-3 mb-2'>
        <div className='flex flex-row items-center'>
          <p className={`${oswald.className} antialiased ${style.royalcolor} mr-4 text-16px md:text-[20px] font-light border border-[#c8a951] md:px-3 px-3 py-2 `}>03</p>
          <h4  className={`${oswald.className} antialiased ${style.royalcolor} text-[20px] md:text-[28px] font-bold  `}>DISFRUTA</h4>
        </div>
        <p className={`${inter.className} antialiased ${style.textcolor}  text-[16px] mt-5 `}>El día de tu experiencia, solo necesitás disfrutar. Cada actividad está organizada por profesionales que aman lo que hacen y quieren compartir su pasión con vos.</p>
        </div>
      </section>

      <section className='  gap-5  max-w-9/10 md:max-w-8/10 mx-auto mt-10 mb-10 flex flex-col-reverse md:flex-row md:justify-center md:items-center'>
      <div className='grid md:w-1/2 gap-5  md:grid-cols-2  md:gap-2 z-0  md:items-stretch  '>
      <div className="flex flex-col gap-2 items-center">
      <Image
                    src='/cancha-2.jpg'
                    alt='Masajes Relajantes'
                    width={400}
                    height={300}
                    className='  hidden md:block object-cover w-full h-auto '/>

        <Image
                    src='/palermo.jpg'
                    alt='Masajes Relajantes'
                    width={400}
                    height={300}
                    className=' hidden md:block object-cover w-full h-auto '/>
                    </div>
                    <div className=" items-center">
        <Image
                    src='/bandera.jpg'
                    alt='Masajes Relajantes'
                    width={400}
                    height={620}
                    className=' hidden md:block object-cover w-full h-auto '/>
                    </div>


<Image
                    src='/cancha-2.jpg'
                    alt='Estadio Monumental'
                    width={400}
                    height={400}
                    className=' block md:hidden object-cover'/>

        <Image
                    src='/palermo.jpg'
                    alt='Calles de Palermo'
                    width={400}
                    height={400}
                    className='  block md:hidden object-cover'/>
        <Image
                    src='/bandera-2.jpg'
                    alt='Bandera Argentina'
                    width={400}
                    height={400}
                    className=' block md:hidden object-cover '/>
      </div>
      
      <div className='border border-[#c8a951] md:px-15 mx-auto md:w-1/2  py-15 px-5 flex flex-col justify-center  z-10'>
          <h2 className={`${oswald.className} antialiased ${style.royalcolor} text-[36px] md:text-[58px]  font-bold  leading-[1.3]`}>CREANDO MOMENTOS DE CONEXIÓN REALES</h2>
          <p className={`${inter.className} antialiased ${style.textcolor}  text-[16px] mt-5 `}>
          En Royal Stay sabemos qué vivir, dónde hacerlo y, sobre todo, cuándo hacerlo.
    Pensamos en quienes buscan autenticidad y calidad.</p>
              <div className={`${inter.className}  md:mt-10 mt-10`}>
                  <Button
                  href="/aboutus"
                  >
                      VER MÁS
                    </Button>
              </div>
      </div>

      </section>


    </div>

  )
}

export default Home