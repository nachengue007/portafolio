import { Dialog } from "./Projects/Dialog";

/// iconos
import terminalImage from "../assets/proyectos/iconos/terminal.png";
import gms14Image from "../assets/proyectos/iconos/gms14.png";
import gm2Image from "../assets/proyectos/iconos/gm2.webp";
import stockifyImage from "../assets/proyectos/iconos/stockify.png";
import digitalArsImage from "../assets/proyectos/iconos/digitalArs.svg";
import vuetifyImage from "../assets/proyectos/iconos/vuetify.ico";
import netcoreImage from "../assets/proyectos/iconos/netcore.png";

/// screenshots 
// stokify
import stokify_1 from "../assets/proyectos/screenshots/stokify/stokify_1.png";
import stokify_2 from "../assets/proyectos/screenshots/stokify/stokify_2.png";
import stokify_3 from "../assets/proyectos/screenshots/stokify/stokify_3.png";
import stokify_4 from "../assets/proyectos/screenshots/stokify/stokify_4.png";
import stokify_5 from "../assets/proyectos/screenshots/stokify/stokify_5.png";
import stokify_6 from "../assets/proyectos/screenshots/stokify/stokify_6.png";

// digitalars
import digitalars_1 from "../assets/proyectos/screenshots/digitalars/digitalars_1.jpg";
import digitalars_2 from "../assets/proyectos/screenshots/digitalars/digitalars_2.jpg";

// core
import core_1 from "../assets/proyectos/screenshots/core/core_1.png";
import core_2 from "../assets/proyectos/screenshots/core/core_2.png";
import core_3 from "../assets/proyectos/screenshots/core/core_3.png";
import core_4 from "../assets/proyectos/screenshots/core/core_4.png";
import core_5 from "../assets/proyectos/screenshots/core/core_5.png";

// eaglekiller
import eaglekiller_1 from "../assets/proyectos/screenshots/eaglekiller/eaglekiller_1.png";
import eaglekiller_2 from "../assets/proyectos/screenshots/eaglekiller/eaglekiller_2.png";
import eaglekiller_3 from "../assets/proyectos/screenshots/eaglekiller/eaglekiller_3.png";
import eaglekiller_4 from "../assets/proyectos/screenshots/eaglekiller/eaglekiller_4.png";
import eaglekiller_5 from "../assets/proyectos/screenshots/eaglekiller/eaglekiller_5.png";
import eaglekiller_6 from "../assets/proyectos/screenshots/eaglekiller/eaglekiller_6.png";

// gestion_proyectos
import gestion_proyectos_1 from "../assets/proyectos/screenshots/gestion_proyectos/gestion_proyectos_1.png";
import gestion_proyectos_2 from "../assets/proyectos/screenshots/gestion_proyectos/gestion_proyectos_2.png";
import gestion_proyectos_3 from "../assets/proyectos/screenshots/gestion_proyectos/gestion_proyectos_3.png";
import gestion_proyectos_4 from "../assets/proyectos/screenshots/gestion_proyectos/gestion_proyectos_4.png";
import gestion_proyectos_5 from "../assets/proyectos/screenshots/gestion_proyectos/gestion_proyectos_5.png";
import gestion_proyectos_6 from "../assets/proyectos/screenshots/gestion_proyectos/gestion_proyectos_6.png";
import gestion_proyectos_7 from "../assets/proyectos/screenshots/gestion_proyectos/gestion_proyectos_7.png";
import gestion_proyectos_8 from "../assets/proyectos/screenshots/gestion_proyectos/gestion_proyectos_8.png";
import gestion_proyectos_9 from "../assets/proyectos/screenshots/gestion_proyectos/gestion_proyectos_9.png";
import gestion_proyectos_10 from "../assets/proyectos/screenshots/gestion_proyectos/gestion_proyectos_10.png";
import gestion_proyectos_11 from "../assets/proyectos/screenshots/gestion_proyectos/gestion_proyectos_11.png";
import gestion_proyectos_12 from "../assets/proyectos/screenshots/gestion_proyectos/gestion_proyectos_12.png";

// run
import run_1 from "../assets/proyectos/screenshots/run/run_1.jpg";
import run_2 from "../assets/proyectos/screenshots/run/run_2.jpg";
import run_3 from "../assets/proyectos/screenshots/run/run_3.jpg";
import run_4 from "../assets/proyectos/screenshots/run/run_4.jpg";
import run_5 from "../assets/proyectos/screenshots/run/run_5.jpg";

