// "use client";


// import { I18nextProvider } from "react-i18next";
// import i18n from "../../i18n/index";

// export default function I18nProvider({ children }) {
//   return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
// }

"use client";

import { I18nextProvider } from "react-i18next";
import i18n from "../../i18n";
import { useEffect } from "react";

export default function I18nProvider({ children }) {

  // Solo asegura la inicialización una vez en cliente
  useEffect(() => {
    if (!i18n.isInitialized) {
      i18n.init();
    }
  }, []);

  // Nunca mostramos "null" → evitamos hydration mismatch
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}

