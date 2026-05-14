import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { useState, useEffect } from "react";
import TransiciondePag from "../Componentes/TransiciondePag";
import Footer from "../Componentes/Footer"; /* importamos el footer aqui */
import "./Contacto.css";

// Tipos de los campos del formulario (Se agregaron Empresa y Telefono)
type FormFields = {
  Nombre: string;
  Empresa: string;
  Telefono: string;
  Correo: string;
  Descripcion: string;
};

// Imagenes del carrusel
const imagenes = [
  { src: "src/assets/SanSalvadorEdit.png", ciudad: "SAN SALVADOR, EL SALVADOR" },
  { src: "src/assets/QuitoEdit.png", ciudad: "QUITO, ECUADOR" },
];

export default function Contacto() {
  // Hook del formulario
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>();

  // Indice de la imagen activa en el carrusel
  const [imagenActiva, setImagenActiva] = useState(0);

  // Cambia la imagen cada 4 segundos automaticamente
  useEffect(() => {
    const intervalo = setInterval(() => {
      setImagenActiva((prev) => (prev + 1) % imagenes.length);
    }, 4000);
    // Limpia el intervalo al desmontar el componente
    return () => clearInterval(intervalo);
  }, []);

  // Maneja el envio del formulario
  const onSubmit: SubmitHandler<FormFields> = async (data) => {
  try {
    const response = await fetch("https://simosv.com/contacto.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (result.ok) {
      // Muestra confirmacion al usuario
      alert(`✅ Datos enviados correctamente. ID de registro: ${result.id}`);
    } else {
      alert("❌ Error al enviar los datos. Intenta de nuevo.");
    }
  } catch (error) {
    alert("❌ No se pudo conectar al servidor.");
    console.error(error);
  }
};

  return (
    <TransiciondePag>
      <div className="contacto-contenedor">

        {/* ── SECCION HERO ── */}
        <section className="contacto-hero">
          <p className="contacto-subtitulo">HAGAMOS DE TU SUEÑO</p>
          <h1 className="contacto-titulo">
            Nuestras ideas <span className="titulo-naranja">en movimiento.</span>
          </h1>
        </section>

        {/* ── SECCION FORMULARIO + INFO ── */}
        <section className="contacto-formulario-seccion">

          {/* Formulario izquierdo */}
          <div className="formulario-contenedor">
            <h1>INICIA LA OPERACIÓN</h1>

            {/* Campo Nombre */}
            <div className="campo">
              <label>NOMBRE DEL AGENTE</label>
              <input
                {...register("Nombre", { required: "Nombre requerido" })}
                type="text"
                placeholder="Tu nombre completo"
              />
              {errors.Nombre && <span className="error">{errors.Nombre.message}</span>}
            </div>

            {/* Campo Empresa (NUEVO) */}
            <div className="campo">
              <label>EMPRESA / INSTITUCIÓN</label>
              <input
                {...register("Empresa")}
                type="text"
                placeholder="Nombre de su organización"
              />
            </div>

            {/* Campo Teléfono (NUEVO) */}
            <div className="campo">
              <label>TELÉFONO DE CONTACTO</label>
              <input
                {...register("Telefono", { required: "Teléfono requerido" })}
                type="tel"
                placeholder="+503 0000-0000"
              />
              {errors.Telefono && <span className="error">{errors.Telefono.message}</span>}
            </div>

            {/* Campo Correo */}
            <div className="campo">
              <label>DIRECCIÓN DE ENLACE</label>
              <input
                {...register("Correo", {
                  required: "Correo requerido",
                  pattern: {
                    value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                    message: "Correo inválido",
                  },
                })}
                type="email"
                placeholder="tucorreo@email.com"
              />
              {errors.Correo && <span className="error">{errors.Correo.message}</span>}
            </div>

            {/* Campo Descripcion */}
            <div className="campo">
              <label>DESCRIPCIÓN DEL REQUERIMIENTO</label>
              <textarea
                {...register("Descripcion", { required: "Descripción requerida" })}
                placeholder="Describe tu proyecto o consulta..."
                rows={4}
              />
              {errors.Descripcion && <span className="error">{errors.Descripcion.message}</span>}
            </div>

            {/* Boton de envio */}
            <button
              className="formulario-boton"
              type="submit"
              disabled={isSubmitting}
              onClick={handleSubmit(onSubmit)}
            >
              <img width="20" height="20" src="https://img.icons8.com/ios-glyphs/60/rocket.png" alt="rocket" style={{ filter: "brightness(0) invert(1)" }} />
              {isSubmitting ? "ENVIANDO..." : "ENVIAR DATOS "}
            </button>
          </div>

          {/* Info de contacto derecha */}
          <div className="contacto-info">

            <div className="info-item">
              <span className="info-icono"><img width="30" height="30" src="https://img.icons8.com/ios/50/marker--v1.png" alt="marker--v1"/></span>
              <div>
                <p className="info-label">CUARTELES GENERALES</p>
                <p>San Salvador - El Salvador</p>
                <p>Quito - Ecuador</p>
              </div>
            </div>

            <div className="info-item">
              <span className="info-icono"><img width="30" height="30" src="https://img.icons8.com/material-outlined/48/mail.png" alt="mail"/></span>
              <div>
                <p className="info-label">LÍNEA DIRECTA</p>
                <p>info@simosv.com</p>
              </div>
            </div>

            <div className="info-item">
              <span className="info-icono"><img width="30" height="30" src="https://img.icons8.com/forma-thin-sharp/48/phone.png" alt="phone"/></span>
              <div>
                <p className="info-label">Teléfono</p>
                <p>+503 7xxx-xxxx</p>
              </div>
            </div>

          </div>
        </section>

        {/* ── CARRUSEL DE SEDES ── */}
        <section className="contacto-carrusel">

          {/* Imagen con transicion */}
          <div className="carrusel-imagen-contenedor">
            {imagenes.map((img, index) => (
              <div
                key={index}
                className={`carrusel-imagen ${imagenActiva === index ? "activa" : ""}`}
              >
                <img src={img.src} alt={img.ciudad} />
                <div className="carrusel-etiqueta">{img.ciudad}</div>
              </div>
            ))}
          </div>

          {/* Info red global */}
          <div className="carrusel-info">
            <h2>RED GLOBAL</h2>
            <p>
              Nuestra infraestructura se extiende por los principales
              nodos tecnológicos globales, garantizando una latencia
              mínima y un soporte local de alto rendimiento.
            </p>
            <div className="carrusel-stats">
              <div className="carrusel-stat">
                <h3>04</h3>
                <p>Países</p>
              </div>
              <div className="carrusel-stat">
                <h3>24/7</h3>
                <p>Disponibilidad</p>
              </div>
              <div className="carrusel-stat">
                <h3>99.5%</h3>
                <p>Uptime</p>
              </div>
            </div>
          </div>

        </section>

        {/* el footer al final de la pagina */}
        <Footer />
      </div>
    </TransiciondePag>
  );
}