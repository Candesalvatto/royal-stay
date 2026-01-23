// 'use client'
// import React, { useState } from 'react'
// import { oswald, inter } from '../layout'
// import style from '@/styles/home.module.css'
// import Image from 'next/image'

// import experiencesEs from '@/app/experiences.json'
// import experiencesEn from '@/app/experiences-en.json'

// import { ChevronLeft, ChevronRight, X } from 'lucide-react'
// import { useTranslation } from "react-i18next";

// const Experiences = () => {
//   const [galleryImage, setGalleryImage] = useState('/Catadevino2.jpg')
//   const [currentImages, setCurrentImages] = useState([])
//   const [showImage, setShowImage] = useState('hidden')
//   const [index, setIndex] = useState(0)

//   const { i18n } = useTranslation();
//   const lang = i18n.language;

//   // ⭐ Selecciona datos según el idioma
//   const galleryData = lang === "es" ? experiencesEs : experiencesEn;

//   const nextImage = () => {
//     if (!currentImages.length) return
//     const nextIndex = (index + 1) % currentImages.length
//     setIndex(nextIndex)
//     setGalleryImage(currentImages[nextIndex])
//   }

//   const prevImage = () => {
//     if (!currentImages.length) return
//     const prevIndex = (index - 1 + currentImages.length) % currentImages.length
//     setIndex(prevIndex)
//     setGalleryImage(currentImages[prevIndex])
//   }

//   return (
//     <div className='max-w-9/10 lg:max-w-8/10 mx-auto flex flex-col mt-35 lg:mt-50 lg:gap-20 gap-10 bg-white'>

//       <h3 className={`${oswald.className} antialiased ${style.royalcolor} text-[36px] lg:text-[58px] font-bold lg:mt-10`}>
//         {lang === "es" ? "NUESTRAS EXPERIENCIAS" : "OUR EXPERIENCES"}
//       </h3>

//       {galleryData.map((section, sectionIndex) => (
//         <section key={sectionIndex}>
//           <h3 className={`${oswald.className} antialiased ${style.royalcolor} text-[26px] lg:text-[38px] font-bold md:w-2/3 leading-[1.3]`}>
//             {section.title}
//           </h3>

//           <p className={`${style.textcolor} mb-6 mt-6`}>{section.description}</p>

//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
//             {section.images.map((src, i) => (
//               <div
//                 key={i}
//                 className="relative w-full h-40 lg:h-80 overflow-hidden hover:shadow-lg cursor-pointer"
//                 onClick={() => {
//                   setShowImage('')
//                   setGalleryImage(src)
//                   setIndex(i)
//                   setCurrentImages(section.images)
//                 }}
//               >
// <Image
//   src={src}
//   alt={`${section.title} ${i + 1}`}
//   fill
//   priority
//   sizes="(max-width: 768px) 100vw, 25vw"
//   className="object-cover hover:scale-105 transition-transform"
// />
//               </div>
//             ))}
//           </div>
//         </section>
//       ))}

//       {/* Modal */}
//       <div className={`${showImage} fixed inset-0 flex items-center justify-center  h-full bg-white z-50`}>
//         <div onClick={prevImage} className='cursor-pointer md:p-3 hover:scale-105 absolute left-0 md:left-10'>
//           <ChevronLeft className='w-10 h-10 text-[#c8a951]' />
//         </div>

//         <Image
//           alt="Imagen ampliada"
//           width={800}
//           height={600}
//           priority
//           src={galleryImage}
//           className='object-contain max-h-[60vh] md:max-h-[80vh]'
//         />

//         <div onClick={nextImage} className='cursor-pointer md:p-3 hover:scale-105 absolute right-0 md:right-10'>
//           <ChevronRight className='w-10 h-10 text-[#c8a951]' />
//         </div>

//         <div onClick={() => setShowImage('hidden')} className='cursor-pointer md:p-2 fixed top-10 right-10 hover:scale-105'>
//           <X className='w-10 h-10 text-[#c8a951]' />
//         </div>
//       </div>

//     </div>
//   )
// }

// export default Experiences


"use client";

import React, { useState } from "react";
import { oswald, inter } from "../layout";
import style from "@/styles/home.module.css";
import Image from "next/image";

import experiencesEs from "@/app/experiences.json";
import experiencesEn from "@/app/experiences-en.json";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useTranslation } from "react-i18next";

const Experiences = () => {
  const [galleryImage, setGalleryImage] = useState("");
  const [currentImages, setCurrentImages] = useState([]);
  const [showImage, setShowImage] = useState(false);
  const [index, setIndex] = useState(0);

  const { i18n } = useTranslation();
  const lang = i18n.language || "es";

  // ⭐ Selección dinámica del JSON según idioma
  const galleryData = lang === "es" ? experiencesEs : experiencesEn;

  const nextImage = () => {
    if (!currentImages.length) return;
    const nextIndex = (index + 1) % currentImages.length;
    setIndex(nextIndex);
    setGalleryImage(currentImages[nextIndex]);
  };

  const prevImage = () => {
    if (!currentImages.length) return;
    const prevIndex =
      (index - 1 + currentImages.length) % currentImages.length;
    setIndex(prevIndex);
    setGalleryImage(currentImages[prevIndex]);
  };

  return (
    <div className="max-w-9/10 lg:max-w-8/10 mx-auto flex flex-col mt-35 lg:mt-50 lg:gap-20 gap-10 bg-white">
      <h3
        className={`${oswald.className} antialiased ${style.royalcolor} text-[36px] lg:text-[58px] font-bold lg:mt-10`}
      >
        {lang === "es" ? "NUESTRAS EXPERIENCIAS" : "OUR EXPERIENCES"}
      </h3>

      {galleryData.map((section, sectionIndex) => (
        <section key={sectionIndex}>
          <h3
            className={`${oswald.className} antialiased ${style.royalcolor} text-[26px] lg:text-[38px] font-bold md:w-2/3 leading-[1.3]`}
          >
            {section.title}
          </h3>

          <p className={`${inter.className} ${style.textcolor} mb-6 mt-6`}>
            {section.description}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {section.images.map((src, i) => (
              <div
                key={i}
                className="relative w-full h-40 lg:h-80 overflow-hidden hover:shadow-lg cursor-pointer"
                onClick={() => {
                  setShowImage(true);
                  setGalleryImage(src);
                  setIndex(i);
                  setCurrentImages(section.images);
                }}
              >
                <Image
                  src={src}
                  alt={`${section.title} ${i + 1}`}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover hover:scale-105 transition-transform"
                />
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* ---------- MODAL ---------- */}
      {showImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#c8a951] h-full z-50">
          {/* Prev */}
          <div
            onClick={prevImage}
            className="cursor-pointer md:p-3 hover:scale-105 absolute left-0 md:left-10"
          >
            <ChevronLeft className="w-10 h-10 text-[#c8a951]" />
          </div>

          {/* Imagen Principal */}
          <Image
            alt="Imagen ampliada"
            width={800}
            height={600}
            priority
            src={galleryImage}
            className="object-contain max-h-[60vh] md:max-h-[80vh]"
          />

          {/* Next */}
          <div
            onClick={nextImage}
            className="cursor-pointer md:p-3 hover:scale-105 absolute right-0 md:right-10"
          >
            <ChevronRight className="w-10 h-10 text-[#c8a951]" />
          </div>

          {/* Close */}
          <div
            onClick={() => setShowImage(false)}
            className="cursor-pointer md:p-2 fixed top-10 right-10 hover:scale-105"
          >
            <X className="w-10 h-10 text-[#c8a951]" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Experiences;
