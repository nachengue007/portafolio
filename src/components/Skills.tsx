import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export function Skills() {
  const { t } = useTranslation();
  
  const apartados = [
    {
      id: 0,
      titulo: t('skills.programming'),
      items: [
        `C/C++ - ${t('skills.intermediate')}`,
        `C# - ${t('skills.intermediate')}`,
        `.NET 8 Web Api - ${t('skills.intermediate')}`,
        `Java - ${t('skills.intermediate')}`,
        `JavaScript - ${t('skills.intermediate')}`,
        `PHP - ${t('skills.intermediate')}`,
        `Python - ${t('skills.intermediate')}`,
        `SQL - ${t('skills.intermediate')}`,
        `CSS3 - ${t('skills.basic')}`,
        `MS SQL Server 2022 - ${t('skills.intermediate')}`,
        `MySQL - ${t('skills.basic')}`,
        `PostgreSQL - ${t('skills.intermediate')}`,
        `GameMaker: Studio 1.4 - ${t('skills.advanced')}`,
        `GameMaker 2025 - ${t('skills.intermediate')}`,
        `React - ${t('skills.intermediate')}`,
        `Tailwind CSS - ${t('skills.basic')}`,
        `Django - ${t('skills.basic')}`,
        `Next.js - ${t('skills.intermediate')}`,
        `Docker - ${t('skills.basic')}`,
      ]
    },
    {
      id: 1,
      titulo: t('skills.office'),
      items: [
        `Microsoft Excel - ${t('skills.intermediate')}`,
        `Microsoft Word - ${t('skills.intermediate')}`,
        `Microsoft PowerPoint - ${t('skills.intermediate')}`,
        `LibreOffice Calc - ${t('skills.intermediate')}`,
        `LibreOffice Write - ${t('skills.intermediate')}`,
      ]
    },
    {
      id: 2,
      titulo: t('skills.other'),
      items: [
        `SAP - ${t('skills.basic')}`,
        `${t('skills.english_tech')} - ${t('skills.intermediate')}`,
        `${t('skills.pc')} - ${t('skills.intermediate')}`,
        `${t('skills.boards')} - ${t('skills.basic')}`,
      ]
    },
    {
      id: 3,
      titulo: t('skills.lang'),
      items: [
        `${t('skills.spanish')}`,
        `${t('skills.english')}`,
        `${t('skills.german')}`,
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