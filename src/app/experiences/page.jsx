'use client'
import React from 'react'
import { oswald } from '../layout' 
import { inter } from '../layout' 
import style from '@/app/home.module.css'
import Image from 'next/image'
import galleryData from '@/app/experiences.json'
import { useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'


const Experiences = () => {

const [galleryImage, setGalleryImage] = useState('/Catadevino2.jpg')
const [currentImages, setCurrentImages] = useState([])
const [showImage, setShowImage] = useState('hidden')
const [index, setIndex] = useState(0)


  const nextImage = () => {
    if (!currentImages.length) return

    const nextIndex = (index + 1) % currentImages.length
    setIndex(nextIndex)
    setGalleryImage(currentImages[nextIndex])
  }

  const prevImage = () => {
    if (!currentImages.length) return

    const prevIndex = (index - 1 + currentImages.length) % currentImages.length
    setIndex(prevIndex)
    setGalleryImage(currentImages[prevIndex])
  }

  return (
    <div className='max-w-9/10 md:max-w-8/10 mx-auto flex flex-col mt-35 md:mt-50 md:gap-20 gap-10 '>

        <h3 className={`${oswald.className} antialiased ${style.royalcolor} text-[36px] md:text-[58px] font-bold md:mt-10`}>
          NUESTRAS EXPERIENCIAS
        </h3>



        {galleryData.map((section, sectionIndex) => (
          <section key={sectionIndex}>
            <h3 className={`${oswald.className} antialiased ${style.royalcolor} text-[26px] md:text-[38px]  font-bold   md:w-2/3 leading-[1.3]`}>
              {section.title}
            </h3>
            <p className= {`${style.textcolor} mb-6 mt-6`}>{section.description}</p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {section.images.map((src, i) => (
                <div
                  key={i}
                  className="relative w-full  h-40 md:h-80 overflow-hidden  hover:shadow-lg  cursor-pointer"
                  onClick={() => {
                    setShowImage('')
                    setGalleryImage(src)
                    setIndex(i)
                    setCurrentImages(section.images) // 👈 guardamos las imágenes de la sección
                  }}
                >
                  <Image
                    src={src}
                    alt={`${section.title} ${i + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform"
                  />
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Modal de imagen ampliada */}
        <div className={`${showImage} fixed inset-0 flex items-center justify-center bg-white/95 z-50`}>
          {/* Botón anterior */}
          <div onClick={prevImage} className='cursor-pointer md:p-3 hover:scale-105 absolute left-0 md:left-10 '>
            <ChevronLeft className='w-10 h-10 text-[#c8a951]' />
          </div>

          {/* Imagen principal */}
          <Image
            alt="Imagen ampliada"
            width={800}
            height={600}
            src={galleryImage}
            className='object-contain max-h-[60vh] md:max-h-[80vh]'
          />

          {/* Botón siguiente */}
          <div onClick={nextImage} className='cursor-pointer md:p-3 hover:scale-105 absolute right-0 md:right-10 color-[#c8a951]  '>
            <ChevronRight className='w-10 h-10 text-[#c8a951]' />
          </div>

          {/* Botón cerrar */}
          <div onClick={() => setShowImage('hidden')} className='cursor-pointer md:p-2 fixed  top-10 right-10 color-[#c8a951] hover:scale-105'>
            <X className='w-10 h-10 text-[#c8a951]' />
          </div>
        </div>

    </div>
  )
}

export default Experiences