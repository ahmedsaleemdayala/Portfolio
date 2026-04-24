import React from 'react'
import Navbar from './Shared/NavBar'
import Hero from './Layout/Hero'
import Projects from './Layout/Project'
import TechEcoSystem from './Layout/Skills'
import Stats from './Layout/Stats'
import Testimonials from './Layout/Testimonials'
import Team from './Layout/Team'
import Contact from './Layout/Contact'




const App = () => {
  return (
    <div className="bg-[#0f172a] min-h-screen">
      <Navbar />
      <Hero />
      <Projects />
      <TechEcoSystem />
      <Stats />
      <Testimonials />
    
      <Contact />


    </div>
  )
}

export default App


