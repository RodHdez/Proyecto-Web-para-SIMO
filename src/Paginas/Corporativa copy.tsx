import TransiciondePag from "../Componentes/TransiciondePag";
import Footer from "../Componentes/Footer";
import { useNavigate } from "react-router-dom";
import "./Corporativa.css";

export default function Corporativa() {
  const navigate = useNavigate();

  return (
    <TransiciondePag>
      <div className="corporativa-contenedor">
        
        {/* seccion hero principal */}
        <section className="corp-hero">
          <h1>ECOSISTEMA CORPORATIVO</h1>
          <p className="corp-subtitulo">
            Ingeniería de procesos de alto impacto para instituciones
          </p>
        </section>

        {/* seccion de sectores con tres columnas */}
        <section className="corp-sectores">
          <div className="sectores-grid">
            
            {/* sector gobierno */}
            <div className="sector-card" style={{ backgroundColor: '#333' }}>
              <span className="sector-badge">01</span>
              <h3>Gobierno</h3>
            </div>
            
            {/* sector financiero */}
            <div className="sector-card" style={{ backgroundColor: '#444' }}>
              <span className="sector-badge">02</span>
              <h3>Financiero</h3>
            </div>
            
            {/* sector privado */}
            <div className="sector-card" style={{ backgroundColor: '#222' }}>
              <span className="sector-badge">03</span>
              <h3>Privado</h3>
            </div>
            
          </div>
        </section>

        {/* seccion de enfoque con el nuevo diseno de tarjetas y etiquetas flotantes */}
        <section className="corp-enfoque">
          <h2>NUESTRO ENFOQUE</h2>
          <div className="enfoque-grid">
            
            {/* tarjeta paso 1 */}
            <div className="enfoque-paso">
              <div className="paso-badge">01</div>
              <h4>STEP // 01</h4>
              <h3>ANÁLISIS</h3>
              <p>Auditoría profunda de infraestructuras existentes y detección de cuellos de botella operativos.</p>
            </div>
            
            {/* tarjeta paso 2 */}
            <div className="enfoque-paso">
              <div className="paso-badge">02</div>
              <h4>STEP // 02</h4>
              <h3>PLANIFICACIÓN</h3>
              <p>Arquitectura de soluciones a medida con proyección de escalabilidad a 10 años.</p>
            </div>
            
            {/* tarjeta paso 3 */}
            <div className="enfoque-paso">
              <div className="paso-badge">03</div>
              <h4>STEP // 03</h4>
              <h3>EJECUCIÓN</h3>
              <p>Implementación técnica por escuadrones especializados bajo metodologías ágiles de ingeniería.</p>
            </div>
            
            {/* tarjeta paso 4 */}
            <div className="enfoque-paso">
              <div className="paso-badge">04</div>
              <h4>STEP // 04</h4>
              <h3>SOPORTE</h3>
              <p>Monitoreo 24/7 y optimización continua de activos digitales mediante IA predictiva.</p>
              <br />
              <p>Cada decisión de IA debe ser auditable y explicable.</p>
            </div>
            
          </div>
        </section>

        {/* llamado a la accion final */}
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

        {/* footer integrado al final de la pagina */}
        <Footer />

      </div>
    </TransiciondePag>
  );
}