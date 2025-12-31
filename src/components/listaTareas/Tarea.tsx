
import '../../styles/tareasStyles/Tarea.css'
import { AiOutlineCloseCircle } from "react-icons/ai";


interface Props {
    texto: string;
    completada: boolean;
    id: string;
    completarTarea: (id:string) => void;
    eliminarTarea: (id:string) => void;
}


export function Tarea ({id, texto, completada, completarTarea, eliminarTarea}: Props) {

    return (
        <div className={completada ? 'contenedor-principal-tarea completada' : 'contenedor-principal-tarea'}>
            <div className='tarea-texto'
            onClick={() => (completarTarea(id))}>
                {texto}
            </div>
            <div className='tarea-contenedor-iconos'
            onClick={() => eliminarTarea(id)}
            >
                <AiOutlineCloseCircle className='tarea-icono' />
            </div>
        </div>
    )
}

// Con el operador ternario, damos un estilo u otro en función del valor de la variable booleana 'completada'.