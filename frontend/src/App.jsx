
import './App.css'
import Navbar from './components/layout/Navbar'
import Hero from './components/home/Hero'
import AnimatedFolders from './components/home/AnimatedFolders'
import MasQueUnaAgencia from './components/home/MasQueUnaAgencia'

function App() {

  return (
    <div>
      <Navbar/>
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
