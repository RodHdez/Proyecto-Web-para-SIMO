import TransiciondePag from "../Componentes/TransiciondePag";
import Footer from "../Componentes/Footer";
import { useNavigate } from "react-router-dom";
import "./Socios.css";

{/* importacion de los iconos png */}
import IconAlianzas from "../assets/IconAlianzas.png";
import IconRedDeExpertos from "../assets/IconRedDeExpertos.png";
import IconAlcanceReginal from "../assets/IconAlcanceReginal.png";
import IconInnovacionContinua from "../assets/IconInnovacionContinua.png";

{/* importacion de imagenes */}
import imgHeroSocios from "../assets/imgHeroSocios.jpg";
import imgGaleria1 from "../assets/imgGaleria1.png";
import imgGaleria2 from "../assets/imgGaleria2.png";
import imgGaleria3 from "../assets/imgGaleria3.png";
import imgGaleria4 from "../assets/imgGaleria4.png";

export default function Socios() {
  const navigate = useNavigate();

  return (
    <TransiciondePag>
      <div className="socios-contenedor">
        
        {/* ── seccion hero principal (actualizada) ── */}
        <section className="socios-hero">
          <div className="hero-texto">
            {/* nueva etiqueta red de valor */}
            <div className="overline-naranja">
              <span>RED DE VALOR</span>
              <div className="linea-naranja"></div>
            </div>
            
            <h1>SOCIOS<br />COMERCIALES</h1>
            
            <p>
              Trabajamos con partners estratégicos para garantizar calidad mundial. 
              Nuestra red impulsa la ejecución de proyectos de alto impacto.
            </p>
          </div>
          {/* imagen de la sala de reuniones */}
          <div className="hero-imagen" style={{ backgroundImage: `url(${imgHeroSocios})` }}></div>
        </section>

        {/* ── seccion de beneficios (mantenemos el diseño 4 columnas) ── */}
        <section className="socios-beneficios">
          
          <div className="beneficios-header-izq">
            <h2>Beneficios de Nuestra Red</h2>
            <p>Elevamos los estándares de gestión mediante una colaboración interdisciplinaria y tecnológica.</p>
          </div>
          
          <div className="beneficios-grid-4">
            <div className="beneficio-card-blanca">
              <div className="icono-fondo-naranja">
                <img src={IconAlianzas} alt="alianzas estrategicas" />
              </div>
              <h3>Alianzas Estratégicas</h3>
              <p>Conexiones profundas con líderes de industria para optimizar recursos y resultados finales.</p>
            </div>
            
            <div className="beneficio-card-blanca">
              <div className="icono-fondo-naranja">
                <img src={IconRedDeExpertos} alt="red de expertos" />
              </div>
              <h3>Red de Expertos</h3>
              <p>Acceso a un pool global de especialistas certificados en múltiples disciplinas técnicas.</p>
            </div>
            
            <div className="beneficio-card-blanca">
              <div className="icono-fondo-naranja">
                <img src={IconAlcanceReginal} alt="alcance regional" />
              </div>
              <h3>Alcance Regional</h3>
              <p>Presencia y capacidad operativa en toda la región, garantizando soporte local efectivo.</p>
            </div>
            
            <div className="beneficio-card-blanca">
              <div className="icono-fondo-naranja">
                <img src={IconInnovacionContinua} alt="innovacion continua" />
              </div>
              <h3>Innovación Continua</h3>
              <p>Integración constante de nuevas metodologías y tecnologías disruptivas en cada socio.</p>
            </div>
          </div>
        </section>

        {/* ── seccion final dinamica (actualizada) ── */}
        <section className="socios-dinamica">
          <div className="dinamica-texto">
            <h2>EL PODER DE LA<br />COLABORACIÓN</h2>
            <p>
              No solo contratamos servicios; construimos ecosistemas de valor 
              donde cada socio aporta una pieza clave para la excelencia en 
              gestión de proyectos.
            </p>
            {/* nuevo boton redondeado */}
            <button className="boton-naranja-rounded" onClick={() => navigate("/Contacto")}>
              Únete a nuestra Red
            </button>
          </div>
          
          {/* nueva galeria estilo masonry */}
          <div className="dinamica-galeria-masonry">
            {/* columna izquierda */}
            <div className="columna-masonry">
              <img src={imgGaleria1} alt="panel tecnologico" className="img-masonry img-top-left" />
              <img src={imgGaleria3} alt="oficina moderna" className="img-masonry img-bottom-left" />
            </div>
            {/* columna derecha */}
            <div className="columna-masonry">
              <img src={imgGaleria2} alt="equipo trabajando" className="img-masonry img-top-right" />
              <img src={imgGaleria4} alt="rascacielos corporativo" className="img-masonry img-bottom-right" />
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </TransiciondePag>
  );
}