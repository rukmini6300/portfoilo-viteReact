import Navbar from './Componets/Navbar/Navbar'
import Hero from './Componets/Hero/Hero'
import About from './Componets/About/About'
import Services from './Componets/Services/Services'
import MyWork from './Componets/MyWork/MyWork'
import Contact from './Componets/Contact/Contact'
import Footer from './Componets/Footer/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <MyWork />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
