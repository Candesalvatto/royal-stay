// 'use client';
// import { useTranslation } from "react-i18next";
// import Image from "next/image";

// export default function LanguageSwitcher() {
//   const { i18n } = useTranslation();

//   const toggleLanguage = () => {
//     const next = i18n.language === "es" ? "en" : "es";
//     i18n.changeLanguage(next);
//   };

//   return (
//     <button 
//       onClick={toggleLanguage}
//       className="px-3 flex flex-row justify-center items-center cursor-pointer"
//     >
//         <Image
//                         src='/internet.png'
//                         alt=' '
//                         width={20}
//                         height={20}
//                         className=' object-cover mr-2
//                                       sm:w-20 sm:h-20
//                                       md:w-7 md:h-7
//                                     lg:w-7 lg:h-7 '
//                         />

//       {i18n.language === "es" ? "EN" : "ES"}
//     </button>
//   );
// }

"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const next = i18n.language === "es" ? "en" : "es";
    i18n.changeLanguage(next);
  };

  return (
    <button 
      onClick={toggleLanguage}
      className="px-3 flex flex-row justify-center items-center cursor-pointer text-[#1a1a1a] " 
    >
      <Image
        src="/internet.png"
        alt="idioma"
        width={20}
        height={20}
        className="object-cover mr-2 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-7 lg:h-7"
        style={{ height: "auto", width: "auto" }}
      />
      {i18n.language === "es" ? "EN" : "ES"}
    </button>
  );
}
