import React from 'react'
import './App.css'
import './app.scss'

import Header from './Components/Header'
import SectionSaibaMais from './Components/SectionSaibaMais'

import SectionCuriosidades from './Components/SectionCuriosidades'
import Footer from './Components/Footer'

function App() {
  return (
    <>
      <Header/>

      <main>
        <SectionSaibaMais/>

        <SectionCuriosidades/>
      </main>

      <Footer/>
    </>
  )
}

export default App
