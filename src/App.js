import React from 'react'
import './app.css'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import About from './components/About/About'
import SpecialMenu from './components/Menu/SpecialMenu'
import Chef from './components/Chef/Chef'
import Intro from './components/Intro/Intro'
import Laurels from './components/Laurels/Laurels'
import Gallery from './components/Gallery/Gallery'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  )
}

export default App