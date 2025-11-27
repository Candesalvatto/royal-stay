import React from 'react'

export const metadata = {
  title: "Home",
  description: "Experiencias para vivir Buenos Aires",
  keywords: ["experiencias", "buenos aires"],
  openGraph: {
    title: "Royal Stay",
    description: "Experiencias para vivir Buenos Aires",
    type: "website",
  },
  locale: "es_ES",
};


export default function Layout({ children }) {
  return (
   <div>
        { children }
    </div>
  );
}