import NavBar from "./Components/Sections/NavBar"
import Hero from "./Components/Sections/Hero"
import AboutMe from "./Components/Sections/AboutMe"
import Aditional from "./Components/Sections/Aditional"


function App() {

  return (
    <>

      <NavBar></NavBar>
      <section id="inicio">
        <Hero></Hero>
      </section>
      <section id="sobreMi">
        <AboutMe></AboutMe>
      </section>
      <section id="contacto">
        <Aditional></Aditional>
      </section>

    </>
  )
}

export default App
