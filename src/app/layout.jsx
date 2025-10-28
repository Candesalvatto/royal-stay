import "./globals.css";
import {Inter, Oswald} from "next/font/google"
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";




// export const metadata = {
//   title: "Royal Stay",
//   description: "Experiencias para vivir Buenos Aires",
//   keywords: ["experiencias", "buenos aires"],
//   openGraph: {
//     title: "Royal Stay",
//     description: "Experiencias para vivir Buenos Aires",
//     type: "website",
//   },
//   locale: "es_ES",
// };

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