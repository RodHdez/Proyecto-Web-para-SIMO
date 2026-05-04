import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import NavBar from './Componentes/NavBar'
import Home from './Paginas/Home'
import Conocenos from './Paginas/Conocenos'
import Corporativa from './Paginas/Corporativa'
import Socios from './Paginas/Socios'
import Contacto from './Paginas/Contacto'

// Componente separado para que useLocation este dentro del BrowserRouter
function AppContent() {
  const location = useLocation();
  return (
    <>
      <NavBar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/"            element={<Home />}        />
          <Route path="/Conocenos"   element={<Conocenos />}   />
          <Route path="/Socios"      element={<Socios />}      />
          <Route path="/Corporativa" element={<Corporativa />} />
          <Route path="/Contacto"    element={<Contacto />}    />
        </Routes>
      </AnimatePresence>
    </>
  )
}

// BrowserRouter envuelve todo para que useLocation funcione dentro de AppContent
export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}