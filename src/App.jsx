import React from 'react'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Project';
import Contact from './Components/Contact';

function App() {


  return (
    <>
     <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
     <Footer/>
    </>
  )
}

export default App
