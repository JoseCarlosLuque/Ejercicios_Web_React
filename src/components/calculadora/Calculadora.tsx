import '../../styles/calculadoraStyles/Calculadora.css'
import { BotonCalculadora } from './BotonCalculadora'
import { PantallaCalculadora } from './PantallaCalculadora'

export function Calculadora () {

    return(
        <div className="contenedor-principal-calculadora">
                <div className="fila-pantalla-calculadora">
                    
                </div>
                <div className="fila ">
                    <BotonCalculadora simbolo='1'/>
                    <BotonCalculadora simbolo='2'/>
                    <BotonCalculadora simbolo='3'/>
                    <BotonCalculadora simbolo='+'/>
                </div>
                <div className="fila ">
                    <BotonCalculadora simbolo='4'/>
                    <BotonCalculadora simbolo='5'/>
                    <BotonCalculadora simbolo='6'/>
                    <BotonCalculadora simbolo='-'/>
                </div>
                <div className="fila ">
                    <BotonCalculadora simbolo='7'/>
                    <BotonCalculadora simbolo='8'/>
                    <BotonCalculadora simbolo='9'/>
                    <BotonCalculadora simbolo='x'/>
                </div>
                <div className="fila ">
                     <BotonCalculadora simbolo='='/>
                    <BotonCalculadora simbolo='0'/>
                    <BotonCalculadora simbolo='.'/>
                    <BotonCalculadora simbolo='/'/>
                </div>
                <div className='fila'>
                     <PantallaCalculadora input={"CLEAR"}/>
                </div>
        </div>
    )
}