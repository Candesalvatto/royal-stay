// "use client"

// import React from 'react'
// import { oswald } from '../layout' 
// import { inter } from '../layout' 
// import style from '@/styles/home.module.css'
// import Image from 'next/image'
// import { useTranslation } from 'react-i18next'



// const AboutUs = () => {

//  const { t } = useTranslation();

//   return (
//     <div className=' max-w-9/10 lg:max-w-8/10 mx-auto flex flex-col lg:flex-row mt-35 lg:mt-50 lg:gap-20 gap-10 bg-white'>

//       <div className='w-full'>
//       <h3 className={`${oswald.className} antialiased ${style.royalcolor}  text-[36px] lg:text-[58px]  font-bold lg:mt-10 `}>{t("about.title")}</h3>
//       <p className={`${inter.className} antialiased ${style.textcolor}  text-[16px] mt-7 lg:mt-10  `}>{t("about.paragraph")}</p>
//       </div>
//       <div>
//       <Image
//                     src='/about-desktop.webp'
//                     alt='Mati y Angie'
//                     width={700}      
//                     height={700} 
//                     priority
//                     className='hidden md:block'/>
//             <Image
//                     src='/about-mobile.webp'
//                     alt='Mati y Angie'
//                     width={300}      
//                     height={200} 
//                     priority
//                     className='block md:hidden object-cover w-full h-auto'/>
//       </div>
//     </div>
//   )
// }

// export default AboutUs

"use client";

import React from "react";
import { oswald } from "../layout";
import { inter } from "../layout";
import style from "@/styles/home.module.css";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-9/10 lg:max-w-8/10 mx-auto flex flex-col lg:flex-row mt-35 lg:mt-50 lg:gap-20 gap-10 bg-white">
      <div className="w-full">
        <h3
          className={`${oswald.className} antialiased ${style.royalcolor} text-[36px] lg:text-[58px] font-bold lg:mt-10`}
        >
          {t("about.title")}
        </h3>

        <p
          className={`${inter.className} antialiased ${style.textcolor} text-[16px] mt-7 lg:mt-10`}
        >
          {t("about.paragraph")}
        </p>
      </div>

      <div>
        <Image
          src="/about-desktop.webp"
          alt="Mati y Angie"
          width={700}
          height={700}
          priority
          className="hidden md:block"
        />

        <Image
          src="/about-mobile.webp"
          alt="Mati y Angie"
          width={300}
          height={200}
          priority
          className="block md:hidden object-cover w-full h-auto"
        />
      </div>
    </div>
  );
};

export default AboutUs;
