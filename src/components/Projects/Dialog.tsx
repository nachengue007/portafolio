import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Proyecto {
  nombre: string;
  descripcion: string;
  tecnologias: any;
  url: string;
  image: any;
}

interface DialogProps {
  n: Proyecto;
}

export function Dialog({ n }: DialogProps ) {
  const [open, setOpen] = useState(false);

  return <>
    <motion.button
      whileHover={{ scale: 1.075 }}
      whileTap={{ scale: 0.75 }}
      className="pb-8" 
      onClick={() => setOpen(true)}
    >
      <div className="max-w-sm rounded-lg transition-colors duration-200 text-white bg-darkpurple-700 hover:text-darkpurple-800 hover:bg-darkpurple-400">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <span className="font-bold text-xl">{n.nombre}</span>
            <img src={n.image} alt={n.nombre} className="w-12 h-12 object-contain" />
          </div>
        </div>
      </div>
    </motion.button>
    
    <AnimatePresence>
      {open ?
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className={`fixed inset-0 flex items-center justify-center z-50 bg-black/50`}
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          className="bg-white max-w-sm p-4 rounded-lg"
        >
          <div>
            <div className="text-xl">{n.nombre}</div>
            <p className="text-gray-700 text-base">
              {n.descripcion}
            </p>
          </div>
      
          <div className="pt-2 pb-2 flex flex-wrap gap-2">
            {n.tecnologias.map((t: any) => (
              <span className="bg-gray-200 px-3 py-1 text-sm text-gray-700">
                {t}
              </span>
            ))}
          </div>
    
          <div className="flex justify-between mt-2">
            <button onClick={() => setOpen(false)} className="text-sm text-red-500 font-semibold hover:underline">
              Cerrar
            </button>
            {n.url !== "" ? 
              <a href={n.url} target="_blank" className="text-sm text-red-500 font-semibold hover:underline">
                Ir al proyecto
              </a>
            : 
              <p className="text-sm text-red-500 font-semibold hover:underline">
                Proximamente
              </p>
            }
          </div>
        </motion.div>
      </motion.div> : null}
    </AnimatePresence>
  </>
}