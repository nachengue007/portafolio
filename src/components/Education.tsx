import type { Key } from "react";

export function Education(){
  const experiencia = [
    {
      nombre: "Instituto Provincial de Educación Superior (IPES)",
      titulo: "Desarrollador FullStack",
      duracion: "Febrero 2025 - Actualidad",
      descripcion: "Estamos desarrollando un sistema académico integral como proyecto FullStack, diseñado para optimizar la gestión de información dentro de una universidad. El sistema se divide en dos módulos principales: uno dirigido al personal administrativo y docente, y otro destinado a los alumnos.",
      aptitudes: ["PostgreSQL", "TypeScript", "NextJS", "ReactJS", "Shadcn"]
    },
  ];
  const estudios = [
    {
      nombre: "Universidad Tecnológica Nacional (UTN)",
      titulo: "Tecnicatura Universitaria en Programación",
      duracion: "2021 - Actualidad",
      descripcion: "Formación universitaria orientada al desarrollo de software, con énfasis en programación estructurada y orientada a objetos, bases de datos y frameworks modernos para aplicaciones web y de escritorio.",
      aptitudes: ["C/C++", "Java", "Python", "HTML", "jQuery", "SQL", "MySQL", "PhpMyAdmin", "PHP", "Django", "Django REST Framework", "Node.js", "Vue.js", "Docker"]
    },
    {
      nombre: "Alkemy",
      titulo: "Programador en .NET + React",
      duracion: "Marzo 2025 - Junio 2025",
      descripcion: "Entrenamiento intensivo enfocado en el desarrollo de aplicaciones web con tecnologías Microsoft y frontend moderno, combinando .NET y React para proyectos colaborativos con metodologías ágiles.",
      aptitudes: ["Microsoft SQL Server", "SQL Server Management Studio", "Visual Studio", ".NET Framework", "ASP.NET", "Reactjs"]
    },
    {
      nombre: "Centro Politécnico Malvinas Argentinas",
      titulo: "Tecnicatura Universitaria en Ciencias de Datos e Inteligencia Artificial",
      duracion: "Agosto 2023 - Diciembre 2023",
      descripcion: "Estudios en análisis de datos, estadística aplicada e introducción a la inteligencia artificial, con herramientas de programación y gestión de bases de datos. (Carrera pausada, plan de retomar en 2026).",
      aptitudes: ["Python", "Oracle SQL Developer", "InfoStat", "Prolog"]
    },
    {
      nombre: "Fundación Mirgor",
      titulo: "Curso Básico Inicial de Operario de Producción (Fabrica)",
      duracion: "Marzo 2023 - Abril 2023",
      descripcion: "Capacitación en procesos productivos industriales, gestión de calidad y seguridad ocupacional, aplicando metodologías de mejora continua y prácticas de producción eficientes.",
      aptitudes: ["Sistemas de Gestión Ambiental", "Sistemas de Calidad", "Sistemas de Producción", "Seguridad y Salud Ocupacional (OHS)", "5S"]
    },
    {
      nombre: "freeCodeCamp",
      titulo: "Curso HTML y CSS",
      duracion: "2020 - 2020",
      descripcion: "Curso online orientado al diseño y maquetación de páginas web utilizando estándares modernos de HTML y CSS, con enfoque en buenas prácticas y responsividad.",
      aptitudes: ["HTML", "CSS"]
    },
    {
      nombre: "SoloLearn",
      titulo: "Curso HTML",
      duracion: "2018 - 2018",
      descripcion: "Curso introductorio en desarrollo web con HTML, adquiriendo las bases para la estructuración de documentos y creación de sitios estáticos.",
      aptitudes: ["HTML"]
    },
  ];

  return <div className="p-4 space-y-6 text-white">
    <h1 className="text-4xl font-bold text-center">Experiencia</h1>
    {experiencia.map((e: any, i: Key) => (
      <div className="md:flex pb-8" key={i}>
        <div className="md:w-1/4 md:pr-4 md:flex md:flex-col items-end">
          <h3 className="text-xl text-darkpurple-500">{e.duracion}</h3>
        </div>

        <div className="md:w-3/4 md:pl-2">
          <h1 className="text-3xl underline text-darkpurple-400">{e.nombre}</h1>
          <h2 className="text-2xl">{e.titulo}</h2>
          <p>{e.descripcion}</p>
          <ul className="pl-6 pt-2 text-darkpurple-500 grid sm:grid-cols-4 md:grid-cols-6 gap-2">
            {e.aptitudes.map((a: any, j: Key) => (
              <li key={j}>{a}</li>  
            ))}
          </ul>
        </div>
      </div>
    ))}

    <hr className="border-t border-darkpurple-700" />

    <h1 className="text-4xl font-bold text-center">Estudios</h1>
    {estudios.map((e: any, i: Key) => (
      <div className="md:flex pb-8" key={i}>
        <div className="md:w-1/4 md:pr-4 md:flex md:flex-col items-end">
          <h3 className="text-xl text-darkpurple-500">{e.duracion}</h3>
        </div>

        <div className="md:w-3/4 md:pl-2">
          <h1 className="text-3xl underline text-darkpurple-400">{e.nombre}</h1>
          <h2 className="text-2xl">{e.titulo}</h2>
          <p>{e.descripcion}</p>
          <ul className="pl-6 pt-2 text-darkpurple-500 grid sm:grid-cols-4 md:grid-cols-6 gap-2">
            {e.aptitudes.map((a: any, j: Key) => (
              <li key={j}>{a}</li>  
            ))}
          </ul>
        </div>
      </div>
    ))}
  </div>
}