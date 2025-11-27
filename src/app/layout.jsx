
import "./globals.css";
import {Inter, Oswald} from "next/font/google"
 import Footer from "./components/Footer";
 import Navbar from "./components/Navbar";
 import I18nProvider from "./components/I18nProvider";



export const inter = Inter({
  subsets: ["latin"],
  weight: ["400"]
})

export const oswald = Oswald({
  subsets: ["latin"],
  weight: ["700"]
})


export default function RootLayout({ children }) {
  return (
    <html lang="es" className="bg-white dark:bg-white">
      <body
        className={`bg-white ${inter.className}`}
        suppressHydrationWarning
      >
        <I18nProvider>
          <Navbar />
          {children}
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}