import {motion} from "framer-motion";
import type {ReactNode} from "react";

export default function TransiciondePag({children}:{children:ReactNode}){
    return(
        <motion.div
        //Estado inicial
        initial={{x:0}}
        animate={{x:0}}

        //Sale hacia la derecha
        exit={{x:"100%",opacity:0}}

        //duracion de la animacion
        transition={{duration:0.4,ease:"easeInOut"}}
        style={{width:"100%", height:"100%", position: "relative", top: 0, left: 0 }}
        >
            {children}
        </motion.div>
    );
}