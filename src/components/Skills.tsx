import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export function Skills() {
  const apartados = [
    {
      id: 0,
      titulo: "Programación",
      items: [
        "C/C++ - Intermedio",
        "C# - Intermedio",
        ".NET 8 Web Api - Intermedio",
        "Java - Intermedio",
        "JavaScript - Intermedio",
        "PHP - Intermedio",
        "Python - Intermedio",
        "SQL - Intermedio",
        "CSS3 - Básico",
        "MS SQL Server 2022 - Intermedio",
        "MySQL - Básico",
        "PostgreSQL - Intermedio",
        "GameMaker: Studio 1.4 - Avanzado",
        "GameMaker 2025 - Intermedio",
        "React - Intermedio",
        "Tailwind CSS - Básico",
        "Django - Básico",
        "Next.js - Intermedio",
        "Docker - Básico",
      ]
    },
    {
      id: 1,
      titulo: "Ofimática",
      items: [
        "Microsoft Excel - Intermedio",
        "Microsoft Word - Intermedio",
        "Microsoft PowerPoint - Intermedio",
        "LibreOffice Calc - Intermedio",
        "LibreOffice Write - Intermedio",
      ]
    },
    {
      id: 2,
      titulo: "Otros conocimientos",
      items: [
        "SAP - Básico",
        "Inglés técnico - Intermedio",
        "Reparación de PC y compatibilidad - Intermedio",
        "Reparación de placas electronicas - Básico",
      ]
    },
    {
      id: 3,
      titulo: "Idiomas",
      items: [
        "Inglés: Escrito Intermedio, Oral Básico",
        "Alemán: Aprendiendo",
      ]
    },
  ];
  
  const [hoveredId, setHoveredId] = useState(null);
  
  const listVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        when: "afterChildren"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        when: "beforeChildren"
      }
    }
  };
  
  const listItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  };

  return <div className='md:flex md:flex-col text-white items-center justify-center min-h-screen'>
      <div className='grid md:grid-cols-2'>
        {apartados.map((a: any) => (
          <div
            className='p-4 2xl:w-150'
            key={a.id}
            onMouseEnter={() => setHoveredId(a.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="p-4 rounded bg-darkpurple-700 overflow-hidden">
              <h1 className="pb-2 font-bold text-2xl text-white">{a.titulo}</h1>
              <AnimatePresence>
                {hoveredId === a.id && (
                  <motion.ul
                    className="pl-6 list-disc text-white"
                    variants={listVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                  >
                    {a.items.map((p: String) => (
                      <motion.li key={p.toString()} variants={listItemVariants}>
                        {p}
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          </div>
        ))}
      </div>
    </div>
}