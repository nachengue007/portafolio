import { Dialog } from "./Projects/Dialog";

import terminalImage from "../assets/terminal.png";
import gms14Image from "../assets/gms14.png";
import gm2Image from "../assets/gm2.webp";
import stockifyImage from "../assets/stockify.png";
import digitalArsImage from "../assets/digitalArs.svg";
import vuetifyImage from "../assets/vuetify.ico";

export function Projects() {
  const proyectos = [
    {
      id: 0,
      nombre: "Mundo Matriz",
      descripcion: "Es un programa de consola para el calculo de matrices, fue una de los primeros acercamientos a C++",
      tecnologias: ["C++"],
      url: "https://github.com/nachengue007/mundo-matriz",
      image: terminalImage,
    },
    {
      id: 1,
      nombre: "EncryptFons",
      descripcion: "Es un programa de consola donde estaba probando el uso de punteros y lectura de memoria.",
      tecnologias: ["C++"],
      url: "https://github.com/nachengue007/EncryptFons",
      image: terminalImage,
    },
    {
      id: 2,
      nombre: "Run",
      descripcion: "Es un juego que hice probando las funciones 3D de GameMaker: Studio 1.4",
      tecnologias: ["GameMaker: Studio 1.4"],
      url: "https://redviewstudio.itch.io/run",
      image: gms14Image,
    },
    {
      id: 3,
      nombre: "Eagle Killer",
      descripcion: "Es un clon de Wolfenstein 3D que hice en GameMaker: Studio 1.4 para probar el uso del RayCasting, en un principio empezo siendo un juego para la Global Game Jam 2021 pero segui con el desarrollo.",
      tecnologias: ["GameMaker: Studio 1.4"],
      url: "https://redviewstudio.itch.io/eaglekiller",
      image: gms14Image,
    },
    {
      id: 4,
      nombre: "core",
      descripcion: "Es un shooter básico y sencillo probando la generación semillas y uso de numeros pseudo-aleatorios",
      tecnologias: ["GameMaker: Studio 1.4", "GameMaker 2025"],
      url: "https://redviewstudio.itch.io/core",
      image: gm2Image,
    },
    {
      id: 5,
      nombre: "Stockify",
      descripcion: "Un sistema de inventario sencillo para eCommers donde se puede registrar, actualizar y eliminar Productos y, el contacto de los Proveedores para saber el origen de los Productos.",
      tecnologias: ["SQLite", "Django", "Django RestFramework", "ReactJs", "Tailwind CSS 3"],
      url: "",
      image: stockifyImage,
    },
    {
      id: 6,
      nombre: "DigitalArs Wallet",
      descripcion: "Es una billetera virtual que hicimos con un equipo para el curso de .NET/React de Alkemy como proyecto final de cursada.",
      tecnologias: ["MS SQL Server 2022", "C#", ".NET 8 Web Api", "ReactJS", "Material UI", "Toolpad", "Docker"],
      url: "https://github.com/alkemyTech/CFITDF-NetReact-W2-Back-S1",
      image: digitalArsImage,
    },
    {
      id: 7,
      nombre: "gestion_proyectos",
      descripcion: "Este es un sistema donde podrás gestionar tus proyectos de forma eficiente. Podrás crear, ver, actualizar y eliminar proyectos, tareas y miembros del equipo. También se pueden agregar comentarios para facilitar el progreso de cada proyecto.",
      tecnologias: ["PostgreSQL", "Django", "Django RestFramework", "Axios", "VueJS", "Vuetify", "Tailwind CSS 4", "Docker"],
      url: "",
      image: vuetifyImage,
    },
  ];

  return <div className="md:flex md:flex-col md:justify-center md:items-start md:h-screen">
    <div className="p-4 grid sm:grid-cols-1 md:grid-cols-3">
      {proyectos.map((p) => (
        <Dialog key={p.id} n={p} />
      ))}
    </div>
  </div>
}