export function Projects() {
  const proyectos = [
    {
      id: 0,
      nombre: "Mundo Matriz",
      descripcion: "Es un programa de consola para el calculo de matrices, fue una de los primeros acercamientos a C++",
      tecnologias: ["C++"],
      url: "https://github.com/nachengue007/mundo-matriz",
      image: terminalImage,
      screenshots: [],
    },
    {
      id: 1,
      nombre: "EncryptFons",
      descripcion: "Es un programa de consola donde estaba probando el uso de punteros y lectura de memoria.",
      tecnologias: ["C++"],
      url: "https://github.com/nachengue007/EncryptFons",
      image: terminalImage,
      screenshots: [],
    },
    {
      id: 2,
      nombre: "Run",
      descripcion: "Es un juego que hice probando las funciones 3D de GameMaker: Studio 1.4",
      tecnologias: ["GameMaker: Studio 1.4"],
      url: "https://redviewstudio.itch.io/run",
      image: gms14Image,
      screenshots: [run_1, run_2, run_3, run_4, run_5],
    },
    {
      id: 3,
      nombre: "Eagle Killer",
      descripcion: "Es un clon de Wolfenstein 3D que hice en GameMaker: Studio 1.4 para probar el uso del RayCasting, en un principio empezo siendo un juego para la Global Game Jam 2021 pero segui con el desarrollo.",
      tecnologias: ["GameMaker: Studio 1.4"],
      url: "https://redviewstudio.itch.io/eaglekiller",
      image: gms14Image,
      screenshots: [eaglekiller_1, eaglekiller_2, eaglekiller_3, eaglekiller_4, eaglekiller_5, eaglekiller_6],
    },
    {
      id: 4,
      nombre: "core",
      descripcion: "Es un shooter básico y sencillo probando la generación semillas y uso de numeros pseudo-aleatorios",
      tecnologias: ["GameMaker: Studio 1.4", "GameMaker 2025"],
      url: "https://redviewstudio.itch.io/core",
      image: gm2Image,
      screenshots: [core_1, core_2, core_3, core_4, core_5],
    },
    {
      id: 5,
      nombre: "Stockify",
      descripcion: "Un sistema de inventario sencillo para eCommers donde se puede registrar, actualizar y eliminar Productos y, el contacto de los Proveedores para saber el origen de los Productos.",
      tecnologias: ["SQLite", "Django", "Django RestFramework", "ReactJs", "Tailwind CSS 3"],
      url: "",
      image: stockifyImage,
      screenshots: [stokify_1, stokify_2, stokify_3, stokify_4, stokify_5, stokify_6],
    },
    {
      id: 6,
      nombre: "DigitalArs Wallet",
      descripcion: "Es una billetera virtual que hicimos con un equipo para el curso de .NET/React de Alkemy como proyecto final de cursada.",
      tecnologias: ["MS SQL Server 2022", "C#", ".NET 8 Web Api", "ReactJS", "Material UI", "Toolpad", "Docker"],
      url: "https://github.com/alkemyTech/CFITDF-NetReact-W2-Back-S1",
      image: digitalArsImage,
      screenshots: [digitalars_1, digitalars_2],
    },
    {
      id: 7,
      nombre: "gestion_proyectos_vuedjango",
      descripcion: "Este es un sistema donde podrás gestionar tus proyectos de forma eficiente. Podrás crear, ver, actualizar y eliminar proyectos, tareas y miembros del equipo. También se pueden agregar comentarios para facilitar el progreso de cada proyecto.",
      tecnologias: ["PostgreSQL", "Django", "Django RestFramework", "Axios", "VueJS", "Vuetify", "Tailwind CSS 4", "Docker"],
      url: "https://gitlab.com/laboratorio4-5834/gestion_proyectos",
      image: vuetifyImage,
      screenshots: [gestion_proyectos_1, gestion_proyectos_2, gestion_proyectos_3, gestion_proyectos_4, gestion_proyectos_5, gestion_proyectos_6, gestion_proyectos_7, gestion_proyectos_8, gestion_proyectos_9, gestion_proyectos_10, gestion_proyectos_11, gestion_proyectos_12],
    },
    {
      id: 8,
      nombre: "LocalBox",
      descripcion: "Es un sistema de almacenamiento para poder crear y gestionar tu propio servidor NAS. Donde podes guardar, eliminar y descargar archivos, tener multiples usuarios y compartir dentro de la red tus archivos, ya sean a usuarios en especifico como a todos los que esten registrados.",
      tecnologias: ["PostgreSQL", "C#", "ASP.NET", "TypeScript", "ReactJS", "Axios", "Tailwind CSS 4"],
      url: "",
      image: netcoreImage,
      screenshots: [],
    },
  ];

  return <div className="pl-2 flex flex-col md:justify-center md:h-screen">
    <div className="p-4 grid grid-cols-1 md:grid-cols-3">
      {proyectos.map((p) => (
        <Dialog key={p.id} n={p} />
      ))}
    </div>
  </div>
}