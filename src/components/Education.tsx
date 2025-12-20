import type { Key } from "react";
import { useTranslation } from "react-i18next";

export function Education(){
  const { t } = useTranslation();
  
  const experiencia = [
    {
      nombre: t('education.job2.name'),
      titulo: t('education.job2.title'),
      duracion: `${t('month.oct')} 2025 - ${t('month.cur')}`,
      descripcion: t('education.job2.description'),
      aptitudes: ["Python"]
    },
    {
      nombre: t('education.job1.name'),
      titulo: t('education.job1.title'),
      duracion: `${t('month.feb')} 2025 - ${t('month.dec')} 2025`,
      descripcion: t('education.job1.description'),
      aptitudes: ["PostgreSQL", "TypeScript", "NextJS", "ReactJS", "Shadcn"]
    },
  ];
  const estudios = [
    {
      nombre: t('education.education6.name'),
      titulo: t('education.education6.title'),
      duracion: `${t('month.apr')} 2021 - ${t('month.oct')} 2025`,
      estado: t('education.status_complete'),
      descripcion: t('education.education6.description'),
      aptitudes: ["C/C++", "Java", "Python", "HTML", "jQuery", "SQL", "MySQL", "PhpMyAdmin", "PHP", "Django", "Django REST Framework", "Node.js", "Vue.js", "Docker"]
    },
    {
      nombre: t('education.education5.name'),
      titulo: t('education.education5.title'),
      duracion: `${t('month.mar')} 2025 - ${t('month.jun')} 2025`,
      estado: t('education.status_complete'),
      descripcion: t('education.education5.description'),
      aptitudes: ["Microsoft SQL Server", "SQL Server Management Studio", "Visual Studio", ".NET Framework", "ASP.NET", "Reactjs"]
    },
    {
      nombre: t('education.education4.name'),
      titulo: t('education.education4.title'),
      duracion: `${t('month.aug')} 2023 - ${t('month.dec')} 2023`,
      estado: t('education.status_abandoned'),
      descripcion: t('education.education4.description'),
      aptitudes: ["Python", "Oracle SQL Developer", "InfoStat", "Prolog"]
    },
    {
      nombre: t('education.education3.name'),
      titulo: t('education.education3.title'),
      duracion: `${t('month.mar')} 2023 - ${t('month.apr')} 2023`,
      estado: t('education.status_complete'),
      descripcion: t('education.education3.description'),
      aptitudes: ["Sistemas de Gestión Ambiental", "Sistemas de Calidad", "Sistemas de Producción", "Seguridad y Salud Ocupacional (OHS)", "5S"]
    },
    {
      nombre: t('education.education2.name'),
      titulo: t('education.education2.title'),
      duracion: "2020 - 2020",
      estado: t('education.status_complete'),
      descripcion: t('education.education2.description'),
      aptitudes: ["HTML", "CSS"]
    },
    {
      nombre: t('education.education1.name'),
      titulo: t('education.education1.title'),
      duracion: "2018 - 2018",
      estado: t('education.status_complete'),
      descripcion: t('education.education1.description'),
      aptitudes: ["HTML"]
    },
  ];

  return <div className="p-4 space-y-6 text-white">
    <h1 className="text-4xl font-bold text-center">{t('education.experience')}</h1>
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

    <h1 className="text-4xl font-bold text-center">{t('education.education')}</h1>
    {estudios.map((e: any, i: Key) => (
      <div className="md:flex pb-8" key={i}>
        <div className="md:w-1/4 md:pr-4 md:flex md:flex-col items-end">
          <h3 className="text-xl text-darkpurple-500">{e.duracion}</h3>
          <h3 className="text-l text-darkpurple-500">{e.estado}</h3>
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