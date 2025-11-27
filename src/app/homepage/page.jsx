'use client';

import React from 'react';
import style from '@/styles/home.module.css';
import { oswald, inter } from '../layout';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../components/Button';
import AOSProvider from '../components/AOSProvider';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <AOSProvider>
      <div className="bg-white mt-35">

        {/* HERO */}
        <div className="max-w-9/10 lg:max-w-8/10 mx-auto flex flex-col lg:flex-row items-start lg:items-end lg:justify-between mb-7 lg:mt-50 lg:mb-15 space-x-10">
          <h1
            data-aos="fade-right"
            className={`${oswald.className} antialiased ${style.royalcolor} uppercase text-[54px] lg:text-[85px] md:w-3/4 font-bold leading-[1.1]`}
          >
            {t("home.title")}
          </h1>

          <p
            data-aos="fade-left"
            className={`${inter.className} antialiased ${style.textcolor} text-[16px] lg:w-1/4 mt-5`}
          >
            {t("home.subtitle")}
          </p>
        </div>

        {/* BANNER IMAGES */}
        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <Image
            src="/hero-desktop-ba.webp"
            alt="Buenos Aires"
            width={1920}
            height={260}
            className="hidden md:block w-full h-auto object-cover"
            priority
          />

          <Image
            src="/hero-mobile-3.webp"
            alt="Buenos Aires"
            width={560}
            height={420}
            className="block md:hidden w-full h-auto object-cover"
            priority
          />
        </div>

        {/* SECTION 2 */}
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          className="border-t border-[#c8a951] mt-15 lg:mt-30 lg:mb-20 max-w-9/10 lg:max-w-8/10 mx-auto flex flex-col lg:flex-row lg:justify-between lg:items-end"
        >
          <h2
            className={`${oswald.className} antialiased ${style.royalcolor} text-[36px] lg:text-[58px] font-bold mt-5 lg:mt-10 lg:w-2/3 leading-[1.3]`}
          >
            {t("home.section2_title")}
          </h2>

          <div className={`${inter.className} mt-10`}>
            <Button href="/experiences">
              {t("home.section2_button")}
            </Button>
          </div>
        </div>

        {/* GRID */}
        <section
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          className="mt-15 max-w-9/10 lg:max-w-8/10 mx-auto grid md:grid-cols-2 md:gap-15 gap-10"
        >

          {/* ITEM 1 */}
          <Link href="/experiences">
            <div>
              <Image
                src="/masajes.webp"
                alt="Masajes Relajantes"
                width={700}
                height={700}
                className="w-full h-auto object-cover"
                priority
              />
              <h3 className={`${oswald.className} antialiased ${style.royalcolor} text-[20px] lg:text-[28px] font-bold mt-5`}>
                {t("home.grid.massage_title")}
              </h3>
              <p className={`${inter.className} antialiased ${style.textcolor} text-[16px] mt-2 lg:mt-3`}>
                {t("home.grid.massage_text")}
              </p>
            </div>
          </Link>

          {/* ITEM 2 */}
          <Link href="/experiences">
            <div>
              <Image
                src="/paseos.webp"
                alt="Paseos en bicicleta"
                width={700}
                height={700}
                className="w-full h-auto object-cover"
                priority
              />
              <h3 className={`${oswald.className} antialiased ${style.royalcolor} text-[20px] lg:text-[28px] font-bold mt-5`}>
                {t("home.grid.bike_title")}
              </h3>
              <p className={`${inter.className} antialiased ${style.textcolor} text-[16px] mt-2 lg:mt-3`}>
                {t("home.grid.bike_text")}
              </p>
            </div>
          </Link>

          {/* ITEM 3 */}
          <Link href="/experiences">
            <div>
              <Image
                src="/cancha.jpg"
                alt="Cancha de futbol"
                width={700}
                height={700}
                className="w-full h-auto object-cover"
                priority
              />
              <h3 className={`${oswald.className} antialiased ${style.royalcolor} text-[20px] lg:text-[28px] font-bold mt-5`}>
                {t("home.grid.football_title")}
              </h3>
              <p className={`${inter.className} antialiased ${style.textcolor} text-[16px] mt-2 lg:mt-3`}>
                {t("home.grid.football_text")}
              </p>
            </div>
          </Link>

          {/* ITEM 4 */}
          <Link href="/experiences">
            <div>
              <Image
                src="/vinos.jpg"
                alt="Cata de vinos"
                width={700}
                height={700}
                className="w-full h-auto object-cover"
                priority
              />
              <h3 className={`${oswald.className} antialiased ${style.royalcolor} text-[20px] lg:text-[28px] font-bold mt-5`}>
                {t("home.grid.wine_title")}
              </h3>
              <p className={`${inter.className} antialiased ${style.textcolor} text-[16px] mt-2 lg:mt-3`}>
                {t("home.grid.wine_text")}
              </p>
            </div>
          </Link>
        </section>

        {/* HOW IT WORKS */}
        <section
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          className="border-t border-[#c8a951] max-w-9/10 lg:max-w-8/10 mx-auto mt-20 lg:mt-30 lg:mb-10"
        >
          <h2 className={`${oswald.className} antialiased ${style.royalcolor} text-[36px] lg:text-[58px] font-bold mt-5 lg:w-2/3 leading-[1.3]`}>
            {t("home.how_title")}
          </h2>

          <p className={`${inter.className} antialiased ${style.textcolor} text-[16px] mt-7`}>
            {t("home.how_text")}
          </p>
        </section>

        {/* STEPS */}
        <section className="max-w-9/10 lg:max-w-8/10 mx-auto md:mt-10 lg:mb-10 grid lg:grid-cols-3 md:gap-4 gap-1">

          {/* STEP 1 */}
          <div className="lg:mt-5 lg:mb-5 mt-5 mb-2">
            <div className="flex flex-row items-center">
              <p className={`${oswald.className} antialiased ${style.royalcolor} mr-4 text-[16px] md:text-[20px] font-light border border-[#c8a951] px-3 py-2`}>
                01
              </p>
              <h4 className={`${oswald.className} antialiased ${style.royalcolor} text-[20px] md:text-[28px] font-bold`}>
                {t("home.steps.step1_title")}
              </h4>
            </div>
            <p className={`${inter.className} antialiased ${style.textcolor} text-[16px] mt-5`}>
              {t("home.steps.step1_text")}
            </p>
          </div>

          {/* STEP 2 */}
          <div className="md:mt-5 md:mb-5 mt-3 mb-2">
            <div className="flex flex-row items-center">
              <p className={`${oswald.className} antialiased ${style.royalcolor} mr-4 text-[16px] md:text-[20px] font-light border border-[#c8a951] px-3 py-2`}>
                02
              </p>
              <h4 className={`${oswald.className} antialiased ${style.royalcolor} text-[20px] md:text-[28px] font-bold`}>
                {t("home.steps.step2_title")}
              </h4>
            </div>
            <p className={`${inter.className} antialiased ${style.textcolor} text-[16px] mt-5`}>
              {t("home.steps.step2_text")}
            </p>
          </div>

          {/* STEP 3 */}
          <div className="md:mt-5 md:mb-5 mt-3 mb-2">
            <div className="flex flex-row items-center">
              <p className={`${oswald.className} antialiased ${style.royalcolor} mr-4 text-[16px] md:text-[20px] font-light border border-[#c8a951] px-3 py-2`}>
                03
              </p>
              <h4 className={`${oswald.className} antialiased ${style.royalcolor} text-[20px] md:text-[28px] font-bold`}>
                {t("home.steps.step3_title")}
              </h4>
            </div>
            <p className={`${inter.className} antialiased ${style.textcolor} text-[16px] mt-5`}>
              {t("home.steps.step3_text")}
            </p>
          </div>
        </section>

        {/* FINAL SECTION */}
        <section
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          className="gap-5 max-w-9/10 lg:max-w-8/10 mx-auto mt-10 mb-10 flex flex-col-reverse lg:flex-row lg:justify-center lg:items-center"
        >
          {/* IMAGES GRID */}
          <div className="grid lg:w-1/2 gap-5 lg:grid-cols-2 lg:gap-2 z-0 lg:items-stretch">

            <div className="flex flex-col gap-2 items-center">
              <Image
                src="/cancha-2.webp"
                alt=""
                width={400}
                height={300}
                className="hidden md:block w-full h-auto object-cover"
                priority
              />

              <Image
                src="/cancha-2.webp"
                alt=""
                width={400}
                height={400}
                className="block md:hidden w-full h-auto object-cover"
                priority
              />

              <Image
                src="/palermo.webp"
                alt=""
                width={400}
                height={300}
                className="hidden md:block w-full h-auto object-cover"
                priority
              />
            </div>

            <div className="items-center">
              <Image
                src="/palermo.webp"
                alt=""
                width={400}
                height={400}
                className="block md:hidden w-full h-auto object-cover"
                priority
              />

              <Image
                src="/bandera.webp"
                alt=""
                width={400}
                height={620}
                className="hidden md:block w-full h-auto object-cover"
                priority
              />
            </div>

            <Image
              src="/bandera-2.webp"
              alt=""
              width={400}
              height={400}
              className="block md:hidden w-full h-auto object-cover"
              priority
            />
          </div>

          {/* TEXT BLOCK */}
          <div className="border border-[#c8a951] lg:px-15 mx-auto lg:w-1/2 py-15 px-5 flex flex-col justify-center z-10">
            <h2 className={`${oswald.className} antialiased ${style.royalcolor} text-[36px] lg:text-[58px] font-bold leading-[1.3]`}>
              {t("home.final_section_title")}
            </h2>

            <p className={`${inter.className} antialiased ${style.textcolor} text-[16px] mt-5`}>
              {t("home.final_section_text")}
            </p>

            <div className={`${inter.className} mt-10`}>
              <Button href="/aboutus">
                {t("home.final_section_button")}
              </Button>
            </div>
          </div>
        </section>

      </div>
    </AOSProvider>
  );
};

export default HomePage;
