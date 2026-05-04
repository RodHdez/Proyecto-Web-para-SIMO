import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function TransiciondePag({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: 0 }}
      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        willChange: "transform",
        overflowY: "auto", /* permite el scroll vertical dentro de la pagina */
      }}
    >
      {children}
    </motion.div>
  );
}