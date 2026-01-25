import './App.css'
import { useEffect, useState, type Key } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tooltip } from 'react-tooltip';

import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { AboutPortafolio } from './components/AboutPortafolio';

import linkedinLogo from './assets/redes/LinkedIn_logo.png';
import githubLogo from './assets/redes/github_logo.png';
import gitlabLogo from './assets/redes/gitlab_logo.png';
import youtubeLogo from './assets/redes/Youtube_logo.png';
import emailLogo from './assets/redes/email_logo.png';

import { useTranslation } from 'react-i18next';

type nombres = 'about' | 'skills' | 'projects' | 'education' | 'aboutPortafolio';

function App() {

  const [seccion, setSeccion] = useState<nombres>('about');
  const [seccionHover, setSeccionHover] = useState('');
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { t, i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    document.documentElement.lang = lang;
  }

  const lenguajes = [
    { code: "es", name: "Español", flag: "🇦🇷" },
    { code: "en", name: "English", flag: "🇺🇸" },
  ]

  const widthMapByLang: Record<string, Record<nombres, number>> = {
    es: {
      about: 108,
      skills: 98,
      projects: 105,
      education: 58,
      aboutPortafolio: 62,
    },
    en: {
      about: 105,
      skills: 120,
      projects: 110,
      education: 58,
      aboutPortafolio: 68,
    }
  };

  const widthMap = widthMapByLang[document.documentElement.lang] ?? widthMapByLang.es;

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    changeLanguage('es');
  }, []);

  const secciones = {
    'about': (<About />),
    'skills': (<Skills />),
    'projects': (<Projects />),
    'education': (<Education />),
    'aboutPortafolio': (<AboutPortafolio />)
  };

  const renderButton = (nombreSeccion: nombres, titulo: string) => {
    const isHovered = seccionHover === nombreSeccion;

    return <div className='pb-2'>
      <button 
        className='w-[300px] p-2 bg-darkpurple-800 font-bold text-white rounded relative overflow-hidden group transition-colors duration-300 hover:bg-darkpurple-500 hover:text-darkpurple-800'
        onClick={() => setSeccion(nombreSeccion)}
        onMouseOver={() => setSeccionHover(nombreSeccion)}
        onMouseOut={() => setSeccionHover('')}
      >
        {/* Líneas laterales */}
        <span 
          className="absolute left-0 top-1/2 h-[2px] bg-darkpurple-800 transition-all duration-300 -translate-y-1/2"
          style={{ width: isHovered ? `${widthMap[nombreSeccion]}px` : '0px' }}
        ></span>
        <span 
          className="absolute right-0 top-1/2 h-[2px] bg-darkpurple-800 transition-all duration-300 -translate-y-1/2"
          style={{ width: isHovered ? `${widthMap[nombreSeccion]}px` : '0px' }}
        ></span>
    
        {/* Texto */}
        <span className="relative">{titulo}</span>
      </button>
    </div>
  }

  const redes = [
    {
      nombre: t(`navbar.socials.linkedin`),
      url: "https://www.linkedin.com/in/ignacio-fonseca-7b5a96263/",
      image: linkedinLogo,
    },
    {
      nombre: t(`navbar.socials.github`),
      url: "https://github.com/nachengue007",
      image: githubLogo,
    },
    {
      nombre: t(`navbar.socials.gitlab`),
      url: "https://gitlab.com/murdocc9",
      image: gitlabLogo,
    },
    {
      nombre: t(`navbar.socials.youtube`),
      url: "https://www.youtube.com/@murdocc9",
      image: youtubeLogo,
    },
    {
      nombre: t(`navbar.socials.email`),
      url: "mailto:fonsecaignacio139@gmail.com",
      image: emailLogo,
    },
  ]

  return <>
    <motion.div
      className="aura"
      initial={{ x: 0, y: 0 }}
      animate={{ x: mousePosition.x - 250, y: mousePosition.y - 250 }}
      transition={{ type: "tween", ease: "backOut", duration: 0.25 }}
      style={{
        position: 'fixed',
        width: '500px',
        height: '500px',
        borderRadius: '100%',
        backgroundColor: '#B14EB1',
        filter: 'blur(300px)',
        pointerEvents: 'none',
        zIndex: 1,
        opacity: 0.25,
      }}
    />
    <div className="md:flex md:h-screen bg-darkpurple-800">
      {/* izquierda */}
      <div className="md:w-2/6 flex justify-center w-full">
        <div className="p-6 flex md:flex-row md:items-center">
          <div className="flex flex-col items-center">
            <h1 className='text-4xl font-bold pb-4 text-white text-center'>Ignacio Fonseca</h1>
            <p className='pb-6 text-xl text-darkpurple-500 text-center'>{t("navbar.title")}</p>
            {renderButton('about', t(`navbar.about`))}
            {renderButton('skills', t('navbar.skills'))}
            {renderButton('projects', t('navbar.projects'))}
            {renderButton('education', t('navbar.education'))}
            {renderButton('aboutPortafolio', t('navbar.aboutPortafolio'))}
            <div className='hidden md:flex justify-center items-center p-2'>
              {redes.map((e: any, i: Key) => (
                <a key={i} className='pr-2' href={e.url} target='_blank'>
                  <a data-tooltip-id="tooltip" data-tooltip-content={e.nombre}>
                    <img src={e.image} alt={e.nombre} className="w-6 hover:w-10 transition-w duration-300 object-contain"/>
                  </a>
                  <Tooltip id="tooltip"/>
                </a>
              ))}
            </div>

            <div className='md:pt-8 md:flex justify-center items-center p-2 text-white'>
              <select name="lenguaje" id="lenguaje" onChange={(e) => changeLanguage(e.target.value)}>
                {lenguajes.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.flag} {lang.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
      
      {/* derecha */}
      <div className="md:w-4/6 overflow-auto relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={seccion}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="w-full"
          >
            {secciones[seccion]}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className='md:hidden flex justify-center items-center p-2 bg-darkpurple-800 md:w-2/6 md:absolute md:inset-x-1 md:bottom-0 pb-8'>
        {redes.map((e: any, i: Key) => (
          <a key={i} className='pr-2' href={e.url} target='_blank'>
            <img src={e.image} alt={e.nombre} className="w-10 h-10 object-contain"/>
          </a>
        ))}
      </div>
    </div>
  </>
}

export default App;
