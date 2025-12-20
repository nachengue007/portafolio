import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

interface Proyecto {
  nombre: string;
  descripcion: string;
  tecnologias: any;
  url: string;
  image: any;
  screenshots: any;
}

interface DialogProps {
  n: Proyecto;
}

export function Dialog({ n }: DialogProps) {
  const [open, setOpen] = useState(false);
  const [galleryState, setGalleryState] = useState({
    index: 0,
    direction: 0
  });

  const { t } = useTranslation();

  const handleNext = () => {
    if (n.screenshots) {
      setGalleryState(prevState => ({
        index: (prevState.index + 1) % n.screenshots.length,
        direction: 1,
      }));
    }
  };

  const handlePrev = () => {
    if (n.screenshots) {
      setGalleryState(prevState => ({
        index: (prevState.index === 0 ? n.screenshots.length - 1 : prevState.index - 1),
        direction: -1,
      }));
    }
  };

  return <>
    <motion.button
      whileHover={{ scale: 1.045 }}
      whileTap={{ scale: 0.9 }}
      className="pb-8" 
      onClick={() => setOpen(true)}
    >
      <div className="max-w-sm rounded-lg transition-colors duration-200 text-white bg-darkpurple-700 hover:text-darkpurple-800 hover:bg-darkpurple-400">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <span className="font-bold text-xl text-left">{n.nombre}</span>
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
        onClick={() => setOpen(false)}
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          className="bg-darkpurple-800 max-w-xl p-4 rounded-lg"
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            <div className="pb-2 text-2xl font-bold text-white text-center">{n.nombre}</div>
            <p className="pb-2 text-white text-sm text-base">
              {n.descripcion}
            </p>
          </div>

          {n.screenshots.length > 0 ? 
            <div className="relative overflow-hidden mb-4 rounded-lg">
              <div className="w-full h-77 flex items-center justify-center bg-darkpurple-800">
                <AnimatePresence initial={false} mode="wait">
                  <motion.img
                    key={galleryState.index}
                    src={n.screenshots[galleryState.index]}
                    alt={`Screenshot ${galleryState.index + 1}`}
                    className="w-full h-full object-contain"
                    initial={{ opacity: 0, x: galleryState.direction * 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -galleryState.direction * 100 }}
                    transition={{ duration: 0.3 }}
                  />
                </AnimatePresence>
              </div>

              <span className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/50 text-white px-2 py-1 rounded text-sm">
                {`${galleryState.index + 1} / ${n.screenshots.length}`}
              </span>

              {n.screenshots.length > 1 && (
                <>
                  <button
                    onClick={handlePrev}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-800/50 text-white p-2 rounded-full hover:bg-gray-700/75 transition"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-800/50 text-white p-2 rounded-full hover:bg-gray-700/75 transition"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                  </button>
                </>
              )}
            </div>
          : null}
      
          <div className="pt-4 pb-2 flex flex-wrap gap-2">
            {n.tecnologias.map((t: any) => (
              <span className="bg-darkpurple-700 px-3 py-1 text-sm text-white rounded-xl transition-colors duration-300 hover:bg-darkpurple-500 hover:text-darkpurple-800">
                {t}
              </span>
            ))}
          </div>
    
          <div className="flex justify-between mt-2">
            <button onClick={() => setOpen(false)} className="text-sm text-sm text-darkpurple-700 font-semibold transition-colors duration-300 hover:text-darkpurple-400 hover:underline">
              {t('global.close')}
            </button>
            {n.url !== "" ? 
              <a href={n.url} target="_blank" className="text-sm text-darkpurple-700 font-semibold transition-colors duration-300 hover:text-darkpurple-400 hover:underline">
                {t('project.go')}
              </a>
            : 
              <p className="text-sm text-darkpurple-700 font-semibold transition-colors duration-300 hover:text-darkpurple-400 hover:underline">
                {t('project.cs')}
              </p>
            }
          </div>
        </motion.div>
      </motion.div> : null}
    </AnimatePresence>
  </>
}