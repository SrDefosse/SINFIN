import Navbar from './components/layout/Navbar'
import AnimatedFolders from './components/home/AnimatedFolders'
import Hero from './components/home/Hero'
import MasQueUnaAgencia from './components/home/MasQueUnaAgencia'

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
    </div>
  )
}

export default App
