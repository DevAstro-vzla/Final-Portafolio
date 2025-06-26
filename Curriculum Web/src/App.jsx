import { useState } from "react"
import NavBar from "./Components/Sections/NavBar"
import Hero from "./Components/Sections/Hero"
import AboutMe from "./Components/Sections/AboutMe"
import { useFrame,Canvas } from '@react-three/fiber'
import Aditional from "./Components/Sections/Aditional"

function App() {


  return (
    <>
        <NavBar></NavBar>
        <Hero></Hero>
        <AboutMe></AboutMe>
        <Aditional></Aditional>
    </>
  )
}

export default App
