import React from 'react'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Navbar from './Component/Navbar'

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutus" element={<About />} />
      <Route path="/contactus" element={<Contact />} />
    </Routes>
    </>
  )
}

export default App
