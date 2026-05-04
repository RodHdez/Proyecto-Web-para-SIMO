import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function TransiciondePag({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ x: "100%" }}  // nueva pagina empieza a la derecha
      animate={{ x: 0 }}       // desliza hasta su lugar
      exit={{ x: 0 }}          // la pagina vieja se queda en su lugar mientras la nueva entra encima
      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        willChange: "transform",
      }}
    >
      {children}
    </motion.div>
  );
}