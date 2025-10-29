import React from 'react'



export const metadata = {
  title: "Royal Stay",
  description: "Experiencias para vivir Buenos Aires",
  keywords: ["experiencias", "buenos aires"],
  openGraph: {
    title: "Royal Stay",
    description: "Experiencias para vivir Buenos Aires",
    type: "website",
  },
  locale: "es_ES",
};


const layoutExp = ({ children }) => {
  return (
    <div>
        { children }
    </div>
  )
}

export default layoutExp