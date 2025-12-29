
import '../styles/tareasStyles/PagListaTareas.css'
import { ListaTareas } from '../components/listaTareas/ListaTareas'

export function PagListaTareas () {

    return(
        <div className="pagina-principal-tareas">
            <h1>
                Lista de tareas dinámica:
            </h1>
            <ListaTareas />
        </div>
    )
}