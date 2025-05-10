import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Magro from './pages/Magro'
import Normal from './pages/Normal'
import Obeso from './pages/Obeso'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/magro" element={<Magro />} />
        <Route path="/normal" element={<Normal />} />
        <Route path="/obeso" element={<Obeso />} />
      </Routes>
    </>
  )
}

export default App
