import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Footer from './Components/Footer'
import Contents2 from './Components/Contents2'
import Contents from './Components/Contents'
import About from './Components/About'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="overflow-x-hidden">
      <style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;700&display=swap');
</style>
       <Navbar />
       <Hero />
       <About id="Contact"/>
       <Contents id="Aspects"/>
       <Contents2  id="Gallery"/>
       <Footer id="Footer" /> 
    </div>
  )
}

export default App
