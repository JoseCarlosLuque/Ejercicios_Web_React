import { useState, type ChangeEvent } from "react";
import "../../styles/tareasStyles/TareaFormulario.css";
import { v4 as uuidv4 } from "uuid";
import type { tareaInterface } from "../../types/interfaces/tarea";



interface Props {
  onSubmit: (tarea: tareaInterface) => void;
}

export function TareaFormulario({ onSubmit }: Props) {
  const [input, setInput] = useState("");

  const manejarCambio = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("manejando Cambios...");
    setInput(e.target.value);
  };

  /*
        A la hora de manejar el id se utiliza una biblioteca externa que nos genera un número aleatorio 
        lo suficientemente largo como para que el riesgo de "colisión" sea practicamente imposible 
        para el número de ids que manejamos.
    */
  const manejarEnvio = (e: React.FormEvent<HTMLFormElement>) => {
    // Evitamos que cargue toda la página:
    e.preventDefault();

    const tareaNueva: tareaInterface = {
      id: uuidv4(), // Generamos el ID aquí
      texto: input,
      completada: false,
    };
    // Le pasamos la tareaNueva que es de tipo tarea.
    onSubmit(tareaNueva);
    console.log("Enviando tarea:", tareaNueva);
    setInput(""); // Limpiamos el input tras enviar
  };

  return (
    <form className="contenedor-principal-formulario" onSubmit={manejarEnvio}>
      <input
        type="text"
        className="tarea-input"
        placeholder="Escribe tu tarea aquí"
        name="texto"
        onChange={manejarCambio}
        value={input}
      />
      <button className="boton-formulario">Agregar Tarea</button>
    </form>
  );
}
