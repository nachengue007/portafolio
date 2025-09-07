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
      ]
    },
    {
      id: 3,
      titulo: "Idiomas",
      items: [
        "Inglés: Escrito Intermedio, Oral Básico",
        "Español: Escrito y Oral Nativo",
      ]
    },
  ];

  return <div className='md:flex p-4 text-white items-center justify-center min-h-screen'>
    {apartados.map((a: any) => (
      <div className="md:w-1/4" key={a.id}>
        <h1 className="pb-2 text-2xl text-white">{a.titulo}</h1>
        <ul className="list-disc pl-5">
          {a.items.map((p: String) => (
            <li>{p}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
}