import React from 'react'
import { oswald } from '../layout' 
import { inter } from '../layout' 
import style from '@/app/home.module.css'
import Image from 'next/image'

export const metadata = {
  title: "Royal Stay",
  description: "Experiencias para vivir Buenos Aires",
  keywords: ["experiencias", "buenos aires"],
  openGraph: {
    title: "Royal Stay",
    description: "Experiencias para vivir Buenos Aires",
    type: "website",
  },
  locale: "es_ES",
};


const AboutUs = () => {


  return (
    <div className=' max-w-9/10 md:max-w-8/10 mx-auto flex flex-col md:flex-row mt-35 md:mt-50 md:gap-20 gap-10'>

      <div className='w-full'>
      <h3 className={`${oswald.className} antialiased ${style.royalcolor}  text-[36px] md:text-[58px]  font-bold md:mt-10 `}>DETRÁS DE ROYAL STAY</h3>
      <p className={`${inter.className} antialiased ${style.textcolor}  text-[16px] mt-7 md:mt-10  `}>Somos Matias y Angie, una pareja que hace más de dos años emprende en Buenos Aires con una misión clara: ofrecer a los viajeros experiencias y productos que realmente valgan la pena. Conocemos cada rincón, cada sabor y cada experiencia que vale la pena vivir. Por eso, probamos y seleccionamos personalmente todo lo que recomendamos: de una lista inicial de 12 opciones, elegimos solo las 3 mejores en cada categoría. Queremos que disfrutes lo mejor de lo mejor: experiencias que recordarás, sabores que te acompañarán y momentos que vas a querer recomendar.</p>
      </div>
      <div>
      <Image
                    src='/about-desktop.jpg'
                    alt='Mati y Angie'
                    width={700}      
                    height={700} 
                    className='hidden md:block'/>
            <Image
                    src='/about-mobile.jpg'
                    alt='Mati y Angie'
                    width={300}      
                    height={200} 
                    className='block md:hidden object-cover w-full h-auto'/>
      </div>
    </div>
  )
}

export default AboutUs