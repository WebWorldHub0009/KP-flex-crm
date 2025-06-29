import Home from './Pages/Home'
import PNF from './Pages/PNF'
import { Route, Routes } from "react-router-dom"


function App() {

  return (
    <>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="*" element={<PNF/>}/>
     </Routes>
    </>
  )
}

export default App
