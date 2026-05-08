import TransiciondePag from "../Componentes/TransiciondePag";
import Footer from "../Componentes/Footer";
import { useNavigate } from "react-router-dom";
import "./Socios.css";

export default function Socios() {
  const navigate = useNavigate();

  return (
    <TransiciondePag>
      <div className="socios-contenedor">
        
        {/* seccion hero principal */}
        <section className="socios-hero">
          <div className="hero-texto">
            <span className="badge-naranja">RED DE VALOR</span>
            <h1>SOCIOS COMERCIALES</h1>
            <p>
              Partners estratégicos de calidad mundial. Construimos alianzas sólidas 
              para garantizar la ejecución perfecta de proyectos de alto impacto.
            </p>
          </div>
          {/* placeholder para la foto corporativa con sombra */}
          <div className="hero-imagen"></div>
        </section>

        {/* seccion de tarjetas de beneficios */}
        <section className="socios-beneficios">
          <div className="beneficios-header">
            <h2>Beneficios de Nuestra Red</h2>
            <p>El ecosistema que potencia sus resultados</p>
          </div>
          
          <div className="beneficios-grid">
            <div className="beneficio-card">
              <div className="beneficio-icono">🔶</div>
              <h3>Alianzas Estratégicas</h3>
              <p>Conexiones directas con los líderes de la industria tecnológica e infraestructura.</p>
            </div>
            
            <div className="beneficio-card">
              <div className="beneficio-icono">🔶</div>
              <h3>Red de Expertos</h3>
              <p>Acceso a un pool global de especialistas altamente certificados y experimentados.</p>
            </div>
            
            <div className="beneficio-card">
              <div className="beneficio-icono">🔶</div>
              <h3>Alcance Regional</h3>
              <p>Fuerte presencia en toda la región para brindar un soporte local rápido y efectivo.</p>
            </div>
            
            <div className="beneficio-card">
              <div className="beneficio-icono">🔶</div>
              <h3>Innovación Continua</h3>
              <p>Integración constante de metodologías disruptivas y nuevas tecnologías.</p>
            </div>
          </div>
        </section>

        {/* seccion de logos en escala de grises */}
        <section className="socios-logos">
          <h2>NUESTROS ALIADOS ESTRATÉGICOS</h2>
          <div className="logos-grid">
            <div className="logo-placeholder"></div>
            <div className="logo-placeholder"></div>
            <div className="logo-placeholder"></div>
            <div className="logo-placeholder"></div>
            <div className="logo-placeholder"></div>
            <div className="logo-placeholder"></div>
          </div>
        </section>

        {/* seccion dinamica con galeria */}
        <section className="socios-dinamica">
          <div className="dinamica-texto">
            <h2>EL PODER DE LA COLABORACIÓN</h2>
            <p>
              Creemos en los ecosistemas de valor. Cuando las mejores mentes y 
              herramientas se unen, los resultados trascienden las expectativas.
            </p>
            <button className="boton-naranja" onClick={() => navigate("/Contacto")}>
              Únete a nuestra Red
            </button>
          </div>
          
          <div className="dinamica-galeria">
            <div className="galeria-img"></div>
            <div className="galeria-img"></div>
            <div className="galeria-img"></div>
            <div className="galeria-img"></div>
          </div>
        </section>

        {/* footer integrado al final de la pagina */}
        <Footer />

      </div>
    </TransiciondePag>
  );
}