import React from 'react'
import HomePage from './homepage/page'


export const metadata = {
  title: "Royal Stay",
  description: "Experiencias para vivir Buenos Aires",
  keywords: ["experiencias", "buenos aires"],
  openGraph: {
    title: "Royal Stay",
    description: "Experiencias para vivir Buenos Aires",
    type: "website",
  }

};


const Home = () => {
  return (
    <div>
<HomePage/>
    </div>
  )
}

export default Home