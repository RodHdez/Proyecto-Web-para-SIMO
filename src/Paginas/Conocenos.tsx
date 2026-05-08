import TransiciondePag from "../Componentes/TransiciondePag";
import Footer from "../Componentes/Footer"; /* importamos el footer aqui */
import "./Conocenos.css";
import { useNavigate } from "react-router-dom";

export default function Conocenos() {
  const navigate = useNavigate();
  return (
    <TransiciondePag>
      <div className="conocenos-contenedor">
        
        {/* seccion primeriza */}
        <section className="conocenos-primerizo">
          {/* titulo y descripcion */}
          <div className="texto-primerizo">
            <h1 className="titulo-primerizo">CONÓCENOS</h1>
            <p className="descripcion-primeriza">
                Somos líderes en la gestión de proyectos, transformando ideas
                innovadoras en resultados tangibles a través de la precisión y
                la integridad financiera.
            </p>
          </div>

          {/* tarjetas de ubicacion */}
          <div className="tarjetas-primerizas">
            <div className="ubicacion-tarjeta">
              <span className="ubicacion-icono">📍</span>
              <p>San Salvador</p>
              <p>El Salvador</p>
            </div>
            <div className="ubicacion-titulo">
              <p>NUESTRAS</p>
              <p>SEDES</p>
            </div>
            <div className="ubicacion-tarjeta">
              <span className="ubicacion-icono">📍</span>
              <p>Quito</p>
              <p>Ecuador</p>
            </div>
          </div>
        </section>

        {/* seccion de mision-vision */}
        <section className="conocenos-grid">
          {/* tarjeta mision */}
          <div className="grid-tarjeta">
            <span className="grid-icono">🔶</span>
            <h3>Misión</h3>
            <p>
              Empoderar la soberanía de las naciones y la integridad financiera a través de una
              tecnología que se adapta al ritmo de la intención humana, asegurando que el 
              progreso digital nunca comprometa la ética ni el planeta.
            </p>
          </div>

           {/* tarjeta vision */}
          <div className="grid-tarjeta">
            <span className="grid-icono">🔶</span>
            <h3>Visión</h3>
            <p>
              Ser el orquestador líder de infraestructuras digitales autónomas en 
              Latinoamérica, habiendo neutralizado la huella de carbono de nuestros clientes 
              gubernamentales y establecido el estándar regional de transparencia algorítmica.
            </p>
          </div>

          {/* tarjeta experiencia */}
          <div className="grid-tarjeta">
            <span className="grid-icono">🔶</span>
            <h3>Experiencia</h3>
            <p>
              Más de una década perfeccionando metodologías ágiles y robustas
              en diversos sectores industriales, garantizando la solvencia técnica 
              en cada etapa del desarrollo.
            </p>
          </div>
          
          {/* tarjeta compromiso */}
          <div className="grid-tarjeta">
            <span className="grid-icono">🔶</span>
            <h3>Compromiso</h3>
            <p>
              Ética profesional y éxito del cliente. Trabajamos con dedicación 
              para asegurar que cada solución tecnológica fortalezca la 
              confianza de quienes representan nuestra red.
            </p>
          </div>
        </section>

        {/* seccion estadisticas */}
        <section className="conocenos-stats">
          <div className="stat">
            <h2>15+</h2>
            <p>AÑOS DE EXPERIENCIA</p>
          </div>
          <div className="stat">
            <h2>200+</h2>
            <p>PROYECTOS EJECUTADOS</p>
          </div>
          <div className="stat">
            <h2>98%</h2>
            <p>SATISFACCIÓN DEL CLIENTE</p>
          </div>
        </section>

        {/* seccion valores */}
        <section className="conocenos-valores">
          {/* imagen placeholder en la izquierda */}
          <div className="valores-imagen">
            <div className="valores-imagen-placeholder" />
          </div>

          {/* lista de valores en la derecha */}
          <div className="valores-lista">
            <h2>Nuestros valores</h2>

            <div className="valor-item">
              <h4>Soberanía de Datos</h4>
              <p>El control total del ciudadano sobre su identidad es innegociable.</p>
            </div>

            <div className="valor-item">
              <h4>Transparencia Algorítmica</h4>
              <p>Cada decisión de IA debe ser auditable y explicable.</p>
            </div>

            <div className="valor-item">
              <h4> Resiliencia en Movimiento</h4>
              <p>Adaptabilidad constante frente a un entorno de amenazas en evolución.</p>
            </div>

            {/* valor destacado */}
            <div className="valor-item destacado">
              <h4>Pasión por la Precisión</h4>
              <p>
               En SIMO, no solo gestionamos tareas; orquestamos movimientos 
               estratégicos. Nuestro equipo multidisciplinario combina la 
               experiencia técnica con una visión creativa para resolver los desafíos 
               más complejos de la industria moderna.
              </p>
              <button className="valores-boton" onClick={() => navigate("/Contacto")}>TRABAJA CON NOSOTROS</button>
            </div>
          </div>
        </section>

        {/* el footer al final de la pagina */}
        <Footer />

      </div>
    </TransiciondePag>
  )
}