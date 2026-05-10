import TransiciondePag from "../Componentes/TransiciondePag";
import Footer from "../Componentes/Footer";
import { useNavigate } from "react-router-dom";
import "./Corporativa.css";

export default function Corporativa() {
  const navigate = useNavigate();

  return (
    <TransiciondePag>
      <div className="corporativa-contenedor">
        
        {/* ── seccion hero principal ── */}
        <section className="corp-hero">
          <h1>ECOSISTEMA CORPORATIVO</h1>
          <p className="corp-subtitulo">
            Ingeniería de procesos de alto impacto para instituciones
          </p>
        </section>

        {/* ── seccion de grid de sectores (con imagenes de fondo e iconos) ── */}
        <section className="corp-sectores">
          <div className="sectores-grid">
            
            {/* sector gobierno */}
            <div className="sector-card" style={{ backgroundImage: "url('/src/assets/sector01.png')" }}>
              {/* icono de la esquina superior derecha */}
              <img src="/src/assets/IconSector01.png" alt="icono gobierno" className="sector-icono-esquina" />
              
              <div className="sector-contenido">
                <span className="sector-badge">01</span>
                <h3>GOBIERNO</h3>
              </div>
            </div>
            
            {/* sector financiero */}
            <div className="sector-card" style={{ backgroundImage: "url('/src/assets/sector02.png')" }}>
              {/* icono de la esquina superior derecha */}
              <img src="/src/assets/IconSector02.png" alt="icono financiero" className="sector-icono-esquina" />
              
              <div className="sector-contenido">
                <span className="sector-badge">02</span>
                <h3>FINANCIERO</h3>
              </div>
            </div>
            
            {/* sector privado */}
            <div className="sector-card" style={{ backgroundImage: "url('/src/assets/sector03.png')" }}>
              {/* icono de la esquina superior derecha */}
              <img src="/src/assets/IconSector03.png" alt="icono privado" className="sector-icono-esquina" />
              
              <div className="sector-contenido">
                <span className="sector-badge">03</span>
                <h3>PRIVADO</h3>
              </div>
            </div>
            
          </div>
        </section>

        {/* ── seccion "nuestro enfoque" ── */}
        <section className="corp-enfoque">
          <h2>NUESTRO ENFOQUE</h2>
          <p className="enfoque-intro">
            Cada decisión de ingeniería corporativa que tomamos se rige por un 
            protocolo estricto diseñado para maximizar el rendimiento y la 
            seguridad de los activos digitales de la institución.
          </p>
          <div className="enfoque-grid">
            
            {/* tarjeta paso 1: analisis */}
            <div className="enfoque-paso">
              <div className="paso-badge">1</div>
              <h4>STEP // 01</h4>
              <h3>ANÁLISIS</h3>
              <p>Auditoría profunda de infraestructuras existentes y detección de cuellos de botella operativos.</p>
            </div>
            
            {/* tarjeta paso 2: planificacion */}
            <div className="enfoque-paso">
              <div className="paso-badge">2</div>
              <h4>STEP // 02</h4>
              <h3>PLANIFICACIÓN</h3>
              <p>Arquitectura de soluciones a medida con proyección de escalabilidad a 10 años.</p>
            </div>
            
            {/* tarjeta paso 3: ejecucion */}
            <div className="enfoque-paso">
              <div className="paso-badge">3</div>
              <h4>STEP // 03</h4>
              <h3>EJECUCIÓN</h3>
              <p>Implementación técnica por escuadrones especializados bajo metodologías ágiles de ingeniería.</p>
            </div>
            
            {/* tarjeta paso 4: soporte */}
            <div className="enfoque-paso">
              <div className="paso-badge">4</div>
              <h4>STEP // 04</h4>
              <h3>SOPORTE</h3>
              <p>Monitoreo 24/7 y optimización continua de activos digitales mediante IA predictiva.</p>
            </div>
            
          </div>
        </section>

        {/* ── llamado a la accion final (cta) ── */}
        <section className="corp-cta-contenedor">
          <div className="corp-cta">
            <div className="cta-texto">
              <h2>¿LISTO PARA ESCALAR SU INFRAESTRUCTURA?</h2>
              <p>Nuestros consultores están listos para realizar un diagnóstico técnico de su organización.</p>
            </div>
            <button className="boton-negro" onClick={() => navigate("/Contacto")}>
              CONTACTAR AHORA
            </button>
          </div>
        </section>

        {/* ── footer ── */}
        <Footer />

      </div>
    </TransiciondePag>
  );
}