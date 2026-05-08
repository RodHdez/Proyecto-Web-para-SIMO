import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import TransiciondePag from "../Componentes/TransiciondePag";
import slide1 from "../assets/ChipHome.jpg";
import slide2 from "../assets/dealHome.jpg";
import slide3 from "../assets/BombilloHome.jpg";
import slide4 from "../assets/contactHome.jpg";




// Array con la informacion de cada Slide
const slides = [
  {
    title: "NUESTRAS IDEAS EN MOVIMIENTO",
    description: "Soluciones especializadas en gestión de proyectos; diseñadas para elevar la innovación e integridad financiera de su organización.",
    route: "/Conocenos",
    color: "#1a1a2e",
    imagen: slide1,
  },
  {
    title: "NUESTRAS CONEXIONES",
    description: "Trabajamos con partners estratégicos para impulsar la ejecución de proyectos de alto impacto.",
    route: "/Socios",
    color: "#16213e",
    imagen: slide2,
  },
  {
    title: "TUS SOLUCIONES A LARGO PLAZO",
    description: "Nosotros te apoyamos con ideas innovadoras que se transforman en soluciones tecnológicas de vanguardia.",
    route: "/Corporativa",
    color: "#0f3460",
    imagen: slide3,
  },
  {
    title: "CONTÁCTANOS",
    description: "Estamos listos para darle un avance a tu compañía con las mejoras tecnológicas que necesita.",
    route: "/Contacto",
    color: "#533483",
    imagen: slide4,
  },
];

export default function Home() {
  // Cual slide esta activa actualmente
  const [activeSlide, setActiveSlide] = useState(0);

  // Referencias a donde esta cada slide para observarlos
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Referencia al contenedor principal para que el observer sepa donde observar
  const containerRef = useRef<HTMLDivElement>(null);

  // Funcion para navegar a otras paginas
  const navigate = useNavigate();

  useEffect(() => {
    // Array para guardar todos los observadores
    const observers: IntersectionObserver[] = [];

    slideRefs.current.forEach((ref, index) => {
      // Si la referencia no se ha asignado, se la salta
      if (!ref) return;

      // Crear un observador por cada slide que se activa cuando es 60% visible
      const observer = new IntersectionObserver(
        ([entry]) => {
          // Si es visible, convertirla en la activa
          if (entry.isIntersecting) setActiveSlide(index);
        },
        {
          threshold: 0.6,
          root: containerRef.current // Observar dentro del contenedor, no la ventana
        }
      );

      // Comenzar a observar esta slide
      observer.observe(ref);

      // Guardar el observador para desconectarlo despues
      observers.push(observer);
    });

    // Desconectar todos los observadores al salir (limpieza)
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Viaja suavemente a la diapositiva clickeada
  const scrollToSlide = (index: number) => {
    slideRefs.current[index]?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <TransiciondePag>

    {/* Referencia al contenedor para el IntersectionObserver*/}
    <div className="home-contenedor" ref={containerRef}>

      {/* Loop por cada una de las slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className="slide"
          style={{ 
             backgroundImage: `url(${slide.imagen})`,
             backgroundSize: "cover",
             backgroundPosition: "center",
          }}
          // Asigna cada slide al elemento respectivo en el array de referencias
          ref={(el: HTMLDivElement | null) => void (slideRefs.current[index] = el)}
        >
          {/* Contenido de cada slide (titulo, descripcion, boton) */}
          <div className="slide-content">
            <h1 className="slide-title">{slide.title}</h1>
            <p className="slide-description">{slide.description}</p>
            <button
              className="slide-button"
              onClick={() => navigate(slide.route)}
            >
              Ver más
            </button>
          </div>
        </div>
      ))}

      {/* Botones indicadores al lado derecho */}
      <div className="slide-indicator">
        {slides.map((_, index) => (
          <button
            key={index}
            // Agrega la clase "active" al dot de la slide actual
            className={`indicador-individual ${activeSlide === index ? "active" : ""}`}
            // Click navega a esa slide
            onClick={() => scrollToSlide(index)}
          />
        ))}
      </div>

    </div>
    </TransiciondePag>
  );
}