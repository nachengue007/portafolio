import './App.css'
import { useState, type Key } from "react";
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { AboutPortafolio } from './components/AboutPortafolio';

type nombres = 'about' | 'skills' | 'projects' | 'education' | 'aboutPortafolio';

import linkedinLogo from './assets/LinkedIn_logo.png';
import githubLogo from './assets/github_logo.png';
import gitlabLogo from './assets/gitlab_logo.png';
import youtubeLogo from './assets/Youtube_logo.png';

function App() {

  const [seccion, setSeccion] = useState<nombres>('about');

  const secciones = {
    'about': (<About />),
    'skills': (<Skills />),
    'projects': (<Projects />),
    'education': (<Education />),
    'aboutPortafolio': (<AboutPortafolio />)
  };

  const renderButton = (nombreSeccion: nombres, titulo: string) => {
    return <div className='pb-2'>
      <button 
        className='w-full p-2 bg-darkpurple-800 text-white rounded transition-colors duration-300 hover:bg-darkpurple-500 hover:text-black'
        onClick={() => setSeccion(nombreSeccion)}
      >
        {titulo}
      </button>
    </div>
  }

  const redes = [
    {
      nombre: "Linkedin",
      url: "https://www.linkedin.com/in/ignacio-fonseca-7b5a96263/",
      image: linkedinLogo,
    },
    {
      nombre: "GitHub",
      url: "https://github.com/nachengue007",
      image: githubLogo,
    },
    {
      nombre: "GitLab",
      url: "https://gitlab.com/murdocc9",
      image: gitlabLogo,
    },
    {
      nombre: "Youtube",
      url: "https://www.youtube.com/@murdocc9",
      image: youtubeLogo,
    },
  ]

  return <>
    <div className="md:flex md:h-screen bg-darkpurple-800">
      {/* izquierda */}
      <div className="md:w-2/6 flex justify-center md:justify-end w-full">
        <div className="p-6 flex md:flex-row md:items-center">
          <div className="flex flex-col md:items-end">
            <h1 className='text-4xl pb-4 text-white sm:text-center'>Ignacio Fonseca</h1>
            {renderButton('about', 'Sobre mi')}
            {renderButton('skills', 'Habilidades')}
            {renderButton('projects', 'Proyectos')}
            {renderButton('education', 'Experiencia/Educacion')}
            {renderButton('aboutPortafolio', 'Sobre este portafolio')}
          </div>
        </div>
      </div>
      
      {/* derecha */}
      <div className="md:w-4/6 pr-6 overflow-auto">
        {secciones[seccion]}
      </div>

      <div className='flex p-2 bg-darkpurple-800 md:w-2/6 md:absolute md:inset-x-1 md:bottom-0'>
        {redes.map((e: any, i: Key) => (
          <a key={i} className='pr-2' href={e.url} target='_blank'><img src={e.image} alt={e.nombre} className="w-10 h-10 object-contain"/></a>
        ))}
      </div>
    </div>
  </>
}

export default App;
