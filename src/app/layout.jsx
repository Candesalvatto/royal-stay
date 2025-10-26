import "./globals.css";
import {Inter, Oswald} from "next/font/google"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";




export const metadata = {
  title: "Royal Stay",
  description: "Experiencias para vivir Buenos Aires ",
  type: "website",
  keywords: ["experiencias", "buenos aires"],
  locale:"es_ES"
};

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
      <body className="bg-white" >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
