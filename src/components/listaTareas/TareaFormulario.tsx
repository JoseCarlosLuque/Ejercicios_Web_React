
import { useState, type ChangeEvent } from 'react'
import '../../styles/tareasStyles/TareaFormulario.css'
import {v4 as uuidv4} from 'uuid';

/*
interface Props {
    texto: string,
    fucion: () => void
}
*/
export function TareaFormulario () {


    const [input, setInput] = useState("")

    const manejarCambio = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
    }
    const manejarEnvio = () => {
       
        const tareaNueva = {
            id: uuidv4() , // Generamos el ID aquí
            texto: input,
            completada: false
        };

        console.log("Enviando tarea:", tareaNueva);
        setInput(""); // Limpiamos el input tras enviar

    };

    return(
        <form className="contenedor-principal-formulario">
            <input type="text" 
            className='tarea-input'
            placeholder='Escribe tu tarea aquí'
            name='texto'
            onChange={manejarCambio}
            value={input}
            />
            <button className='boton-formulario'
            onClick={manejarEnvio}>
                Agregar Tarea
            </button>
        </form>
    )
}