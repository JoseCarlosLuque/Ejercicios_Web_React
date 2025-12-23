import '../../styles/calculadoraStyles/Calculadora.css'
import { BotonCalculadora } from './BotonCalculadora'
import { PantallaCalculadora } from './PantallaCalculadora'
import { useState } from 'react'

export function Calculadora () {

    // Inicializamos el valor de la pantalla

    const [inputPantalla, setInput] = useState('');

    // Funcion para agregar el input de la pantalla.
    
    // Funcion clear:
    const clearScreen = () => {
        setInput('')
    }
    // Funcion añadir a pantalla
    const funcionAddInput = (simbolo: string) => {
        setInput (inputPantalla + simbolo)
    }
    // Funcion Calcular hacemos uso de una funcion de JS. :
    const funcionEvaluarInput = () => {
        if (inputPantalla){
             setInput (eval(inputPantalla))
        }else{
            alert("Ingrese valores válidos")
        }
        /*
            En JavaScript existen valores falsy y truthy, en el caso de evaluar si una cadena de caracteres es true
            o false se tomará como criterio si está "vacia" o si tiene contenido siendo false cuando esta vacía. 
            Esto nos permite hacer un manejo de posibles errores a la hora de usar la calculadora
        */
    }

    return(
        <div className="contenedor-principal-calculadora">
                <div className="fila-pantalla-calculadora">
                    <PantallaCalculadora input={inputPantalla}/>
                </div>
                <div className="fila ">
                    <BotonCalculadora simbolo='1' funcion={() => funcionAddInput('1')}/>
                    <BotonCalculadora simbolo='2' funcion={() => funcionAddInput('2')}/>
                    <BotonCalculadora simbolo='3' funcion={() => funcionAddInput('3')}/>
                    <BotonCalculadora simbolo='+' funcion={() => funcionAddInput('+')}/>
                </div>
                <div className="fila ">
                    <BotonCalculadora simbolo='4' funcion={() => funcionAddInput('4')}/>
                    <BotonCalculadora simbolo='5' funcion={() => funcionAddInput('5')}/>
                    <BotonCalculadora simbolo='6' funcion={() => funcionAddInput('6')}/>
                    <BotonCalculadora simbolo='-' funcion={() => funcionAddInput('-')}/>
                </div>
                <div className="fila ">
                    <BotonCalculadora simbolo='7' funcion={() => funcionAddInput('7')}/>
                    <BotonCalculadora simbolo='8' funcion={() => funcionAddInput('8')}/>
                    <BotonCalculadora simbolo='9' funcion={() => funcionAddInput('9')}/>
                    <BotonCalculadora simbolo='*' funcion={() => funcionAddInput('*')}/>
                </div>
                <div className="fila ">
                     <BotonCalculadora simbolo='=' funcion={ funcionEvaluarInput } />
                    <BotonCalculadora simbolo='0' funcion={() => funcionAddInput('0')}/>
                    <BotonCalculadora simbolo='.' funcion={() => funcionAddInput('.')}/>
                    <BotonCalculadora simbolo='/' funcion={() => funcionAddInput('/')}/>
                    
                </div>
                <div className='fila'>
                    <BotonCalculadora simbolo='Clear' funcion={clearScreen}/>
                </div>
        </div>
    )
}