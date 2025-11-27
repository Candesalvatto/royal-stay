// "use client"

// import React from 'react'
// import { inter } from '../layout'
// import { oswald } from '../layout'
// import style from '@/styles/home.module.css'
// import Button from './Button'
// import Image from 'next/image'
// import { useTranslation } from "react-i18next"

// const Footer = () => {
//   const { t } = useTranslation()

//   return (
//     <div className="w-full mt-25 bg-white">

//       {/* SECTION 1 */}
//       <section className="border border-[#c8a951] bg-white max-w-[90%] lg:max-w-[80%] mx-auto py-25 px-5 lg:h-80 flex flex-col justify-center items-center text-center">
//         <h2 className={`${oswald.className} antialiased ${style.royalcolor} text-[36px] lg:text-[58px] font-bold leading-[1.3]`}>
//           {t("footer.section1_title")}
//         </h2>

//         <p className={`${inter.className} antialiased ${style.textcolor} text-[16px] mt-5`}>
//           {t("footer.section1_subtitle")}
//         </p>

//         <div className={`${inter.className} mt-10`}>
//           <Button href="https://api.whatsapp.com/send?phone=5493472554912&text=¡Hola!%20Quisiera%20reservar%20una%20experiencia%20en%20Royal%20Stay.">
//             {t("footer.section1_button")}
//           </Button>
//         </div>
//       </section>


//       {/* SECTION 2 */}
//       <section id="contact" className="w-full flex flex-col bg-[#1a1a1a] lg:mt-20 mt-10">

//         <div className="w-[90%] lg:w-[80%] mx-auto flex flex-col lg:flex-row py-20 space-y-10 lg:space-y-0">

//           {/* LEFT SIDE */}
//           <div className="flex flex-col justify-start space-y-20 pb-10 lg:w-1/2">

//             {/* Logos */}
//             <Image
//               src="/logo.png"
//               alt="Royal Stay"
//               width={400}
//               height={200}
//               className="hidden lg:block"
//               sizes="(max-width: 1028px) 250px, 400px"
//             />

//             <Image
//               src="/logo.png"
//               alt="Royal Stay"
//               width={250}
//               height={100}
//               className="lg:hidden block"
//               sizes="(max-width: 768px) 250px, 300px"
//             />

//             <h2 className={`${oswald.className} antialiased ${style.royalcolor} text-[25px] lg:text-[34px] font-bold`}>
//               {t("footer.section2_title")}
//             </h2>
//           </div>


//           {/* RIGHT SIDE CONTACT INFO */}
//           <div className={`${inter.className} text-[16px] antialiased text-white space-y-5 flex flex-col lg:p-16 lg:w-1/2 justify-start items-start lg:items-end`}>

//             <div className="flex items-center">
//               <Image src="/local.webp" alt="" width={25} height={20} className="object-contain mr-5" />
//               <p>Palermo, Buenos Aires</p>
//             </div>

//             <div className="flex items-center">
//               <Image src="/call.webp" alt="" width={25} height={20} className="object-cover mr-5" />
//               <p>+54 9 (3472) 554912</p>
//             </div>

//             <div className="flex items-center">
//               <Image src="/call.webp" alt="" width={25} height={20} className="object-cover mr-5" />
//               <p>+54 9 (3525) 405277</p>
//             </div>

//             <div className="flex items-center">
//               <Image src="/insta.webp" alt="" width={25} height={20} className="object-cover mr-5" />
//               <p className={style.royalcolor}>@royalstayba</p>
//             </div>

//           </div>
//         </div>

//         <span className={`${inter.className} text-white text-[12px] flex justify-center pb-5`}>
//           {t("footer.copy")}
//         </span>

//       </section>
//     </div>
//   )
// }

// export default Footer

"use client"

import React from 'react'
import { inter } from '../layout'
import { oswald } from '../layout'
import style from '@/styles/home.module.css'
import Button from './Button'
import Image from 'next/image'
import { useTranslation } from "react-i18next"
import Link from "next/link"

