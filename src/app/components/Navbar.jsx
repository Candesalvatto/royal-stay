'use client'

import React, { useState } from 'react'
import { inter } from '../layout'
import Image from "next/image"
import Link from "next/link"
import Button from './Button'
import { usePathname } from 'next/navigation'
import LanguageSwitcher from "./LanguageSwitcher"
import { useTranslation } from "react-i18next"

const Navbar = () => {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const { t } = useTranslation()

  const links = [
    { href: "/experiences", label: t("navbar.experiences") },
    { href: "/aboutus", label: t("navbar.about") },
    { href: "#contact", label: t("navbar.contact") }
  ]

  return (
    <div>

      {/* NAV DESKTOP */}
      <nav className="fixed top-0 left-0 w-full bg-white z-50 hidden lg:block">
        <div className="flex items-center justify-between max-w-[80%] lg:max-w-[90%] mx-auto border-b border-[#c8a951] px-2 py-5">

          {/* LOGO */}
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Royal Stay Logo"
              width={200}
              height={200}
              priority
              sizes="(max-width: 768px) 150px, 200px"
              style={{ height: "auto" }}
            />
          </Link>

          {/* LINKS */}
          <div className="hidden md:flex items-center space-x-8 uppercase text-[15px] tracking-wider">
            {links.map(link => (
              <Link
                key={link.label}
                href={link.href}
                className={`hover:text-[#c8a951] transition ${
                  pathname === link.href ? 'text-[#c8a951]' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + LANG */}
          <div className={`${inter.className} flex flex-row items-center space-x-4`}>
            <Button href="https://api.whatsapp.com/send?phone=5493472554912&text=¡Hola!%20Quisiera%20reservar%20una%20experiencia%20en%20Royal%20Stay.">
              {t("navbar.bookNow")}
            </Button>

            <LanguageSwitcher />
          </div>
        </div>
      </nav>


      {/* NAV MOBILE (HEADER) */}
      <nav className="lg:hidden fixed top-0 left-0 w-full z-50 bg-white flex items-center justify-between px-3 py-4 border-b border-[#c8a951]">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Royal Stay Logo"
            width={200}
            height={200}
            style={{ height: "auto" }}
          />
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="focus:outline-none"
        >
          {menuOpen ? (
            <Image
              src="/menu-close.png"
              alt="Cerrar menú"
              width={20}
              height={20}
              style={{ height: "auto" }}
            />
          ) : (
            <Image
              src="/menu-open.png"
              alt="Abrir menú"
              width={40}
              height={40}
              style={{ height: "auto" }}
            />
          )}
        </button>
      </nav>


      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="lg:hidden fixed top-[70px] left-0 w-full z-50 flex flex-col items-start bg-white py-5 px-5 space-y-3 border-b border-[#c8a951]">

          {links.map(link => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-[#171717] hover:text-[#c8a951] text-[15px] tracking-wide transition py-2 ${
                pathname === link.href ? 'text-[#c8a951]' : ''
              }`}
            >
              {link.label}
            </Link>
          ))}

          <Button
            href="https://api.whatsapp.com/send?phone=5493472554912&text=¡Hola!%20Quisiera%20reservar%20una%20experiencia%20en%20Royal%20Stay."
            className="bg-[#c8a951] text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            {t("navbar.bookNow")}
          </Button>

          <LanguageSwitcher />
        </div>
      )}
    </div>
  )
}

export default Navbar
