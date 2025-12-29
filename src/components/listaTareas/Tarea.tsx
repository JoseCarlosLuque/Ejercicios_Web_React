
import '../../styles/tareasStyles/Tarea.css'
import { AiOutlineCloseCircle } from "react-icons/ai";

interface Props {
    texto: string;
    completada: boolean;
}

export function Tarea ({texto, completada}: Props) {

    return (
        <div className={completada ? 'contenedor-principal-tarea completada' : 'contenedor-principal-tarea'}>
            <div className='tarea-texto'>
                {texto}
            </div>
            <div className='tarea-contenedor-iconos'>
                <AiOutlineCloseCircle className='tarea-icono' />
            </div>
        </div>
    )
}

// Con el operador ternario, damos un estilo u otro en función del valor de la variable booleana 'completada'.