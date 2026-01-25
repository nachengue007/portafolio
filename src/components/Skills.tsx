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
        `<b>C/C++</b> - ${t('skills.intermediate')}`,
        `<b>C#</b> - ${t('skills.intermediate')}`,
        `<b>.NET 8 Web Api</b> - ${t('skills.intermediate')}`,
        `<b>Java</b> - ${t('skills.intermediate')}`,
        `<b>JavaScript</b> - ${t('skills.intermediate')}`,
        `<b>PHP</b> - ${t('skills.intermediate')}`,
        `<b>Python</b> - ${t('skills.intermediate')}`,
        `<b>SQL</b> - ${t('skills.intermediate')}`,
        `<b>CSS3</b> - ${t('skills.basic')}`,
        `<b>MS SQL Server 2022</b> - ${t('skills.intermediate')}`,
        `<b>MySQL</b> - ${t('skills.basic')}`,
        `<b>PostgreSQL</b> - ${t('skills.intermediate')}`,
        `<b>GameMaker: Studio 1.4</b> - ${t('skills.advanced')}`,
        `<b>GameMaker 2025</b> - ${t('skills.intermediate')}`,
        `<b>React</b> - ${t('skills.intermediate')}`,
        `<b>Tailwind CSS</b> - ${t('skills.basic')}`,
        `<b>Django</b> - ${t('skills.basic')}`,
        `<b>Next.js</b> - ${t('skills.intermediate')}`,
        `<b>Docker</b> - ${t('skills.basic')}`,
      ]
    },
    {
      id: 1,
      titulo: t('skills.office'),
      items: [
        `<b>Microsoft Excel</b> - ${t('skills.intermediate')}`,
        `<b>Microsoft Word</b> - ${t('skills.intermediate')}`,
        `<b>Microsoft PowerPoint</b> - ${t('skills.intermediate')}`,
        `<b>LibreOffice Calc</b> - ${t('skills.intermediate')}`,
        `<b>LibreOffice Write</b> - ${t('skills.intermediate')}`,
      ]
    },
    {
      id: 2,
      titulo: t('skills.other'),
      items: [
        `<b>SAP</b> - ${t('skills.basic')}`,
        `<b>${t('skills.english_tech')}</b> - ${t('skills.intermediate')}`,
        `<b>${t('skills.pc')}</b> - ${t('skills.intermediate')}`,
        `<b>${t('skills.boards')}</b> - ${t('skills.basic')}`,
      ]
    },
    {
      id: 3,
      titulo: t('skills.lang'),
      items: [
        `<b>${t('skills.spanish')}</b> - ${t('skills.spanish_text')}`,
        `<b>${t('skills.english')}</b> - ${t('skills.english_text')}`,
        `<b>${t('skills.german')}</b> - ${t('skills.learning')}`,
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
                      <motion.li key={p.toString()} variants={listItemVariants} dangerouslySetInnerHTML={{ __html: p }} />
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