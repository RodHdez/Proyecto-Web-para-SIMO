import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from './Componentes/NavBar'
import Home from './Paginas/Home'
import Conocenos from './Paginas/Conocenos'
import Corporativa from './Paginas/Corporativa'
import Socios from './Paginas/Socios'
import Contacto from './Paginas/Contacto'

export default function App(){
  return(

     <BrowserRouter>
    <NavBar />
    <Routes>
    <Route path="/"   element={<Home />}  />
    <Route path="/Conocenos"   element={<Conocenos />}  />
    <Route path="/Socios"   element={<Socios />}  />
    <Route path="/Corporativa"   element={<Corporativa />}  />
    <Route path="/Contacto"   element={<Contacto />}  />
    </Routes>
    </BrowserRouter> 
  )
}
