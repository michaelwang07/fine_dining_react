import React from 'react'
import './app.css'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import About from './components/About/About'
import SpecialMenu from './components/Menu/SpecialMenu'

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <SpecialMenu />
    </div>
  )
}

export default App