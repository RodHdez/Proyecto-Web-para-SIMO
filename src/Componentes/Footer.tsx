import { useNavigate } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  const navigate = useNavigate();

  {/* funcion que lleva al usuario al inicio de la pagina actual */}
  const subirAlInicio = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="footer-contenedor">
      
      {/* linea decorativa horizontal simple en el borde superior */}
      <div className="linea-decorativa"></div>

      {/* boton naranja superpuesto en la parte superior derecha */}
      <button className="boton-subir" onClick={subirAlInicio}>
        <svg className="icono-flecha" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </button>

      {/* contenedor del contenido principal dividido en dos lados */}
      <div className="footer-contenido">
        
        {/* lado izquierdo: logo simo, texto y estadisticas */}
        <div className="footer-izq">
          {/* etiqueta de imagen para el logo blanco */}
          <img src="/src/assets/Logo_SIMO.png" alt="logo simo" className="logo-footer" />
          
          <p className="texto-descripcion">
            Elevando la gestión de proyectos a través de la<br />
            innovación y la precisión estratégica.
          </p>
          
          <div className="cajas-grid">
            <div className="caja-stat">
              <span className="caja-x">X</span>
              <span className="caja-etiqueta">Proyectos</span>
            </div>
            <div className="caja-stat">
              <span className="caja-x">X</span>
              <span className="caja-etiqueta">Clientes</span>
            </div>
            <div className="caja-stat">
              <span className="caja-x">X</span>
              <span className="caja-etiqueta">Servicios</span>
            </div>
            <div className="caja-stat">
              <span className="caja-x">X</span>
              <span className="caja-etiqueta">Empresas</span>
            </div>
          </div>
        </div>

        {/* lado derecho: columnas de empresa, legal y contacto */}
        <div className="footer-der">
          
          <div className="columna">
            <div className="columna-titulo">EMPRESA</div>
            <ul className="columna-lista">
              <li onClick={() => navigate("/Conocenos")}>Conócenos</li>
              <li onClick={() => navigate("/Corporativa")}>Corporativa</li>
              <li onClick={() => navigate("/Socios")}>Socios</li>
              <li onClick={() => navigate("/Contacto")}>Contacto</li>
            </ul>
          </div>
          
          <div className="columna">
            <div className="columna-titulo">LEGAL</div>
            <ul className="columna-lista">
              <li>Privacidad</li>
              <li>Términos</li>
              <li>Legal</li>
            </ul>
          </div>
          
          <div className="columna">
            <div className="columna-titulo">CONTACTO</div>
            <ul className="columna-lista">
              <li>
                {/* icono de sobre para el correo */}
                <svg className="icono-contacto" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline strokeLinecap="round" strokeLinejoin="round" points="22,6 12,13 2,6" />
                </svg>
                info@simogestion.com
              </li>
              <li>
                {/* icono de pin de ubicacion */}
                <svg className="icono-contacto" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                San Salvador, El Salvador
              </li>
              <li>
                {/* icono de pin de ubicacion */}
                <svg className="icono-contacto" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Quito, Ecuador
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* zona de derechos reservados abajo de todo */}
      <div className="footer-copyright">
        © 2024 SIMO Soluciones en Gestión de Proyectos. Todos los derechos reservados.
      </div>
      
    </footer>
  );
}