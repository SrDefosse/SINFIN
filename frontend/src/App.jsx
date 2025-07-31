import Navbar from './components/layout/Navbar'
import AnimatedFolders from './components/home/AnimatedFolders'
import Hero from './components/home/Hero'
import MasQueUnaAgencia from './components/home/MasQueUnaAgencia'
import HoverSliderDemo from './components/home/HoverSlider'
import Galeria from './components/home/Galeria'
import Testimonios from './components/home/Testimonios'
import Logos from './components/home/Clientes'
import SeccionCTA from './components/home/SeccionCTA'
import Contacto from './components/home/Contacto'
import Footer from './components/layout/Footer'

function App() {


  return (
    <div>
      <Navbar />
      <div>
        <Hero />
      </div>
      <div>
        <AnimatedFolders />
      </div>
      <div>
        <MasQueUnaAgencia />
      </div>
      <div>
        <HoverSliderDemo />
      </div>
      <div>
        <Galeria />
      </div>
      <div>
        <Testimonios />
      </div>
      <div>
        <Logos />
      </div>
      <div>
        <SeccionCTA />
      </div>
      <div>
        <Contacto />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default App
