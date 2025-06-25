import { useState } from "react"
import NavBar from "./Components/Sections/NavBar"
import Hero from "./Components/Sections/Hero"
import TextSlider from "./Components/Sections/TextSlider"

function App() {


  return (
    <>
      <div className="flex flex-col">
        <NavBar></NavBar>
        <Hero></Hero>
        <TextSlider></TextSlider>
      </div>
    </>
  )
}

export default App
