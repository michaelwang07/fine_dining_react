import React from 'react'
import './app.css'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import About from './components/About/About'
import SpecialMenu from './components/Menu/SpecialMenu'
import Chef from './components/Chef/Chef'
import Intro from './components/Intro/Intro'

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <SpecialMenu />
      <Chef />
      <Intro />
    </div>
  )
}

export default App