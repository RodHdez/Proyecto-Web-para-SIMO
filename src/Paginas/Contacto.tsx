import TransiciondePag from "../Componentes/TransiciondePag";
import Footer from "../Componentes/Footer";
import "./Contacto.css";

export default function Contacto() {
  return (
    <TransiciondePag>
      <div className="contacto-contenedor">
        
        {/* ── seccion del encabezado (fuera de la caja oscura) ── */}
        <header className="contacto-encabezado">
          <div className="linea-encabezado">
            <span className="txt-vision">HABLEMOS DE TU VISIÓN</span>
          </div>
          <h1>Nuestras ideas <span className="txt-naranja">en</span></h1>
          <h1><span className="txt-naranja">movimiento.</span></h1>
        </header>

        {/* ── seccion de cuerpo que contiene todas las tarjetas ── */}
        <main className="contacto-cuerpo">
          
          {/* caja superior: formulario e informacion de contacto */}
          <div className="contacto-caja-oscura">
            
            {/* ── columna izquierda: formulario ── */}
            <form className="contacto-formulario">
              <div className="div-titulo-formulario">
                <div className="subrayado-naranja"></div>
                <h2 className="contacto-formulario-titulo">INICIA LA OPERACIÓN</h2>
              </div>

              <div className="form-campo">
                <label htmlFor="nombre">NOMBRE DEL AGENTE</label>
                <input type="text" id="nombre" placeholder="INTRODUCE TU NOMBRE" />
              </div>

              <div className="form-campo">
                <label htmlFor="correo">PROTOCOLO EMAIL</label>
                <input type="email" id="correo" placeholder="EMAIL@DOMAIN.COM" />
              </div>

              <div className="form-campo">
                <label htmlFor="mensaje">DESCRIPCIÓN DEL REQUERIMIENTO</label>
                <textarea id="mensaje" placeholder="MENSAJE DEL SISTEMA..."></textarea>
              </div>

              <div className="form-div-boton">
                <button type="submit" className="boton-enviar-datos">
                  ENVIAR DATOS
                  <svg className="icono-cohete" viewBox="0 0 24 24">
                    <path d="M13.13 22.19L11.5 18.36L9.87 22.19L11.5 21l1.63 1.19M11.5 2L13.13 5.81L11.5 7L9.87 5.81L11.5 2M11.5 13c-2.48 0-4.5-2.02-4.5-4.5s2.02-4.5 4.5-4.5 4.5 2.02 4.5 4.5-2.02 4.5-4.5 4.5m0-7.5c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3-1.35-3-3-3m0 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0m1.5 9.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m4.5-9.5c-.83 0-1.5.67-1.5 1.5v5a1.5 1.5 0 0 0 3 0v-5a1.5 1.5 0 0 0-1.5-1.5m-1.5 1.5a.5.5 0 1 1 1 0v5a.5.5 0 1 1-1 0v-5m-12.5-1.5c-.83 0-1.5.67-1.5 1.5v5a1.5 1.5 0 0 0 3 0v-5a1.5 1.5 0 0 0-1.5-1.5m-1.5 1.5a.5.5 0 1 1 1 0v5a.5.5 0 1 1-1 0v-5M11.5 14a1.5 1.5 0 0 0-1.5 1.5c0 .32.1.62.26.87L9 19.5h5l-1.26-3.13c.16-.25.26-.55.26-.87a1.5 1.5 0 0 0-1.5-1.5Z"/>
                  </svg>
                </button>
              </div>
            </form>

            {/* ── columna derecha: informacion de cuartel ── */}
            <div className="contacto-info-column">
              <div className="info-lista-contenedor">
                <div className="linea-conexion"></div>

                <div className="info-bloque">
                  <div className="icono-info-box-container">
                    <svg className="icono-info-box" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 2.5-2.5 2.5 2.5 0 0 1-2.5 2.5z"/>
                    </svg>
                  </div>
                  <div className="texto-info-box">
                    <h3>CUARTEL GENERAL</h3>
                    <p>San Salvador - El Salvador</p>
                    <p>Quito - Ecuador</p>
                  </div>
                </div>

                <div className="info-bloque">
                  <div className="icono-info-box-container">
                    <svg className="icono-info-box" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-12c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h2v1h-1v1h2v-1h.25c.41 0 .75-.34.75-.75V11c0-1.1-.9-2-2-2h-2zm2 5h-2v-3h2v3z"/>
                    </svg>
                  </div>
                  <div className="texto-info-box">
                    <h3>CANAL DE ENLACE</h3>
                    <p>info@simosv.com</p>
                  </div>
                </div>

                <div className="info-bloque">
                  <div className="icono-info-box-container">
                    <svg className="icono-info-box" viewBox="0 0 24 24">
                      <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1.02A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM5.03 5h2.97c.12.74.24 1.47.38 2.19l-1.7 1.7c-.43-1.45-.73-2.61-.88-3.89zM19 18.97c-1.28-.15-2.44-.45-3.89-.88l1.7-1.7c.72.14 1.45.26 2.19.38v2.97z"/>
                    </svg>
                  </div>
                  <div className="texto-info-box">
                    <h3>Telefono</h3>
                    <p>+503 72xx-34xx</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* ── nueva caja inferior: red global ── */}
          <div className="contacto-red-global">
            
            {/* la tarjeta de la imagen (puedes reemplazar el estilo backgroundimage con tu foto local de la carpeta assets) */}
            <div className="red-card-img" style={{ backgroundImage: "url('/src/assets/tu-imagen-aqui.jpg')" }}>
              <div className="red-img-contenido">
                <div className="red-img-badge">NUESTRAS SEDES</div>
                <h3 className="red-img-titulo">SAN SALVADOR, EL SALVADOR</h3>
              </div>
            </div>

            {/* la tarjeta de la descripcion de red global */}
            <div className="red-card-texto">
              <h2>RED GLOBAL</h2>
              <p>
                Nuestra infraestructura se extiende por los principales
                nodos tecnológicos globales, garantizando una latencia
                mínima y un soporte local de alto rendimiento.
              </p>
              
              <div className="red-stats">
                <div className="red-stat-item">
                  <span className="red-stat-num">04</span>
                  <span className="red-stat-label">NODOS</span>
                </div>
                <div className="red-stat-item">
                  <span className="red-stat-num">24/7</span>
                  <span className="red-stat-label">MONITOREO</span>
                </div>
                <div className="red-stat-item">
                  <span className="red-stat-num">99.9%</span>
                  <span className="red-stat-label">UPTIME</span>
                </div>
              </div>
            </div>

          </div>

        </main>

        {/* ── footer integrado al final de la pagina ── */}
        <Footer />

      </div>
    </TransiciondePag>
  );
}