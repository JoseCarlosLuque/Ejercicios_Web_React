import { TareaFormulario } from "./TareaFormulario";
import { Tarea } from "./Tarea";
import { useState } from "react";

export function ListaTareas() {

    // Definimos el interfaz para la tarea
    interface tareaInterface {
        texto: string;
        completada: boolean;
    }

    // Declaramos una variable donde almacenaremos todas las tareas:
    const [tareas, setTareas] = useState<tareaInterface[]>([]); 

    // Agregar tareas:

    const agregrarTarea = () => {
        console.log("Tarea agregada con éxito.")
        
    }

  return (
    <div className="contenedor-principal-tareas">
      <div className="contenedor-input">
        <TareaFormulario />
      </div>
      <div className="contenedor-tareas">
        {
            
        }
      </div>
    </div>
  );
}
