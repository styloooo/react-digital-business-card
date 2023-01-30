import { useState } from 'react'

import About from './components/About.jsx'
import Info from './components/Info.jsx'
import Interests from './components/Interests.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="app--cardContainer">
        <Info />
        <div className="mainAppText">
          <About />
          <Interests />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App
