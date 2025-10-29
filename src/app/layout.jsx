import "./globals.css";
import {Inter, Oswald} from "next/font/google"
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";



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
    <html lang="es">
      <body className={`bg-white ${inter.className}`} >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}