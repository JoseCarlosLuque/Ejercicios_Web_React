import { Tarea } from "./Tarea";
import { TareaFormulario } from "./TareaFormulario";
import { useState } from "react";
import type { tareaInterface } from "../../types/interfaces/tarea";



export function ListaTareas() {


  //Declaramos una variable donde almacenaremos todas las tareas:
   const [tareas, setTareas] = useState<tareaInterface[]>([]); 

    // Agregar tareas:
    const agregrarTarea = (task: tareaInterface) => {
      // Comprobamos que la tarea no esté en blanco:
      if (task.texto.trim()){
        task.texto = task.texto.trim();
        const tareasActualizadas = [task, ...tareas];
        setTareas(tareasActualizadas);
      }
      
      console.log("Tarea agregada con éxito.");
      console.log(task);
    }

    const eliminarTarea = (id: string) => {
      const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
      setTareas(tareasActualizadas);
    }
    
    const completarTarea = (id: string) => {
      const tareasActualizadas = tareas.map(tarea => {
        if (tarea.id === id){
          tarea.completada = !tarea.completada
        }
        return tarea
      });
      setTareas(tareasActualizadas);
    }

  return (
    <div className="contenedor-principal-tareas">
      <div className="contenedor-input">
        <TareaFormulario onSubmit={agregrarTarea}/>
      </div>
      <div className="contenedor-tareas">
        {/* A continuación, añadiremos de manera dinámica las tareas a la lista. 
            Ya que estamos trabajando en Typescritp, debemos hacer un paso extra, que es 
            deifinir el tipo de objeto del cual haremos el array.
        */}
        {
          tareas.map((tarea) =>
            <Tarea 
              key={tarea.id}
              id={tarea.id}
              texto={tarea.texto}
              completada={tarea.completada}
              completarTarea={() => completarTarea(tarea.id)}
              eliminarTarea={() => eliminarTarea(tarea.id)}
            />
          )
        }
      </div>
    </div>
  );
}