const Footer = () => {
  const { t } = useTranslation()

  return (
    <div className="w-full mt-25 bg-white">

      {/* SECTION 1 */}
      <section className="border border-[#c8a951] bg-white max-w-[90%] lg:max-w-[80%] mx-auto py-25 px-5 lg:h-80 flex flex-col justify-center items-center text-center">
        <h2 className={`${oswald.className} antialiased ${style.royalcolor} text-[36px] lg:text-[58px] font-bold leading-[1.3]`}>
          {t("footer.section1_title")}
        </h2>

        <p className={`${inter.className} antialiased ${style.textcolor} text-[16px] mt-5`}>
          {t("footer.section1_subtitle")}
        </p>

        <div className={`${inter.className} mt-10`}>
          <Button href="https://api.whatsapp.com/send?phone=5493472554912&text=¡Hola!%20Quisiera%20reservar%20una%20experiencia%20en%20Royal%20Stay.">
            {t("footer.section1_button")}
          </Button>
        </div>
      </section>


      {/* SECTION 2 */}
      <section id="contact" className="w-full flex flex-col bg-[#1a1a1a] lg:mt-20 mt-10">

        <div className="w-[90%] lg:w-[80%] mx-auto flex flex-col lg:flex-row py-20 space-y-10 lg:space-y-0">

          {/* LEFT SIDE */}
          <div className="flex flex-col justify-center items-center space-y-20 pb-10 lg:w-1/2  ">

            {/* Logos */}
            <Image
              src="/logo.png"
              alt="Royal Stay"
              width={400}
              height={200}
              className="hidden lg:block"
              style={{ width: "auto", height: "auto" }}
              sizes="(max-width: 1028px) 250px, 400px"
            />

            <Image
              src="/logo.png"
              alt="Royal Stay"
              width={250}
              height={100}
              className="lg:hidden block"
              style={{ width: "auto", height: "auto" }}
              sizes="(max-width: 768px) 250px, 300px"
            />

            <h2 className={`${oswald.className} antialiased ${style.royalcolor} text-[25px] lg:text-[34px] font-bold`}>
              {t("footer.section2_title")}
            </h2>
          </div>


          {/* RIGHT SIDE CONTACT INFO */}
          <div className={`${inter.className} text-[16px] antialiased text-white space-y-5 flex flex-col lg:p-16 lg:w-1/2 justify-start items-start lg:items-end`}>

            <div className="flex items-center">
              <Image
                src="/local.webp"
                alt=""
                width={25}
                height={20}
                className="object-contain mr-5"
                style={{ width: "auto", height: "auto" }}
              />
              <p>Palermo, Buenos Aires</p>
            </div>

            <div className="flex items-center">
              <Image
                src="/call.webp"
                alt=""
                width={25}
                height={20}
                className="object-contain mr-5"
                style={{ width: "auto", height: "auto" }}
              />
              <p>+54 9 (3472) 554912</p>
            </div>

            <div className="flex items-center">
              <Image
                src="/call.webp"
                alt=""
                width={25}
                height={20}
                className="object-contain mr-5"
                style={{ width: "auto", height: "auto" }}
              />
              <p>+54 9 (3525) 405277</p>
            </div>

            <div className="flex items-center">
              <Image
src="/insta.webp"
                alt=""
                width={25}
                height={20}
                className="object-contain mr-5"
                style={{ width: "auto", height: "auto" }}
     
              />
                        <Link href="https://www.instagram.com/royalstayba/">
  <p className={style.royalcolor}>@royalstayba</p>
</Link>
            {/* <p className={style.royalcolor}>@royalstayba</p> */}
            </div>

          </div>
        </div>

        <span className={`${inter.className} text-white text-[12px] flex justify-center pb-5`}>
          {t("footer.copy")}
        </span>

      </section>
    </div>
  )
}

export default Footer


