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
    <footer className="w-full mt-25 bg-white">

      {/* SECTION 1 */}
      <section className="border border-[#c8a951] bg-white max-w-[90%] lg:max-w-[80%] mx-auto py-20 px-5 flex flex-col justify-center items-center text-center">
        
        <h2 className={`${oswald.className} ${style.royalcolor} text-[32px] lg:text-[50px] font-bold leading-[1.3]`}>
          {t("footer.section1_title")}
        </h2>

        <p className={`${inter.className} ${style.textcolor} text-[16px] mt-4 max-w-[600px]`}>
          {t("footer.section1_subtitle")}
        </p>

        <div className={`${inter.className} mt-8`}>
          <Button href="https://api.whatsapp.com/send?phone=5493472554912&text=¡Hola!%20Quisiera%20reservar%20una%20experiencia%20en%20Royal%20Stay.">
            {t("footer.section1_button")}
          </Button>
        </div>
      </section>


      {/* SECTION 2 */}
      <section id="contact" className="bg-[#1a1a1a] mt-10 lg:mt-20 w-full  flex flex-col justify-between scroll-mt-[120px]">

        <div className="w-[90%]  py-15 lg:w-[80%] mx-auto flex flex-col lg:flex-row justify-between items-center">

          {/* LEFT */}
          <div className="flex flex-col items-center lg:items-start space-y-6 w-full lg:w-1/2">

            <Image
              src="/logo.png"
              alt="Royal Stay"
              width={200}
              height={80}
              className="object-contain"
              style={{ width: "auto", height: "auto" }}
            />

            <h2 className={`${oswald.className} ${style.royalcolor} text-[24px] lg:text-[30px] font-bold text-center lg:text-left`}>
              {t("footer.section2_title")}
            </h2>

          </div>


          {/* RIGHT INFORMATION */}
          <div 
            className={`${inter.className}  text-white text-[15px] space-y-4 mt-10 lg:mt-0 w-full lg:w-1/2 flex flex-col items-center lg:items-end`}
          >

            <div className="flex items-center">
              <Image src="/local.webp" alt="" width={22} height={22} className="mr-3" />
              <p>Palermo, Buenos Aires</p>
            </div>

            <div className="flex items-center">
              <Image src="/call.webp" alt="" width={22} height={22} className="mr-3" />
              <p>+54 9 (3472) 554912</p>
            </div>

            <div className="flex items-center">
              <Image src="/call.webp" alt="" width={22} height={22} className="mr-3" />
              <p>+54 9 (3525) 405277</p>
            </div>

            <div className="flex items-center">
              <Image src="/insta.webp" alt="" width={22} height={22} className="mr-3" />
              <Link href="https://www.instagram.com/royalstayba/">
                <p className={`${style.royalcolor}`}>@royalstayba</p>
              </Link>
            </div>

          </div>
        </div>

        <div className="text-center mt-10 ">
          <span className={`${inter.className} text-white text-[12px]`}>
            {t("footer.copy")}
          </span>
        </div>

      </section>
    </footer>
  )
}

export default Footer



