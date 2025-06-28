import Home from './Pages/Home'
import PNF from './Pages/PNF'
import { Route, Routes } from "react-router-dom"
import FloatingButtons from "./Components/FloatingButtons"
import HeroSlider from './Components/HeroSlider'

function App() {

  return (
    <>
    {/* <FloatingButtons/> */}
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="*" element={<PNF/>}/>
     </Routes>
    </>
  )
}

export default App
