import { useState, useEffect } from "react";

interface Proyecto {
  nombre: string;
  descripcion: string;
  tecnologias: any;
  url: string;
  image: any;
}

interface DialogProps {
  n: Proyecto;
}

export function Dialog({ n }: DialogProps ) {
  const [open, setOpen] = useState(false);
  
  const [opacityClass, setOpacityClass] = useState('opacity-0');

  useEffect(() => {
    if (open) {
      setOpacityClass('opacity-100');
    } else {
      setOpacityClass('opacity-0');
    }
  }, [open]);

  return <>
    <button className="pr-4 pb-8" onClick={() => setOpen(true)}>
      <div className="max-w-sm text-white bg-darkpurple-200 rounded transition-colors duration-300 hover:bg-darkpurple-500 hover:text-black">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <span className="font-bold text-xl">{n.nombre}</span>
            <img src={n.image} alt={n.nombre} className="w-12 h-12 object-contain" />
          </div>
        </div>
      </div>
    </button>
    
    {open ?
    <div className={`fixed inset-0 flex items-center justify-center z-50 [transition:opacity_100ms_ease-in] ${opacityClass} bg-black/50`}>
      <div className="bg-white max-w-sm p-4">
        <div>
          <div className="text-xl">{n.nombre}</div>
          <p className="text-gray-700 text-base">
            {n.descripcion}
          </p>
        </div>
    
        <div className="pt-2 pb-2 flex flex-wrap gap-2">
          {n.tecnologias.map((t: any) => (
            <span className="bg-gray-200 px-3 py-1 text-sm text-gray-700">
              {t}
            </span>
          ))}
        </div>
  
        <div className="flex justify-between mt-2">
          <button onClick={() => setOpen(false)} className="text-sm text-red-500 font-semibold hover:underline">
            Cerrar
          </button>
          {n.url !== "" ? 
            <a href={n.url} target="_blank" className="text-sm text-red-500 font-semibold hover:underline">
              Ir al proyecto
            </a>
          : 
            <p className="text-sm text-red-500 font-semibold hover:underline">
              Proximamente
            </p>
          }
        </div>
      </div>
    </div> : null}
  </>
}